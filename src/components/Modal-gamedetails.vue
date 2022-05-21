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
                  <img  v-bind:src="gioco.videogame.image" style="width: auto;" alt="">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <h1 class="mb-0">{{ gioco.videogame.name }}</h1>
                  <div class="text-secondary"> <b>Piattaforme: </b><span class="me-1" v-for="platform in this.gioco.videogame.platforms" :key="platform.id">{{ platform.name }} </span></div>
                  <div class="text-secondary"> <b>Anno: </b>{{ this.gioco.videogame.year }} </div>
                  <div class="text-secondary"> <b>Sviluppatori: </b><span class="me-1" v-for="developer in this.gioco.videogame.developers" :key="developer.id">{{ developer.name }} </span></div>
                  <div class="text-secondary"> <b>Genere: </b><span class="me-1" v-for="genre in this.gioco.videogame.genres" :key="genre.id">{{ genre.name }} </span></div>
                </div>

                <div class="col star_bar">
                  <i class="fa-solid fa-star star1" @click="updaterating(1)" v-bind:style="{color: rank >= 1? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star2" @click="updaterating(2)" v-bind:style="{color: rank >= 2? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star3" @click="updaterating(3)" v-bind:style="{color: rank >= 3? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star4" @click="updaterating(4)" v-bind:style="{color: rank >= 4? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star star5" @click="updaterating(5)" v-bind:style="{color: rank >= 5? 'gold':'gray'}"></i>
                </div>

                  <h4>Ore di gioco</h4>
                  <input type="number" v-bind:id="'playtime' + gioco.videogame.id" v-bind:value="gioco.hours" class="form-control" @change="updatetime" min="0" style="width: 100px;">

                <div class="row mt-3">
                  <h4>Descrizione</h4>
                  <p class="bg-light">
                    {{ gioco.videogame.description }}
                  </p>
                </div>
                <div class="row mt-3">
                  <h4>Piattaforme</h4>
                  <div class="col">
                    <!-- TODO piattaforme in text-secondary e quella su cui l'utente ha giocato in nero -->
                    <i class="fa-brands fa-xbox fa-2x ps-1"></i>
                    <i class="fa-brands fa-playstation fa-2x ps-1"></i>
                    <i class="fa-brands fa-steam fa-2x ps-1"></i>
                  </div>
                </div>
                <div class="row mt-3">
                  <!-- Stato del gioco -->
                  <hr>
                  <div class="col pb-2">
                    <input class="me-2" type="checkbox" v-bind:id="'bought' + gioco.videogame.id" @change="updatebought">
                    <label :for="'bought' + gioco.videogame.id">Gioco acquistato</label>
                  </div>
                  <h4>Stato</h4>
                  <select :id="'game_status' + gioco.videogame.id" class="form-select" @change="updatestatus">
                    <option :id="'dagiocare' + gioco.videogame.id" value="1">Da giocare</option>
                    <option :id="'incorso' + gioco.videogame.id" value="2">In corso</option>
                    <option :id="'finito' + gioco.videogame.id" value="3">Finito</option>
                    <option :id="'completato' + gioco.videogame.id" value="4">Completato</option>
                    <option :id="'abbandonato' + gioco.videogame.id" value="5">Abbandonato</option>
                  </select>
                  </div>
                <div class="row mt-3">
                  <h4>Data completamento</h4>
                  <input type="datetime-local" :disabled="date_time_disabled"  >
                </div>
                <div class="row mt-3">
                  <h4>Note</h4>
                  <textarea class="form-control" v-bind:id="'note' + gioco.videogame.id" v-model="this.comment" rows="3" @change="updatecomment"></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">

            <button type="button" class="btn btn-danger" @click="deleteGame">Rimuovi</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';



export default {

  name: "Modal-component",
  props: {
    gioco: Object,
  },

  data(){
    let date_time_disabled = true;

    let rank = 0;
    let comment = "";
    return{
      rank,
      comment,
      date_time_disabled,
    }
  },
  methods: {
    gamestatus: function() {

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

      this.date_time_disabled = !(this.gioco.status === "Completato");
    },

    updatetime: function () {
      // get time from
      let time = document.getElementById("playtime" + this.gioco.videogame.id);
      let time_value = time.value;
      axios.put("libraries/videogames/" + this.gioco.videogame.id, {
        hours: time_value,
        platform: this.gioco.platform
      }).then(() => {
        this.$parent.updatehours(this.gioco.videogame.id, parseInt(time_value));
          }
      )
    },

    updatestatus: function () {
      // get time from
      let status = document.getElementById("game_status" + this.gioco.videogame.id);
      let status_value_text = status.options[status.selectedIndex].text;
      axios.put("libraries/videogames/" + this.gioco.videogame.id, {
        status: status_value_text,
        platform: this.gioco.platform
      }).then(() => {

        this.date_time_disabled = !(status_value_text === "Completato");

        this.$parent.updatecompleted(this.gioco.videogame.id, status_value_text);
      })
    },

    getrating: function () {
        axios.get("libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
        let int_rating = response.data.ranking;
        let comment = response.data.comment;
        // check that int_rating is a number
        if (isNaN(int_rating)) {
          int_rating = 0;
        }

        // divide int_rating by 2 and round it
        // let rating_value = Math.round(int_rating / 2);
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

      /*
      let int_rating = data.data.ranking;
      // divide int_rating by 2 and round it
      let rating_value = Math.round(int_rating / 2);
      // set rating value
      document.getElementById("star" + rating_value + this.gioco.videogame.id).setAttribute('checked', 'checked');

       */
    },
    updaterating: function (value){
      if (value > 0){
        // check if rating is already set
        axios.get("libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
          axios.put("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
            ranking: value,
          }).then(response => {
            console.log(response.data);
            this.getrating();
          });
        }).catch(() => {
          axios.post("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
            ranking: value
          }).then(response => {
            this.getrating();
          });
        })


      }
    },
    updatecomment: function(){
      axios.get("libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
        axios.put("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
          comment: this.comment
        }).then(response => {
          console.log(response.data);
          this.getrating();
        });
      }).catch(() => {
        axios.post("libraries/videogames/" + this.gioco.videogame.id + "/rating", {
          comment: this.comment
        }).then(response => {
          this.getrating();
        });
      })
    },

    updatebought: function (){
      axios.put("/libraries/videogames/" + this.gioco.videogame.id, {
          bought: document.getElementById('bought' + this.gioco.videogame.id).checked,
          platform: this.gioco.platform
      }).then(()=>{
        this.$parent.updateboughtgames();
      })
    },

    getbought: function (){
      axios.get("/libraries/videogames/" + this.gioco.videogame.id).then(response => {
        let bought = response.data.bought;
        document.getElementById('bought' + this.gioco.videogame.id).checked = bought === true;
      });
    },


    deleteGame() {
      if (confirm('Sei sicuro di voler rimuovere il gioco ' + this.gioco.videogame.name + ' dalla tua libreria?')) {
        axios.delete("libraries/videogames/" + this.gioco.videogame.id).then(response => {
          // refresh home page
          //axios.delete("/libraries/videogames/" + this.gioco.videogame.id + "/rating").then(response => {
            //console.log(response.data);
            // window.location.href = "/";
            // close this modal

            document.getElementById('game_detail_modal' + this.gioco.videogame.id).hidden = true;
            document.getElementsByClassName('modal-backdrop')[0].remove()


            this.$parent.updatevideogames();
            this.$parent.updatestats();
          }).catch(error => {
            console.log(error);
        });
      }
    },
},


  // call gamestatus function

  mounted() {

    this.getrating();
    this.gamestatus();

    this.getbought();
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

</style>