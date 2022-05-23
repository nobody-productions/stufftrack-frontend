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
            <input list="bk" id="bk-list"  @change="selectBook" style="width: 100%; margin-bottom: 10px;">
            <datalist id="bk">
              <option v-for="book in books" :value="book.name" :key="book.id">{{ book.name }}</option>
            </datalist>
          </div>
          <div id="book-details" v-if="isValid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row text-center d-block">
                  <img  v-bind:src="book.image" style="width: auto;" alt="">
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
        console.log("fregna di mammeta")
      });
    },

    selectBook: function() {
      console.log(document.getElementById("bk-list").value)
      this.selectedbook = document.getElementById("bk-list").value;
      this.validBook();
              console.log("cazzo in culo")
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

</style>