<template>
  <Nav-dashboard></Nav-dashboard>
  <div class="container-fluid">
    <div class="row">
      <!-- La barra laterale-->
      <sidebar-component></sidebar-component>
      <!-- Breadcrumb di navigazione-->
      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4 border-start border-top" style="background-color: #f8fcfe; min-height: 100vh;">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Videogiochi</li>
          </ol>
        </nav>

        <div id="liveAlertPlaceholder"></div>

        <h1 class="h2">Ciao, {{ username }}!</h1>

        <div class="text-secondary mt-3">Le mie statistiche:</div>

        <div class="row my-4">
          <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Ore di gioco totali</h5>
                    <span class="h2 font-weight-bold mb-0"> {{ ore_gioco }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-regular fa-clock"></i>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Giochi completati</h5>
                    <span class="h2 font-weight-bold mb-0" :key="giochi_completati"> {{ giochi_completati }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-chess-knight"></i>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Giochi totali</h5>
                    <span class="h2 font-weight-bold mb-0">{{ giochi_totali }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-seedling"></i>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Giochi acquistati</h5>
                    <span class="h2 font-weight-bold mb-0">{{ giochi_acquistati }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-rocket"></i>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="d-flex justify-content-between mt-3 mb-3">

            <!--
            Dropdown per la scelta dell'ordinamento
            -->
            <div class="dropdown">
              <h2 class="align-self-center">La mia libreria</h2>
              <span class=" dropdown-toggle text-secondary" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ordina per <b>{{ ordinamento }}</b>
              </span>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" @click="sortVideogames('name')">Nome</a>
                <a class="dropdown-item" @click="sortVideogames('created_at')">Data di aggiunta</a>
              </div>
            </div>

            <button class="btn btn-dark ml-auto justify-content-end align-self-center" data-bs-toggle="modal" data-bs-target="#Modal-addgame" type="button">
              Aggiungi gioco
            </button>
          </div>

          <div class="justify-content-center">
            <div class="row d-flex text-center" style="gap: 20px">
                  <div class="col-sm flex-grow-0" data-bs-toggle="modal" v-for="gioco in videogames" v-bind:key="gioco" :data-bs-target="'#game_detail_modal' + gioco.videogame.id" v-bind:data-bs-whatever="gioco.videogame.id">
                    <img class="game" v-bind:src="gioco.videogame.image" alt="">
                    <br>
                    <div class="caption text-center">{{ gioco.videogame.name }}</div>
                  </div>
            </div>
          </div>
        <div v-if="last_page > 1" class="text-end">
          <i v-if="!isFirstPage" @click="loadPreviousPage" class="fa-solid fa-arrow-left" style="cursor: pointer;"></i>
          Pagina {{ current_page }} di {{ last_page }}
          <i v-if="!isLastPage" @click="loadNextPage" class="fa-solid fa-arrow-right" style="cursor: pointer;"></i>

        </div>
      </main>
    </div>


  </div>


  <ModalComponent v-for="gioco in videogames" v-bind:key="gioco.videogame.id" :titolo="gioco.name" :id="'game_detail_modal' + gioco.videogame.id" :gioco="gioco"></ModalComponent>
  <ModalAddgame></ModalAddgame>

</template>

<script>
import NavDashboard from "@/components/Nav-dashboard";
import SidebarComponent from "@/components/Sidebar-component";
import ModalComponent from "@/components/Modal-gamedetails";
import ModalAddgame from "@/components/Modal-addgame";
import axios from "axios";
import {onMounted} from "vue";
import router from "@/router";
import {ref} from "vue";


export default {
  name: "Dashboard-page",
  components: {ModalAddgame, ModalComponent, SidebarComponent, NavDashboard},

  /*
  data() {
    return {
      ore_gioco: "22:00",
      giochi_completati: "35",
      giochi_totali: "70",
      obiettivi_completati: "35",
    }
  },

   */

  setup() {
    const username = ref("");
    let videogames = ref([]);
    let giochi_totali = ref("");
    let giochi_completati = ref("");
    let giochi_acquistati = ref("");
    let ore_gioco = ref("");
    let ordinamento = ref("");
    let current_page = ref(1);
    let last_page = ref(1);
    let isFirstPage = ref(true);
    let isLastPage = ref(true);

    onMounted(async () => {
     const {data} = await axios.get('profile').catch(() => router.push('/login'))

     // Da qui in poi eseguo il parsing dei dati ottenuti dal backend
      //
      //
      username.value = data.nickname;

     giochi_completati.value = 0;
     giochi_acquistati.value = 0;
     ore_gioco.value = 0;


    })
    return {
      username,
      videogames,
      ore_gioco,
      giochi_completati,
      giochi_totali,
      giochi_acquistati,
      ordinamento,
      current_page,
      last_page,
      isFirstPage,
      isLastPage
    }
  },
  methods:{
    updateStats: function () {
      this.updateTotalHours()
      this.updateCompletedgames()
      this.updateBoughtGames()
    },
    updateTotalHours: function () {
      axios.get('libraries/videogames/charts/total-hours').then(response=>{
        let total = response.data.total;
        this.ore_gioco = (response.data.total === null? 0 : total);
      })
    },
    updateCompletedgames: function () {
      axios.get('/libraries/videogames/charts/completed').then(response=>{
        this.giochi_completati = response.data[0].count;

      })
    },
    updateBoughtGames: function () {
      axios.get('/libraries/videogames/charts/total-bought').then(response=>{
        this.giochi_acquistati = response.data[0].count;
      })
    },
    updateCompleted: function (game_id, status){
      for (let game of this.videogames) {
        if (game.videogame.id === game_id) {
          game.status = status;
          break;
        }
      }
      // this.updateStats();
      this.updateStats();
    },

    updateHours: function (game_id, hours){
      for (let game of this.videogames) {
        if (game.videogame.id === game_id) {
          game.hours = hours;
          break;
        }
      }
      // this.updateStats();
      this.updateStats();
    },

    updateVideogames: function (){
      axios.get('libraries/videogames').then(response=>{
        this.videogames = response.data.data;
        // sort this.videogames by name
        this.sortVideogames("name")
        // sort by created_at
        // this.videogames.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
        this.giochi_totali = response.data.meta.total;
        this.current_page = response.data.meta.page;
        this.last_page = response.data.meta.last_page;
        this.isFirstPage = this.current_page === 1;
        this.isLastPage = this.current_page === this.last_page;
        this.updateStats();
      })
    },

    showMessage: async function (message, type) {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

      const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
      }

      alert(message, type)
      await new Promise(resolve => setTimeout(resolve, 2000))
      alertPlaceholder.innerHTML = ''
    },

    sortVideogames: function (sort) {
      if (sort === 'name') {
        this.videogames.sort((a, b) => (a.videogame.name > b.videogame.name) ? 1 : -1);
        this.ordinamento = "nome";
      } else if (sort === 'created_at') {
        this.videogames.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
        this.ordinamento = "data";
      }
    },

    loadNextPage: function () {
      this.current_page++;
      axios.get('libraries/videogames/?page=' + this.current_page).then(response=>{
        this.videogames = response.data.data;
        this.isFirstPage = this.current_page === 1;
        this.isLastPage = this.current_page === this.last_page;
      })
    },

    loadPreviousPage: function () {
      this.current_page--;
      axios.get('libraries/videogames/?page=' + this.current_page).then(response=>{
        this.videogames = response.data.data;
        this.isFirstPage = this.current_page === 1;
        this.isLastPage = this.current_page === this.last_page;
      })
    },

  },
  mounted() {
    this.updateVideogames();
  },

};


document.onkeyup = function(e) {

  if (e.ctrlKey  && e.which === 75) {
    document.getElementById("search-bar").click();
  }
};

</script>

<style scoped>
. {
  background-color: #f8fcfe;
}
.game{
  width: 174px;
  height: 262px;
  min-width: 190px;
  min-height: 240px;
  border-radius: 6px;
  aspect-ratio: inherit;
}


.game:hover{
  transition: transform .3s;
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  /*
  add shadow
   */
  box-shadow: 0px 0px 20px rgba(0,0,0,0.6);

}


.card-statistics{
  height: 100%;
  border-radius: 15px;
}
</style>