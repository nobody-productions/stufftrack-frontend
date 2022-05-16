<template>
  <Nav-dashboard></Nav-dashboard>
  <div class="container-fluid">
    <div class="row">
      <!-- La barra laterale-->
      <sidebar-component></sidebar-component>
      <!-- Breadcrumb di navigazione-->
      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4 border-start border-top" style="background-color: #f8fcfe;">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
        <!-- Alert di prova-->
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Avviso di prova:</strong> prova a premere sul primo gioco in alto a sinistra
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">

          </button>
        </div>

        <h1 class="h2">Ciao, {{ username }}!</h1>

        <div class="text-secondary mt-3">Le mie statistiche:</div>

        <!-- Make this class collapsible -->
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
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 2.48%</span>
                  <span class="text-nowrap"> Dall'ultimo anno</span>
                </p>
              </div>
            </div>

          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Giochi completati</h5>
                    <span class="h2 font-weight-bold mb-0"> {{ giochi_completati }}/{{ giochi_totali }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-chess-knight"></i>

                  </div>
                </div>
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i>2</span>
                  <span class="text-wrap"> Completati nell'ultimo mese</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Obiettivi completati</h5>
                    <span class="h2 font-weight-bold mb-0">{{ obiettivi_completati }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-seedling"></i>

                  </div>
                </div>
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 35%</span>
                  <span class="text-nowrap"> In più nell'ultimo mese</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Statistica a caso2</h5>
                    <span class="h2 font-weight-bold mb-0">14/30</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-rocket"></i>

                  </div>
                </div>
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 35%</span>
                  <span class="text-nowrap"> In più nell'ultimo mese</span>
                </p>
              </div>
            </div>
          </div>
        </div>
          <div class="d-flex justify-content-between mt-3 mb-3">
            <h2 class="align-self-center">La mia libreria</h2>
            <button class="btn btn-secondary ml-auto justify-content-end align-self-center" data-bs-toggle="modal" data-bs-target="#exampleModal3" type="button">
              Aggiungi gioco
            </button>
          </div>

          <div class="justify-content-center">
            <div class="row d-flex text-center" style="gap: 20px">
                  <div class="col-sm flex-grow-0" data-bs-toggle="modal" v-for="gioco in giochi" v-bind:key="gioco.id" :data-bs-target="'#game_detail_modal' + gioco.id" v-bind:data-bs-whatever="gioco.id">
                    <img class="game" v-bind:src="gioco.image" alt="">
                    <br>
                    <div class="caption text-center">{{ gioco.title }}</div>
                  </div>

              <!--
              <div class="col-sm text-center" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>

              <div class="col-sm text-center">
                <img class="game" src="games/eldenring.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              <div class="col-sm text-center">
                <img class="game" src="games/Horizon.png" alt="">
                <br>
                <label class="caption">Titolo del gioco</label>
              </div>
              -->



            </div>
          </div>
      </main>
    </div>


  </div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Ogni gioco dovrebbe aprire una schermata modale come questa, appositamente formattata. Posso generarle tramite Vue.js
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  <ModalComponent v-for="gioco in giochi" v-bind:key="gioco.id" :titolo="giochi.title" :id="'game_detail_modal' + gioco.id" :gioco="gioco"></ModalComponent>
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


export default {
  name: "Dashboard-page",
  components: {ModalAddgame, ModalComponent, SidebarComponent, NavDashboard},
  data() {
    return {
      username: "Joe Panitzler",
      ore_gioco: "22:00",
      giochi_completati: "35",
      giochi_totali: "70",
      obiettivi_completati: "35",
      giochi: [
        {
          id: 1,
          title: "Horizon Zero Dawn",
          image: "games/Horizon.png",
          description: "Horizon Zero Dawn è un gioco di postapocalitànico di storia e azione di alta qualità che si basa sull'universo di Zero Dawn, una nuova generazione di gioco di postapocalitànico.",
          genre: "RPG",
          rank: "5",
          platform: "PC",
          release_date: "22/02/2019",
          publisher: "Sony Interactive Entertainment",
          developer: "Sony Interactive Entertainment",
          rating: "M18+",
          price: "€ 19,99"
        },
        {
          id: 2,
          title: "Elden Ring",
          image: "games/eldenring.png",
          description: "Elden Ring è un gioco di postapocalitànico di storia e azione di alta qualità che si basa sull'universo di Zero Dawn, una nuova generazione di gioco di postapocalitànico.",
          genre: "RPG",
          rank: "5",
          platform: "PC",
          release_date: "23/04/2020",
          publisher: "Sony Interactive Entertainment",
          developer: "Sony Interactive Entertainment",
          rating: "M18+",
          price: "€ 19,99"
        },
        {
          id: 3,
          title: "Kirby and the Forgotten Land",
          image: "games/kirby.png",
          description: "Kirby and the Forgotten Land è un gioco di postapocalitànico di storia e azione di alta qualità che si basa sull'universo di Zero Dawn, una nuova generazione di gioco di postapocalitànico.",
          genre: "RPG",
          rank: "2",
          platform: "PC",
          release_date: "24/04/2021",
          publisher: "Sony Interactive Entertainment",
          developer: "Sony Interactive Entertainment",
          rating: "M18+",
          price: "€ 19,99"
        },
        {
          id: 4,
          title: "The Last of Us",
          image: "games/last.png",
          description: "The Last of Us è un gioco di postapocalitànico di storia e azione di alta qualità che si basa sull'universo di Zero Dawn, una nuova generazione di gioco di postapocalitànico.",
          genre: "RPG",
          rank: "3",
          platform: "PC",
          release_date: "25/05/2022",
          publisher: "Sony Interactive Entertainment",
          developer: "Sony Interactive Entertainment",
          rating: "M18+",
          price: "€ 19,99"
        },
        {
          id: 5,
          title: "GhostWire: Tokyo",
          image: "games/ghostwire.png",
          description: "GhostWire: Tokyo è un gioco di postapocalitànico di storia e azione di alta qualità che si basa sull'universo di Zero Dawn, una nuova generazione di gioco di postapocalitànico.",
          genre: "RPG",
          rank: "4",
          platform: "PC",
          release_date: "26/05/2022",
          publisher: "Sony Interactive Entertainment",
          developer: "Sony Interactive Entertainment",
          rating: "M18+",
          price: "€ 19,99"
        },
        {
          id: 6,
          title: "Super Smash Bros. Brawl",
          image: "games/ssbb.png",
          description: "Super Smash Bros. Brawl è un gioco di postapocalitànico di storia e azione di alta qualità che si basa sull'universo di Zero Dawn, una nuova generazione di gioco di postapocalitànico.",
          genre: "RPG",
          rank: "5",
          platform: "PC",
          release_date: "27/05/2022",
          publisher: "Sony Interactive Entertainment",
          developer: "Sony Interactive Entertainment",
          rating: "M18+",
          price: "€ 19,99"
        }
        ]
    }
  },
  setup() {
    onMounted(async () => {
     const {data} = await axios.get('profile').catch(() => router.push('/login'))
     console.log(data);
    })
  },
  props: {
    titolo: Object,
    gioco: Object
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