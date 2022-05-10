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
                  <!-- Bottone aggiungi -->
                <div class="text-center my-2">
                  <button type="button" class="btn btn-primary">Rimuovi</button>
                </div>

              </div>
              <div class="col-sm-8">
                <div class="row">
                  Nome: Elden Ring
                </div>
                <div class="row">
                  Genere: RPG
                </div>
                <div class="row">
                  Descrizione:
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris euismod, nunc eget consectetur vehicula, nisi nunc
                  interdum nisl, euismod euismod nunc nisl euismod nunc.
                  </p>
                </div>

              </div>
            </div>

          </div>
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