<template>
  <div class="modal" tabindex="-1" id="exampleModal2" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Elden Ring</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" >
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4">
                <div class="row">
                  <img src="games/eldenring.png" style="width: 100%;">
                </div>
              </div>
              <div class="col-sm-8">
                <div class="row">
                  <h1 class="mb-0">Elden Ring</h1>
                  <div class="text-secondary">25 Febbraio 2022</div>
                </div>
                <div class="col">
                  <i class="fa-solid fa-star" style="color: gold"></i>
                  <i class="fa-solid fa-star" style="color: gold"></i>
                  <i class="fa-solid fa-star" style="color: gold"></i>
                  <i class="fa-solid fa-star" style="color: gray"></i>
                  <i class="fa-solid fa-star" style="color: gray"></i>
                </div>
                <div class="row">
                  <h3>Descrizione</h3>
                  <p class="bg-light">
                    Elden Ring is a fantasy, action and open world game with RPG elements such as stats, weapons and spells. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.
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
  name: "Modal-component"
}

</script>

<style scoped>

</style>