<template>
    <nav class="navbar navbar-light bg-light p-3">
        <div class=" col-md-4 col-lg-2 align-self-center align-items-center">
            <a class="navbar-brand align-self-center text-center" href="#">
                <i class="fa-solid fa-link"></i>
                StuffTrack

            </a>

        </div>

        <!-- Hide this element only on mobile -->
        <div class="dropdown align-items-center align-self-center text-center ps-2  d-md-flex">
            <a v-if="! isLoggedIn" href="/register" class="btn btn-outline-secondary btn-outline" style="margin-left: 10px"
                role="button">Registrati</a>
            <a v-if="! isLoggedIn" href="/login" class="btn-dark btn" style="margin-left: 10px" role="button">Accedi</a>
            <a v-if="isLoggedIn" href="/videogames" class="btn-outline-dark btn" style="margin-left: 10px" role="button">Vai alla dashboard</a>

          <div v-if="isLoggedIn" class="dropdown align-items-center align-self-center text-center ps-2  d-md-flex">
            <i class="fa-solid fa-circle-user fa-2x" id="dropdownMenuButton" data-bs-toggle="dropdown"
               aria-expanded="false"></i>

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile-modal">Il mio profilo</a></li>
              <li><button class="dropdown-item" @click="logout">Log out</button></li>
            </ul>

          </div>

        </div>


    </nav>

    <profileModal></profileModal>
</template>

<script>
import axios from 'axios';
import profileModal from "@/components/profile-modal";

    export default {
        name: "Nav-landing",
        components: {
            profileModal
        },
      data(){
          let isLoggedIn = false;
          return {
              isLoggedIn
          }
      },
      mounted() {
          axios.get("/profile").then(()=>{
              this.isLoggedIn = true;
          }).catch(()=>{
              this.isLoggedIn = false;
          })
      },
      methods: {
          logout: function () {
              axios.post('/logout/')
                  .then(() => {
                      // refresh the page
                      this.isLoggedIn = false;
                  })

          }
      }
    }
</script>

<style scoped>
    /* import boostrap css */
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');
    @import url('https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css');
</style>