<template>
  <div class="modal" tabindex="-1" id="game_detail_modal" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ gioco.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row">
                  <img v-bind:src="gioco.image" style="width: auto;">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <h1 class="mb-0">{{ gioco.title }}</h1>
                  <div class="text-secondary"> {{ gioco.release_date }}</div>
                </div>
                <div class="col">
                  <i class="fa-solid fa-star" v-bind:style="game.stars[0]"></i>
                  <i class="fa-solid fa-star" v-bind:style="game.stars[1]"></i>
                  <i class="fa-solid fa-star" v-bind:style="game.stars[2]"></i>
                  <i class="fa-solid fa-star" v-bind:style="game.stars[3]"></i>
                  <i class="fa-solid fa-star" v-bind:style="game.stars[4]"></i>
                </div>
                <div class="row">
                  <h3>Descrizione</h3>
                  <p class="bg-light">
                    {{ gioco.description }}
                  </p>
                </div>
                <div class="row">
                  <h3>Piattaforme</h3>
                  <div class="col">
                    <i class="fa-brands fa-xbox fa-2x ps-1"></i>
                    <i class="fa-brands fa-playstation fa-2x ps-1"></i>
                    <i class="fa-brands fa-steam fa-2x ps-1"></i>
                  </div>
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
    let res  = {
      game: {
        title: this.gioco.title,
        release_date: this.gioco.release_date,
        rank: this.gioco.rank,
        image: this.gioco.image,
      }
    }

    res.game.stars = ["color: gray", "color: gray", "color: gray", "color: gray", "color: gray"]
    for (let i = 0; i < res.game.rank; i++) {
      res.game.stars[i] = "color: gold"
    }

    return res;
  },

  props: {
    gioco_id: Object,
    gioco: Object
  }


}


</script>

<style scoped>

</style>