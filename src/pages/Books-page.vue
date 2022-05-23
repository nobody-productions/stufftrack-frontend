<template>
  <Nav-dashboard></Nav-dashboard>
  <div class="container-fluid">
    <div class="row">
      <!-- La barra laterale-->
      <sidebar-component :selected="'Libri'" ></sidebar-component>
      <!-- Breadcrumb di navigazione-->
      <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4 border-start border-top" style="background-color: #f8fcfe; min-height: 100vh;">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Libri</li>
          </ol>
        </nav>

        <div id="liveAlertPlaceholder"></div>

        <h1 class="h2">Ciao, {{ username }}!</h1>

        <div class="text-secondary mt-3">Le mie statistiche:</div>

        <!-- Make this class collapsible -->
        <div class="row my-4">
          <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Ore di lettura totali</h5>
                    <span class="h2 font-weight-bold mb-0"> {{ ore_libro }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-regular fa-clock"></i>

                  </div>
                </div>
                <!--
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 2.48%</span>
                  <span class="text-nowrap"> Dall'ultimo anno</span>
                </p>
                -->
              </div>
            </div>

          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Libri completati</h5>
                    <span class="h2 font-weight-bold mb-0" :key="libri_completati"> {{ libri_completati }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-chess-knight"></i>

                  </div>
                </div>
                <!--
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i>2</span>
                  <span class="text-wrap"> Completati nell'ultimo mese</span>
                </p>se
                -->
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Libri totali</h5>
                    <span class="h2 font-weight-bold mb-0">{{ libri_totali }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-seedling"></i>

                  </div>
                </div>
                <!--
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 35%</span>
                  <span class="text-nowrap"> In più nell'ultimo mese</span>
                </p>
                -->
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="d-flex card card-stats mb-4 mb-xl-0 card-statistics">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <h5 class="card-title text-muted mb-0">Libri acquistati</h5>
                    <span class="h2 font-weight-bold mb-0">{{ libri_acquistati }}</span>
                  </div>
                  <div class="col-auto">

                    <i class="fa-solid fa-rocket"></i>

                  </div>
                </div>
                <!--
                <p class="mt-3 mb-0 text-muted text-sm">
                  <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 35%</span>
                  <span class="text-nowrap"> In più nell'ultimo mese</span>
                </p>
                -->
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
              <a class="dropdown-item" @click="sortbooks('name')">Nome</a>
              <a class="dropdown-item" @click="sortbooks('created_at')">Data di aggiunta</a>
            </div>
          </div>

          <button class="btn btn-dark ml-auto justify-content-end align-self-center" data-bs-toggle="modal" data-bs-target="#Modal-addbook" type="button">
            Aggiungi libro
          </button>
        </div>

        <div class="justify-content-center">
          <div class="row d-flex text-center" style="gap: 20px">
            <div class="col-sm flex-grow-0" data-bs-toggle="modal" v-for="libro in books" v-bind:key="libro" :data-bs-target="'#book_detail_modal' + libro.book.id" v-bind:data-bs-whatever="libro.book.id">
              <img class="book" v-bind:src="libro.book.image" alt="">
              <br>
              <div class="caption text-center">{{ libro.book.name }}</div>
            </div>
          </div>
        </div>
      </main>
    </div>


  </div>


  <ModalComponent v-for="libro in books" v-bind:key="libro.book.id" :titolo="libro.name" :id="'book_detail_modal' + libro.book.id" :libro="libro"></ModalComponent>
  <ModalAddbook></ModalAddbook>

</template>

<script>
import NavDashboard from "@/components/Nav-dashboard";
import SidebarComponent from "@/components/Sidebar-component";
import ModalComponent from "@/components/Modal-bookdetails";
import ModalAddbook from "@/components/Modal-addbook";
import axios from "axios";
import {onMounted} from "vue";
import router from "@/router";
import {ref} from "vue";


export default {
  name: "Books-page",
  components: {ModalAddbook, ModalComponent, SidebarComponent, NavDashboard},

  /*
  data() {
    return {
      ore_libro: "22:00",
      libri_completati: "35",
      libri_totali: "70",
      obiettivi_completati: "35",
    }
  },

   */

  data() {
    const username = ref("");
    let books = ref([]);
    let libri_totali = ref("");
    let libri_completati = ref("");
    let libri_acquistati = ref("");
    let ore_libro = ref("");
    let ordinamento = ref("");

    onMounted(async () => {
      const {data} = await axios.get('profile').catch(() => router.push('/login'))

      // Da qui in poi eseguo il parsing dei dati ottenuti dal backend
      //
      //
      username.value = data.nickname;

      libri_completati.value = 0;
      libri_acquistati.value = 0;
      ore_libro.value = 0;


    })
    return {
      username,
      books,
      ore_libro,
      libri_completati,
      libri_totali,
      libri_acquistati,
      ordinamento
    }
  },
  props: {
    titolo: Object,
    libro: Object
  },

  methods:{
    updatestats: function () {
      this.updatetotalhours()
      this.updatecompletedbooks()
      this.updateboughtbooks()
    },
    updatetotalhours: function () {
      axios.get('libraries/books/charts/total-hours').then(response=>{
        let total = response.data.total;
        this.ore_libro = (response.data.total === null? 0 : total);
      })
    },
    updatecompletedbooks: function () {
      axios.get('/libraries/books/charts/completed').then(response=>{
        this.libri_completati = response.data[0].count;

      })
    },
    updateboughtbooks: function () {
      axios.get('/libraries/books/charts/total-bought').then(response=>{
        this.libri_acquistati = response.data[0].count;
      })
    },
    updatecompleted: function (book_id, status){
      for (let book of this.books) {
        if (book.book.id === book_id) {
          book.status = status;
          break;
        }
      }
      // this.updatestats();
      this.updatestats();
    },

    updatehours: function (book_id, hours){
      for (let book of this.books) {
        if (book.book.id === book_id) {
          book.hours = hours;
          break;
        }
      }
      // this.updatestats();
      this.updatestats();
    },

    updatebooks: function (){
      axios.get('libraries/books').then(response=>{
        
        this.books = response.data.data;
        console.log(this.books)
        // sort this.books by name
        this.sortbooks("name")
        // sort by created_at
        // this.books.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1);
        this.libri_totali = response.data.meta.total;
        this.updatestats();
      })
    },

    showmessage: async function (message, type) {
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

    sortbooks: function (sort) {
      if (sort === 'name') {
        this.books.sort((a, b) => (a.book.name > b.book.name) ? 1 : -1);
        this.ordinamento = "nome";
      } else if (sort === 'created_at') {
        this.books.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1);
        this.ordinamento = "data";
      }
    },

  },
  mounted() {
    this.updatebooks();
  },

};


document.onkeyup = function(e) {

  if (e.ctrlKey  && e.which === 75) {
    if(document.getElementById("Modal-searchbooks") !== null) {
      document.getElementById("Modal-searchbooks").click();
    }
    else {
      document.getElementById("search-bar").click();
    }
  }
};

</script>

<style scoped>
. {
  background-color: #f8fcfe;
}
.book{
  width: 174px;
  height: 262px;
  min-width: 190px;
  min-height: 240px;
  border-radius: 6px;
  aspect-ratio: inherit;
}


.book:hover{
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