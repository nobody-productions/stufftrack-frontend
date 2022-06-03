<template>
  <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse text-start">
    <div class="position-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a id="side-videogiochi" class="nav-link active" aria-current="page" href="/videogames" style="color: black;">
            <i class="fa-solid fa-gamepad" style="height: 20px; width: 20px;"></i>
            <span class="mx-2">Videogiochi</span>
          </a>
        </li>

        <li class="nav-item">
          <a id="side-libri" class="nav-link active" aria-current="page" href="/books" style="color: black;">
            <i class="fa-solid fa-book" style="height: 20px; width: 20px;"></i>
            <span class="mx-2">Libri</span>
          </a>
        </li>


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
  components: { profileModal },
  props: {
    selected: {
      type: String,
      default: "Videogiochi"
    }
  },

  mounted() {
    if (this.selected === "Videogiochi") {
      document.getElementById("side-videogiochi").classList.add("invert");
    } else if (this.selected === "Libri") {
      document.getElementById("side-libri").classList.add("invert");
    }
  }
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