<template>
  <nav class="navbar navbar-light bg-light p-3">
    <div class="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between align-self-center align-items-center">
      <a class="navbar-brand" href="#">
        <i class="fa-solid fa-book"></i>
        StuffTrack

      </a>
      <button class="navbar-toggler d-md-none collapsed mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="col-12 col-md-4 col-lg-2 align-self-center align-items-center">
      <div class="input-group">
        <div class="input-group-append"><button class="btn rounded-pill" type="button" style="padding-left: 0;"><i class="fa fa-search text-secondary"></i></button></div>
        <input class="form-control form-control-dark rounded-pill" type="text" placeholder="Search" aria-label="Search">

        <!-- Hide this element only on mobile -->
        <div class="dropdown align-items-center align-self-center text-center ps-2 d-none d-md-flex">
         <i class="fa-solid fa-circle-user fa-2x" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"></i>

         <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
           <li><a class="dropdown-item" href="#">Impostazioni account</a></li>
           <li><a class="dropdown-item" href="#">Log out</a></li>
         </ul>

       </div>
      </div>
    </div>
    <!--
    <div class="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Carlo Cracco
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Impostazioni account</a></li>
              <li><a class="dropdown-item" href="#">Log out</a></li>
            </ul>
          </div>
    </div>
    -->
  </nav>


</template>

<script>

export default {
  name: "Nav-dashboard"
}

</script>

<style scoped>
 /* import boostrap css */
 @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
 @import url('https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css');
</style>