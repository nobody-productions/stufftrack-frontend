<template>
  <div class="modal" tabindex="-1" id="Modal-addbook" aria-labelledby="Modal-addbook" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Aggiungi un libro</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
          <div class="container-fluid">
          <!-- Form -->
            <form class="pb-2">
              <label for="book_select">Libro</label>
              <select class="form-control" id="book_select" name="book_id" @change="getBookPlatforms">
                <!-- empty default option -->
                <option value="">Seleziona un libro:</option>
                <option v-for="book in books" :value="book.id" :key="book.id">{{ book.name }}</option>
              </select>

              <label for="platform_id">Piattaforma</label>
              <select class="form-control" name="platform_id" id="platform_id">
                <option v-for="platform in platforms" :value="platform.id" :key="platform.id">{{ platform.name }}</option>
              </select>

              <input type="checkbox" id="gb" >
              <label for="gb">Già acquistato</label>
              <br>
              <label for="book_rating">Valutazione</label>
              <select class="form-control" name="rating" id="book_rating">
                <option value="0">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <label for="book_comment">Commento</label>
              <textarea class="form-control" name="comment" id="book_comment" rows="3"></textarea>
            </form>

          </div>
          <div class="modal-footer">
            <button id="dismiss-modal-addbook" type="button" class="btn btn-secondary-outline" data-bs-dismiss="modal">Annulla</button>
            <button id="add-book-button" type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="addBook">Aggiungi</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from "vue";

export default {
  name: "Modal-addbook",

  data() {
    let books = [];
    let platforms = ref([]);
    return {
      books: books,
      platforms
    }
  },

  methods: {
    getBooksList() {
      axios.get('/books')
          .then(response => {
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
                        //
                      })
                }
          })
          .catch(error => {
            //
          })
    },

    addBook() {

      let book_id = document.getElementsByName('book_id')[0].value;

      axios.post("/libraries/books/" + book_id,{
        bought: document.getElementById('gb').checked,
        platform: parseInt(document.getElementById('platform_id').value),
      }).then(() => {

        let comment = document.getElementsByName('comment')[0].value;

        if (comment !== ""){
          axios.post("/libraries/books/" + book_id + "/rating", {
            ranking: document.getElementsByName('rating')[0].value,
            comment: document.getElementsByName('comment')[0].value
          }).then(() => {
            // window.location.href = "/";
            this.$parent.showMessage("Libro aggiunto con successo!", "success");
            this.$parent.updateBooks();
          }).catch(error => {
            //
          });
        }
        else {
          axios.post("/libraries/books/" + book_id + "/rating", {
            ranking: document.getElementsByName('rating')[0].value
          }).then(() => {
            // window.location.href = "/";
            this.$parent.showMessage("Libro aggiunto con successo!", "success");
            this.$parent.updateBooks();
          }).catch(error => {
            //

          });
        }
      }).catch(error => {
        if (error.response.status === 400) {
          this.$parent.showMessage("Errore: libro già presente nella libreria", "warning");
        }
        else {
          this.$parent.showMessage("Errore: libro non aggiunto, codice errore: " + error.response.status, "danger");
        }
      });


    },
    getBookPlatforms: function (){
      let book_id = document.getElementsByName('book_id')[0].value;
      if (book_id === ""){
        document.getElementById("add-book-button").disabled = true;
        this.platforms = [];
        return
      }
      axios.get('/books/' + book_id)
          .then(response => {
            this.platforms = response.data[0].platforms;
            document.getElementById("add-book-button").disabled = false;
          })
          .catch(error => {
            //
          })

    }
  },
  mounted() {
    this.getBooksList();
    document.getElementById("add-book-button").disabled = true;
  }
}


</script>

<style scoped>

</style>