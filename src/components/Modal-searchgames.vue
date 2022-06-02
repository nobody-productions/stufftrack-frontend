<template>
  <div class="modal" tabindex="-1" id="search-modal" aria-labelledby="search-modal" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cerca</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div id="game-list">
            <input list="vg" id="vg-list"  @change="selectGame" style="width: 100%; margin-bottom: 10px;">
            <datalist id="vg">
              <option v-for="videogame in videogames" :value="videogame.name" :key="videogame.id">{{ videogame.name }}</option>
            </datalist>
          </div>
          <div id="game-details" v-if="isValid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row text-center d-block">
                  <img  v-bind:src="game.image" style="width: auto;" alt="">
                </div>
              </div>
              <div class="col-sm-8">
                <h3>{{ game.name }}</h3>
                <span class="text-secondary">{{ game.year }}</span>
                <p>{{ game.description }}</p>

              </div>
            </div>
          </div>

        </div>
        <div class="modal-footer" v-if="isValid">
          <button  type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#Modal-addgame" @click="selezionaAggiungi">Aggiungi gioco</button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {ref} from "vue";
export default {
  name: "search-modal",
  setup(){
    let videogames = ref([]);
    let selectedVideogame = ref("");
    let isValid = ref(false);
    let game = ref({});
    return {
      videogames,
      selectedVideogame,
      isValid,
      game
    }
  },
  methods: {
    getAllGames: function() {
      axios.get('videogames').then(response => {
        this.videogames = response.data.data;
        let current_page = response.data.meta.page;
        let last_page = response.data.meta.last_page;
        while (current_page < last_page) {
          current_page++;
          axios.get('/videogames/?page=' + current_page)
              .then(response => {
                this.videogames = this.videogames.concat(response.data.data);
              })
              .catch(error => {
                console.log(error);
              })
        }
      })
          .catch(error => {
            console.log(error);
          })
    },

    selectGame: function() {
      this.selectedVideogame = document.getElementById("vg-list").value;
      this.validGame();
    },

    validGame: function() {
      // check if selected game is in videogames
      this.isValid = false;
      for (let i = 0; i < this.videogames.length; i++) {
        if (this.videogames[i].name === this.selectedVideogame) {
          this.isValid = true;
          this.game = this.videogames[i];
          break;

        }
      }
    },

    selezionaAggiungi: function() {
      document.getElementById("game_select").value = this.game.id;
      document.querySelector('#game_select').dispatchEvent(new Event('change'))

    }
  },
  mounted() {
    this.getAllGames();
    document.getElementById("search-modal").addEventListener("shown.bs.modal", () => {
      document.getElementById("vg-list").focus();
    });
  }
}
</script>

<style scoped>

</style>