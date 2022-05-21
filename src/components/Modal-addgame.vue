<template>
  <div class="modal" tabindex="-1" id="exampleModal3" aria-labelledby="exampleModalLabel3" aria-hidden="true">
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
              <label for="exampleInputEmail1">Game</label>
              <select class="form-control" name="game_id" @change="getgameplatforms">
                <!-- empty default option -->
                <option value="">Seleziona un gioco:</option>
                <option v-for="game in games" :value="game.id" :key="game.id">{{ game.name }}</option>
              </select>

              <label for="exampleInputEmail1">Piattaforma</label>
              <select class="form-control" name="platform_id">
                <!-- empty default option -->
                <option v-for="platform in platforms" :value="platform.id" :key="platform.id">{{ platform.name }}</option>
              </select>

              <input type="checkbox" id="gb" >
              <label for="gb">Già acquistato</label>
              <br>
              <label for="exampleInputEmail1">Valutazione</label>
              <select class="form-control" name="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <label for="exampleInputEmail1">Commento</label>
              <textarea class="form-control" name="comment" rows="3"></textarea>
            </form>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addGame">Aggiungi</button>
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
    getgameslist() {
      axios.get('/videogames')
          .then(response => {
            this.games = response.data.data;
          })
          .catch(error => {
            console.log(error);
          })
    },

    addGame() {

      let game_id = document.getElementsByName('game_id')[0].value;

      axios.post("/libraries/videogames/" + game_id,{
        bought: document.getElementById('gb').checked,
        platform: parseInt(document.getElementsByName('platform_id')[0].value),
      }).then(() => {

        let comment = document.getElementsByName('comment')[0].value;

        if (comment !== ""){
          axios.post("/libraries/videogames/" + game_id + "/rating", {
            ranking: document.getElementsByName('rating')[0].value,
            comment: document.getElementsByName('comment')[0].value
          }).then(response => {
            // window.location.href = "/";
            this.$parent.updatevideogames();
          }).catch(error => {
            console.log(error);
          });
        }
        else {
          axios.post("/libraries/videogames/" + game_id + "/rating", {
            ranking: document.getElementsByName('rating')[0].value
          }).then(response => {
            // window.location.href = "/";
            this.$parent.updatevideogames();
          }).catch(error => {
            console.log(error);
          });
        }




      }).catch(error => {
        console.log(error);
      });


    },
    getgameplatforms: function (){

      let game_id = document.getElementsByName('game_id')[0].value;
      axios.get('/videogames/' + game_id)
          .then(response => {
            console.log(response.data[0].platforms);
            this.platforms = response.data[0].platforms;
          })
          .catch(error => {
            console.log(error);
          })

    }
  },
  mounted() {
    this.getgameslist();
  }
}
</script>

<style scoped>

</style>