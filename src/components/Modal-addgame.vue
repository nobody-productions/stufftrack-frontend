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
              <select class="form-control" name="game_id">
                <option v-for="game in games" :value="game.id" :key="game.id">{{ game.name }}</option>
              </select>

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

export default {
  name: "Modal-addgame",

  data() {
    let games = [];
    return {
      games: games
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

      axios.post("/libraries/videogames/",{
        videogame: document.getElementsByName('game_id')[0].value,
        rating: document.getElementsByName('rating')[0].value * 2,
        comment: document.getElementsByName('comment')[0].value,
        platform: 4

      }).then(response => {
        // reload "/"
        window.location.reload();
      }).catch(error => {
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