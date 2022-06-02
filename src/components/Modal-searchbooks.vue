<template>
  <div class="modal" tabindex="-1" id="modal-searchbooks" aria-labelledby="modal-searchbooks" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cerca</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="book-list">
            <input class="bk-list" list="bk" id="bk-list" @change="selectBook">
            <datalist id="bk">
              <option v-for="book in books" :value="book.name" :key="book.id">{{ book.name }}</option>
            </datalist>
          </div>
          <div id="book-details" v-if="isValid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row text-center d-block">
                  <img class="book-cover" v-bind:src="book.image" alt="">
                </div>
              </div>
              <div class="col-sm-8">
                <h3>{{ book.name }}</h3>
                <span class="text-secondary">{{ book.year }}</span>
                <p>{{ book.description }}</p>

              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer" v-if="isValid">
          <button  type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#Modal-addbook" @click="selezionaAggiungi">Aggiungi libro</button>
      </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import {ref} from "vue";
export default {
  name: "Modal-searchbooks",
  setup(){
    let books = ref([]);
    let selectedbook = ref("");
    let isValid = ref(false);
    let book = ref({});
    return {
      books,
      selectedbook,
      isValid,
      book
    }
  },
  methods: {
    getAllBooks: function() {
      axios.get('books').then(response => {
        this.books = response.data.data;
        let current_page = response.data.meta.page;
        let last_page = response.data.meta.last_page;
        while (current_page < last_page) {
          current_page++;
          axios.get('/books/?page=' + current_page)
              .then(response => {
                this.books = this.books.concat(response.data.data);
              })
              .catch(error => {
                console.log(error);
              })
        }
      });
    },

    selectBook: function() {
      console.log(document.getElementById("bk-list").value)
      this.selectedbook = document.getElementById("bk-list").value;
      this.validBook();
    },

    validBook: function() {
      // check if selected book is in books
      this.isValid = false;
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === this.selectedbook) {
          this.isValid = true;
          this.book = this.books[i];
          break;

        }
      }
    },

    selezionaAggiungi: function() {
      document.getElementById("book_select").value = this.book.id;
      document.querySelector('#book_select').dispatchEvent(new Event('change'))

    }
  },
  mounted() {
    this.getAllBooks();
    document.getElementById("modal-searchbooks").addEventListener("shown.bs.modal", () => {
      document.getElementById("bk-list").focus();
    });
  }
}
</script>
<style scoped>

.bk-list {
  width: 100%;
  margin-bottom: 10px;
}

.book-cover {
  width: auto;
}

</style>