<template>
  <div class="modal" tabindex="-1" id="game_detail_modal" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ gioco.videogame.name }}</h5>
          <button type="button" class="btn-close" id="dismiss" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row text-center d-block">
                  <img class="game_cover" v-bind:src="gioco.videogame.image" alt="">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <h1 class="mb-0">{{ gioco.videogame.name }}</h1>
                  <div class="text-secondary"> <b>Piattaforme: </b><span class="me-1" v-for="platform in this.gioco.videogame.platforms" :key="platform.id">{{ platform.name }} </span></div>
                  <div class="text-secondary"> <b>Anno: </b>{{ this.gioco.videogame.year }} </div>
                  <div class="text-secondary"> <b>Sviluppatori: </b><span class="me-1" v-for="developer in this.gioco.videogame.developers" :key="developer.id">{{ developer.name }} </span></div>
                  <div class="text-secondary"> <b>Genere: </b><span class="me-1" v-for="genre in this.gioco.videogame.genres" :key="genre.id">{{ genre.name }} </span></div>
                  <div class="text-secondary"> <b>Gioco originale: </b>
                      <span v-if="this.remake.original">
                        <span class="me-1">{{ vg }}</span>
                      </span>
                      <span v-else>-</span>
                  </div>

                  <div class="text-secondary"> <b>Remake: </b>
                    <span v-if="this.remake.remake">
                      <span class="me-1">{{ vg }}</span>
                    </span>
                    <span v-else>-</span>
                  </div>
                  
                </div>

                <div class="col star_bar">
                  <i class="fa-solid fa-star star1" @click="updateRating(1)" v-bind:style="{color: rank >= 1? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star2" @click="updateRating(2)" v-bind:style="{color: rank >= 2? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star3" @click="updateRating(3)" v-bind:style="{color: rank >= 3? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star4" @click="updateRating(4)" v-bind:style="{color: rank >= 4? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star5" @click="updateRating(5)" v-bind:style="{color: rank >= 5? 'gold':'gray'}"></i>
                </div>

                  <h4>Ore di gioco</h4>
                  <input type="number" v-bind:id="'playtime' + gioco.videogame.id" v-bind:value="gioco.hours" class="form-control game_playtime" @change="updateTime" min="0">

                <div class="row mt-3">
                  <h4>Descrizione</h4>
                  <p class="bg-light">
                    {{ gioco.videogame.description }}
                  </p>
                </div>
                <div class="row mt-3">
                  <h4>Piattaforma</h4>
                  <select class="form-control" name="platform_id" :id="'platform_id' + gioco.videogame.id" @change="updateGamePlatform">
                    <option v-for="platform in platforms" :value="platform.id" :key="platform.id">{{ platform.name }}</option>
                  </select>
                </div>
                <div class="row mt-3">
                  <!-- Stato del gioco -->
                  <hr>
                  <div class="col pb-2">
                    <input class="me-2" type="checkbox" v-bind:id="'bought' + gioco.videogame.id" @change="updateBought">
                    <label :for="'bought' + gioco.videogame.id">Gioco acquistato</label>
                  </div>
                  <h4>Stato</h4>
                  <select :id="'game_status' + gioco.videogame.id" class="form-select" @change="updateStatus">
                    <option :id="'dagiocare' + gioco.videogame.id" value="1">Da giocare</option>
                    <option :id="'incorso' + gioco.videogame.id" value="2">In corso</option>
                    <option :id="'finito' + gioco.videogame.id" value="3">Finito</option>
                    <option :id="'completato' + gioco.videogame.id" value="4">Completato</option>
                    <option :id="'abbandonato' + gioco.videogame.id" value="5">Abbandonato</option>
                  </select>
                  </div>
                <div class="row mt-3">
                  <h4>In data</h4>
                  <input type="date" :id="'dataCompletamento' + gioco.videogame.id" :disabled="date_time_disabled" @change="updateDateCompleted" >
                </div>
                <div class="row mt-3">
                  <h4>Note</h4>
                  <textarea class="form-control" v-bind:id="'note' + gioco.videogame.id" v-model="this.comment" rows="3" @change="updateComment"></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">

            <button type="button" class="btn btn-danger" @click="deleteGame">Rimuovi</button>
            <button type="button" :id="'closemodal'+gioco.videogame.id" class="btn btn-secondary-outline" data-bs-dismiss="modal">Chiudi</button>
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
    gioco: Object,
  },

  data(){
    let date_time_disabled = true;

    let rank = 0;
    let comment = "";
    let remake = "";
    let vg = "";
    let platforms = ref([]);


    return{
      rank,
      comment,
      date_time_disabled,
      remake,
      vg,
      platforms
    }
  },
  methods: {
    gameStatus: function() {

      if (this.gioco.status === 'Da giocare'){
        document.getElementById('dagiocare' + this.gioco.videogame.id).setAttribute('selected', 'selected');
      } else if (this.gioco.status === 'In corso'){
        document.getElementById('incorso' + this.gioco.videogame.id).setAttribute('selected', 'selected');
      } else if (this.gioco.status === 'Finito'){
        document.getElementById('finito' + this.gioco.videogame.id).setAttribute('selected', 'selected');
      } else if (this.gioco.status === 'Completato'){
        document.getElementById('completato' + this.gioco.videogame.id).setAttribute('selected', 'selected');
      } else if (this.gioco.status === 'Abbandonato'){
        document.getElementById('abbandonato' + this.gioco.videogame.id).setAttribute('selected', 'selected');
      }

      this.date_time_disabled = !(this.gioco.status === "Completato" || this.gioco.status === "Finito" || this.gioco.status === "Abbandonato");
    },

    updateTime: function () {
      // get time from
      let time = document.getElementById("playtime" + this.gioco.videogame.id);
      let time_value = time.value;
      axios.put("libraries/videogames/" + this.gioco.videogame.id, {
        hours: time_value,
        platform: this.gioco.platform
      }).then(() => {
        this.$parent.updateHours(this.gioco.videogame.id, parseInt(time_value));
          }
      )
    },

    updateStatus: function () {
      // get time from
      let status = document.getElementById("game_status" + this.gioco.videogame.id);
      let status_value_text = status.options[status.selectedIndex].text;
      axios.put("libraries/videogames/" + this.gioco.videogame.id, {
        status: status_value_text,
        platform: this.gioco.platform
      }).then(() => {

        this.date_time_disabled = !(status_value_text === "Completato" || status_value_text === "Finito" || status_value_text === "Abbandonato");

        this.$parent.updateCompleted(this.gioco.videogame.id, status_value_text);
      })
    },

    getRating: function () {
        axios.get("libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
        let int_rating = response.data.ranking;
        let comment = response.data.comment;
        // check that int_rating is a number
        if (isNaN(int_rating)) {
          int_rating = 0;
        }

        console.log("Setto il valore di rating a " + int_rating + " per il videogame " + this.gioco.videogame.name);
        // set rating value
        console.log("star" + int_rating + this.gioco.videogame.id);
        // document.getElementById('star' + rating_value + this.gioco.videogame.id).setAttribute('checked', 'checked');
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
        axios.get("libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
          axios.put("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
            ranking: value,
          }).then(response => {
            console.log(response.data);
            this.getRating();
          });
        }).catch(() => {
          axios.post("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
            ranking: value
          }).then(response => {
            this.getRating();
          });
        })


      }
    },
    updateComment: function(){
      axios.get("libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
        axios.put("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
          comment: this.comment
        }).then(response => {
          console.log(response.data);
          this.getRating();
        });
      }).catch(() => {
        axios.post("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
          comment: this.comment
        }).then(response => {
          this.getRating();
        });
      })
    },

    updateBought: function (){
      axios.put("/libraries/videogames/" + this.gioco.videogame.id, {
          bought: document.getElementById('bought' + this.gioco.videogame.id).checked,
          platform: this.gioco.platform
      }).then(()=>{
        this.$parent.updateBoughtGames();
      })
    },

    getBought: function (){
      axios.get("/libraries/videogames/" + this.gioco.videogame.id).then(response => {
        let bought = response.data.bought;
        document.getElementById('bought' + this.gioco.videogame.id).checked = bought === true;
      });
    },

    // data di completamento dell'utente
    updateDateCompleted: function () {
      axios.put("/libraries/videogames/" + this.gioco.videogame.id, {
          finished: new Date(document.getElementById('dataCompletamento' + this.gioco.videogame.id).value).toUTCString(),
          platform: this.gioco.platform
      })
    },

    getDateCompleted: function () {
      axios.get("/libraries/videogames/" + this.gioco.videogame.id).then(response => {
        let finished = response.data.finished;

        if(finished !== null){
          document.getElementById('dataCompletamento' + this.gioco.videogame.id).value = finished;
          // remove from finished, everything after T (because of postgre giving back a date with T in the middle)
          let finished_date = finished.substring(0, finished.indexOf('T'));
          
          // set value of getelementbyid datacompletamento 4
          document.getElementById('dataCompletamento' + this.gioco.videogame.id).value = finished_date;
        }

      });
    },

    deleteGame() {
      if (confirm('Sei sicuro di voler rimuovere il gioco ' + this.gioco.videogame.name + ' dalla tua libreria?')) {
        axios.delete("libraries/videogames/" + this.gioco.videogame.id).then(response => {
            document.getElementById('closemodal'+this.gioco.videogame.id).click();
            this.$parent.showMessage("Gioco rimosso con successo!", "success");
            this.$parent.updateVideogames();
            this.$parent.updateStats();
          }).catch(error => {
            console.log(error);
        });
      }
    },

    getRemake() {
        // TODO: funziona, ma in console stampa 404. Forse c'é un altro modo per fare la stessa cosa?
        axios.get("videogames/" + this.gioco.videogame.id + "/remake").then(response => {
          this.remake = response.data[0];
          let vg_id = this.remake.remake ? this.remake.remake : this.remake.original; 

          axios.get("videogames/" + vg_id).then(response => {
            this.vg = response.data[0].name;
          }).catch(error => {
            if(error.response && error.response.status === 404) {
              console.log("No vg found");
            }
          });  
        }).catch(error => {
          if(error.response && error.response.status === 404) {
            console.log("No remake found");
          }
        });
    },

    getGamePlatforms: function (){
      axios.get('/videogames/' + this.gioco.videogame.id)
          .then(async response => {
            // console.log(response.data[0].platforms);
            this.platforms = response.data[0].platforms;
            // console.log('platform_id' + this.gioco.videogame.id)
            // TODO fixare per rimuovere questa sleep
            await new Promise(r => setTimeout(r, 1000));
            document.getElementById("platform_id" + this.gioco.videogame.id).value = this.gioco.platform
          })
          .catch(error => {
            console.log(error);
          })

    },

    updateGamePlatform: function (){
      axios.put('/libraries/videogames/' + this.gioco.videogame.id, {
        platform: document.getElementById('platform_id' + this.gioco.videogame.id).value
      }).then(()=>{
        this.$parent.updateVideogames();
        this.$parent.updateStats();
      })
    },
  
},


  // call gamestatus function

  mounted() {

    this.getRating();
    this.gameStatus();
    this.getBought();
    this.getRemake();
    this.getGamePlatforms();
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

.game_cover{
  width: auto;
}

.game_playtime{
  width: 100px;
}

</style>