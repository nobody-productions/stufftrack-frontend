<template>
  <div class="modal" tabindex="-1" id="book_detail_modal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ libro.book.name }}</h5>
          <button type="button" class="btn-close" id="dismiss" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row text-center d-block">
                  <img class="book_cover" v-bind:src="libro.book.image" alt="">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <h1 class="mb-0">{{ libro.book.name }}</h1>
                  <div class="text-secondary"> <b>Piattaforme: </b><span class="me-1" v-for="platform in this.libro.book.platforms" :key="platform.id">{{ platform.name }} </span></div>
                  <div class="text-secondary"> <b>Anno: </b>{{ this.libro.book.year }} </div>
                  <div class="text-secondary"> <b>Autori: </b><span class="me-1" v-for="author in this.libro.book.authors" :key="author.id">{{ author.nickname }} </span></div>
                  <div class="text-secondary"> <b>Genere: </b><span class="me-1" v-for="genre in this.libro.book.genres" :key="genre.id">{{ genre.name }} </span></div>
                </div>

                <div class="col star_bar">
                  <i class="fa-solid fa-star star1" @click="updateRating(1)" v-bind:style="{color: rank >= 1? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star2" @click="updateRating(2)" v-bind:style="{color: rank >= 2? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star3" @click="updateRating(3)" v-bind:style="{color: rank >= 3? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star4" @click="updateRating(4)" v-bind:style="{color: rank >= 4? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star5" @click="updateRating(5)" v-bind:style="{color: rank >= 5? 'gold':'gray'}"></i>
                </div>

                  <h4>Ore di lettura</h4>
                  <input type="number" v-bind:id="'playtime' + libro.book.id" v-bind:value="libro.hours" class="form-control book_readtime" @change="updateTime" min="0">

                <div class="row mt-3">
                  <h4>Descrizione</h4>
                  <p class="bg-light">
                    {{ libro.book.description }}
                  </p>
                </div>
                <div class="row mt-3">
                  <h4>Piattaforma</h4>
                  <select class="form-control" name="platform_id" :id="'platform_id' + libro.book.id" @change="updateBookPlatform">
                    <option v-for="platform in platforms" :value="platform.id" :key="platform.id">{{ platform.name }}</option>
                  </select>
                </div>
                <div class="row mt-3">
                  <!-- Stato del libro -->
                  <hr>
                  <div class="col pb-2">
                    <input class="me-2" type="checkbox" v-bind:id="'bought' + libro.book.id" @change="updateBought">
                    <label :for="'bought' + libro.book.id">libro acquistato</label>
                  </div>
                  <h4>Stato</h4>
                  <select :id="'book_status' + libro.book.id" class="form-select" @change="updateStatus">
                    <option :id="'daleggere' + libro.book.id" value="1">Da leggere</option>
                    <option :id="'incorso' + libro.book.id" value="2">In corso</option>
                    <option :id="'completato' + libro.book.id" value="4">Completato</option>
                    <option :id="'abbandonato' + libro.book.id" value="5">Abbandonato</option>
                  </select>
                  </div>
                <div class="row mt-3">
                  <h4>In data</h4>
                  <input type="date" :id="'dataCompletamento' + libro.book.id" :disabled="date_time_disabled" @change="updateDateCompleted" >
                </div>
                <div class="row mt-3">
                  <h4>Note</h4>
                  <textarea class="form-control" v-bind:id="'note' + libro.book.id" v-model="this.comment" rows="3" @change="updateComment"></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">

            <button type="button" class="btn btn-danger" @click="deleteBook">Rimuovi</button>
            <button type="button" :id="'closemodal'+libro.book.id" class="btn btn-secondary-outline" data-bs-dismiss="modal">Chiudi</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {

  name: "Modal-component",
  props: {
    libro: Object,
  },

  setup(){
    let date_time_disabled = true;

    let rank = 0;
    let comment = "";
    let vg = "";
    let platforms = ref([]);


    return{
      rank,
      comment,
      date_time_disabled,
      vg,
      platforms
    }
  },
  methods: {
    bookStatus: function() {

      if (this.libro.status === 'Da leggere'){
        document.getElementById('daleggere' + this.libro.book.id).setAttribute('selected', 'selected');
      } else if (this.libro.status === 'In corso'){
        document.getElementById('incorso' + this.libro.book.id).setAttribute('selected', 'selected');
      } else if (this.libro.status === 'Finito'){
        document.getElementById('finito' + this.libro.book.id).setAttribute('selected', 'selected');
      } else if (this.libro.status === 'Completato'){
        document.getElementById('completato' + this.libro.book.id).setAttribute('selected', 'selected');
      } else if (this.libro.status === 'Abbandonato'){
        document.getElementById('abbandonato' + this.libro.book.id).setAttribute('selected', 'selected');
      }

      this.date_time_disabled = !(this.libro.status === "Completato" || this.libro.status === "Abbandonato");
    },

    updateTime: function () {
      // get time from
      let time = document.getElementById("playtime" + this.libro.book.id);
      let time_value = time.value;
      axios.put("libraries/books/" + this.libro.book.id, {
        hours: time_value,
        platform: this.libro.platform
      }).then(() => {
        this.$parent.updateHours(this.libro.book.id, parseInt(time_value));
          }
      )
    },

    updateStatus: function () {
      // get time from
      let status = document.getElementById("book_status" + this.libro.book.id);
      let status_value_text = status.options[status.selectedIndex].text;
      axios.put("libraries/books/" + this.libro.book.id, {
        status: status_value_text,
        platform: this.libro.platform
      }).then(() => {

        this.date_time_disabled = !(status_value_text === "Completato" || status_value_text === "Abbandonato");

        this.$parent.updateCompleted(this.libro.book.id, status_value_text);
      })
    },

    getRating: function () {
        axios.get("libraries/books/" + this.libro.book.id + "/rating").then(response => {
        let int_rating = response.data.ranking;
        let comment = response.data.comment;
        // check that int_rating is a number
        if (isNaN(int_rating)) {
          int_rating = 0;
        }




        // document.getElementById('star' + rating_value + this.libro.book.id).setAttribute('checked', 'checked');
          this.rank = int_rating;
          // if comment is not undefined
          if (comment !== undefined) {
            this.comment = comment;
          }
          else {
            this.comment = "";
          }
      });

    },
    updateRating: function (value){
      if (value > 0){
        // check if rating is already set
        axios.get("libraries/books/" + this.libro.book.id + "/rating").then(response => {
          axios.put("libraries/books/" + this.libro.book.id + "/rating", {
            ranking: value,
          }).then(response => {

            this.getRating();
          });
        }).catch(() => {
          axios.post("libraries/books/" + this.libro.book.id + "/rating", {
            ranking: value
          }).then(response => {
            this.getRating();
          });
        })


      }
    },
    updateComment: function(){
      axios.get("libraries/books/" + this.libro.book.id + "/rating").then(response => {
        axios.put("libraries/books/" + this.libro.book.id + "/rating", {
          comment: this.comment
        }).then(response => {

          this.getRating();
        });
      }).catch(() => {
        axios.post("libraries/books/" + this.libro.book.id + "/rating", {
          comment: this.comment
        }).then(response => {
          this.getRating();
        });
      })
    },

    updateBought: function (){
      axios.put("/libraries/books/" + this.libro.book.id, {
          bought: document.getElementById('bought' + this.libro.book.id).checked,
          platform: this.libro.platform
      }).then(()=>{
        this.$parent.updateBoughtBooks();
      })
    },

    getbought: function (){
      axios.get("/libraries/books/" + this.libro.book.id).then(response => {
        let bought = response.data.bought;
        document.getElementById('bought' + this.libro.book.id).checked = bought === true;
      });
    },

    // data di completamento dell'utente
    updateDateCompleted: function () {
      axios.put("/libraries/books/" + this.libro.book.id, {
          finished: new Date(document.getElementById('dataCompletamento' + this.libro.book.id).value).toUTCString(),
          platform: this.libro.platform
      })
    },

    getDateCompleted: function () {
      axios.get("/libraries/books/" + this.libro.book.id).then(response => {
        let finished = response.data.finished;

        if(finished !== null){
          document.getElementById('dataCompletamento' + this.libro.book.id).value = finished;
          // remove from finished, everything after T (because of postgre giving back a date with T in the middle)
          let finished_date = finished.substring(0, finished.indexOf('T'));
          
          // set value of getelementbyid datacompletamento 4
          document.getElementById('dataCompletamento' + this.libro.book.id).value = finished_date;
        }

      });
    },

    deleteBook() {
      if (confirm('Sei sicuro di voler rimuovere il libro ' + this.libro.book.name + ' dalla tua libreria?')) {
        axios.delete("libraries/books/" + this.libro.book.id).then(response => {

            document.getElementById('closemodal'+this.libro.book.id).click();
            this.$parent.showMessage("Libro rimosso con successo!", "success");
            this.$parent.updateBooks();
            this.$parent.updateStats();
          }).catch(error => {
            //
        });
      }
    },


    getBookPlatforms: function (){
      axios.get('/books/' + this.libro.book.id)
          .then(async response => {
            // console.log(response.data[0].platforms);
            this.platforms = response.data[0].platforms;
            // console.log('platform_id' + this.libro.book.id)
            // TODO fixare per rimuovere questa sleep
            await new Promise(r => setTimeout(r, 1000));
            document.getElementById("platform_id" + this.libro.book.id).value = this.libro.platform
          })
          .catch(error => {
            //
          })

    },

    updateBookPlatform: function (){
      axios.put('/libraries/books/' + this.libro.book.id, {
        platform: document.getElementById('platform_id' + this.libro.book.id).value
      }).then(()=>{
        this.$parent.updateBooks();
        this.$parent.updateStats();
      })
    },
  
},


  // call bookstatus function

  mounted() {

    this.getRating();
    this.bookStatus();
    this.getbought();
    this.getBookPlatforms();
    this.getDateCompleted();
  }
  
}





</script>

<style scoped>

.star_bar:hover > i:before {
  color: gold;
}

.star_bar > i:hover ~ i:before {
  color: gray;
}

.book_cover{
  width: auto;
}

.book_readtime{
  width: 100px;
}
</style>