<template>
  <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse text-start">
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active invert" aria-current="page" href="#" style="color: black;">
            <i class="fa-solid fa-gamepad" style="height: 20px; width: 20px;"></i>
            <span class="mx-2">Videogiochi</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style="color: black;">
            <i class="fa-solid fa-book" style="height: 20px; width: 20px;"></i>
            <span class="mx-2">Libri</span>
          </a>
        </li>

        <!--
        <li class="nav-item">
          <a class="nav-link" href="#" style="color: black;">
            <i class="fa-solid fa-gear" style="height: 20px; width: 20px;"></i>
            <span class="mx-2">Impostazioni</span>
          </a>
        </li>
        -->


        <li class="nav-item">
          <a class="nav-link" href="#" style="color: black;">
            <i class="fa-solid fa-circle-user" style="height: 20px; width: 20px;"></i>
            <span class="mx-2" data-bs-toggle="modal" data-bs-target="#profile-modal">Profilo</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <profileModal></profileModal>
</template>

<script>
import profileModal from '@/components/profile-modal'

export default {
  name: "Sidebar-component",
  components: { profileModal }
}

</script>

<style scoped>
.invert {
  border-radius: 10px;
  display: inline-block;
  flex-wrap: wrap;
  background-color: white;
  filter: invert(90%);
}
</style>