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
            <form action="{{ route('games.store') }}" method="POST" enctype="multipart/form-data">
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="name">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Description</label>
                <textarea class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter description" name="description"></textarea>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Image</label>
                <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image" name="image">
              </div>


              <div class="form-group">
                <label for="exampleInputEmail1">Release date</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter release date" name="release_date">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" name="price">
              </div>
              <!-- Button -->
              <br>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal-addgame"
}
</script>

<style scoped>

</style>