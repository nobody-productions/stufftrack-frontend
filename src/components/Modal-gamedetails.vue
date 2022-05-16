<template>
  <div class="modal" tabindex="-1" id="game_detail_modal" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ gioco.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row">
                  <img v-bind:src="gioco.image" style="width: auto;" alt="">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <h1 class="mb-0">{{ gioco.title }}</h1>
                  <div class="text-secondary"> {{ gioco.release_date }}</div>
                </div>
                <div class="col">
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 1? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 2? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 3? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 4? 'gold':'gray'}"></i>
                  <i class="fa-solid fa-star" v-bind:style="{color: gioco.rank >= 5? 'gold':'gray'}"></i>
                </div>

                  <h4>Ore di gioco</h4>
                  <input type="number" class="form-control" style="width: 100px;">

                <div class="row mt-3">
                  <h4>Descrizione</h4>
                  <p class="bg-light">
                    {{ gioco.description }}
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
                  <select class="form-select">
                    <option value="1">Da giocare</option>
                    <option value="2">In corso</option>
                    <option value="3">Finito</option>
                    <option value="4">Completato</option>
                    <option value="5">Abbandonato</option>
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

  data() {
    return {
      game: {
        title: this.gioco.title,
        release_date: this.gioco.release_date,
        rank: this.gioco.rank,
        image: this.gioco.image,
      }
    };
  },

  props: {
    gioco_id: Object,
    gioco: Object
  }


}


</script>

<style scoped>

</style>