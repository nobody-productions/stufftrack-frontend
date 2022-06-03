<template>
  <div class="modal" tabindex="-1" id="Modal-addgame" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Aggiungi un gioco</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
          <div class="container-fluid">
          <!-- Form -->
            <form class="pb-2">
              <label for="game_select">Gioco</label>
              <select class="form-control" id="game_select" name="game_id" @change="getGamePlatforms">
                <option value="">Seleziona un gioco:</option>
                <option v-for="game in games" :value="game.id" :key="game.id">{{ game.name }}</option>
              </select>

              <label for="platform_id">Piattaforma</label>
              <select class="form-control" name="platform_id" id="platform_id">
                <!-- empty default option -->
                <option v-for="platform in platforms" :value="platform.id" :key="platform.id">{{ platform.name }}</option>
              </select>

              <input type="checkbox" id="gb" >
              <label for="gb">Già acquistato</label>
              <br>
              <label for="rating">Valutazione</label>
              <select class="form-control" name="rating" id="rating">
                <option value="0">-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <label for="comment">Commento</label>
              <textarea class="form-control" name="comment" rows="3" id="comment"></textarea>
            </form>

          </div>
          <div class="modal-footer">
            <button id="dismiss-modal-addgame" type="button" class="btn btn-secondary-outline" data-bs-dismiss="modal">Annulla</button>
            <button id="add-game-button" type="button" class="btn btn-dark" data-bs-dismiss="modal" @click="addGame">Aggiungi</button>
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
  name: "Modal-addgame",

  data() {
    let games = [];
    let platforms = ref([]);
    return {
      games: games,
      platforms
    }
  },

  methods: {
    getGamesList: function() {
      // Ottiene la lista dei giochi e aggiorna games
      axios.get('/videogames')
          .then(response => {
            this.games = response.data.data;
            let current_page = response.data.meta.page;
            let last_page = response.data.meta.last_page;
            while (current_page < last_page) {
              current_page++;
              axios.get('/videogames/?page=' + current_page)
                  .then(response => {
                    this.games = this.games.concat(response.data.data);
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

    addGame() {
      // Aggiunge un gioco alla libreria dell'utente
      let game_id = document.getElementsByName('game_id')[0].value;

      axios.post("/libraries/videogames/" + game_id,{
        bought: document.getElementById('gb').checked,
        platform: parseInt(document.getElementById('platform_id').value),
      }).then(() => {

        let comment = document.getElementsByName('comment')[0].value;

        if (comment !== ""){
          axios.post("/libraries/videogames/" + game_id + "/rating", {
            ranking: document.getElementsByName('rating')[0].value,
            comment: document.getElementsByName('comment')[0].value
          }).then(() => {
            // window.location.href = "/";
            this.$parent.showMessage("Gioco aggiunto con successo!", "success");
            this.$parent.updateVideogames();
          }).catch(error => {
            //
          });
        }
        else {
          axios.post("/libraries/videogames/" + game_id + "/rating", {
            ranking: document.getElementsByName('rating')[0].value
          }).then(() => {
            // window.location.href = "/";
            this.$parent.showMessage("Gioco aggiunto con successo!", "success");
            this.$parent.updateVideogames();
          }).catch(error => {
            //
          });
        }
      }).catch(error => {
        if (error.response.status === 400) {
          this.$parent.showMessage("Errore: gioco già presente nella libreria", "warning");
        }
        else {
          this.$parent.showMessage("Errore: gioco non aggiunto, codice errore: " + error.response.status, "danger");
        }
      });


    },
    getGamePlatforms: function (){
      // Dato un gioco, ottiene le piattaforme su cui è disponibile
      let game_id = document.getElementsByName('game_id')[0].value;
      if (game_id === ""){
        document.getElementById("add-game-button").disabled = true;
        this.platforms = [];
        return
      }
      axios.get('/videogames/' + game_id)
          .then(response => {
            this.platforms = response.data[0].platforms;
            document.getElementById("add-game-button").disabled = false;
          })
          .catch(error => {
            //
          })

    }
  },
  mounted() {
    this.getGamesList();
    document.getElementById("add-game-button").disabled = true;
  }
}


</script>

<style scoped>

</style>