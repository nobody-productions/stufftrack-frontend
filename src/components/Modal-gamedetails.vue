<template>
  <div class="modal" tabindex="-1" id="game_detail_modal" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ gioco.videogame.name }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                  <div class="text-secondary"> {{ gioco.videogame.year }}</div>
                </div>
                <div class="col">
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 1? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 2? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 3? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 4? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 5? 'gold':'gray'}"></i>
                </div>

                  <h4>Ore di gioco</h4>
                  <input type="number" v-bind:value="gioco.hours" class="form-control" style="width: 100px;">

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
                  <h4>Stato</h4>
                  <select id="game_status" class="form-select">
                    <option :id="'dagiocare' + gioco.videogame.id" value="1">Da giocare</option>
                    <option :id="'incorso' + gioco.videogame.id" value="2">In corso</option>
                    <option :id="'finito' + gioco.videogame.id" value="3">Finito</option>
                    <option :id="'completato' + gioco.videogame.id" value="4">Completato</option>
                    <option :id="'abbandonato' + gioco.videogame.id" value="5">Abbandonato</option>
                  </select>
                  </div>
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">

            <button type="button" class="btn btn-danger">Rimuovi</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Chiudi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Modal-component",


  props: {
    gioco_id: Object,
    gioco: Object
  },

  methods: {
    gamestatus: function() {
      let game_status = document.getElementById("game_status");
      console.log(this.gioco.status + " " + this.gioco.videogame.name);
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
    }
  },


  // call gamestatus function

  mounted() {
    this.gamestatus();
  }
}





</script>

<style scoped>

</style>