<template>
  <section class="position-relative py-4 py-xl-5">
    <div class="container">
      <div class="row mb-5">
        <div id="liveAlertPlaceholder"></div>
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Accedi a StuffTrack</h2>
          <p class="w-lg-50">Il nuovo modo di tenere traccia dei tuoi interessi e di ciò che ti piace.</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card mb-5">
            <div class="card-body d-flex flex-column align-items-center">
              <div class="st-logo my-4">
              <i class="fa-solid fa-link"></i>
              </div>
              <form @submit.prevent="submit" class="text-center form-signin">
                <div class="mb-3"><input v-model="form.email" class="form-control" type="email" name="email" placeholder="Email" required></div>
                <div class="mb-3"><input v-model="form.password" class="form-control" type="password" name="password" placeholder="Password" required></div>
                <div class="mb-3"><button class="btn btn-dark d-block w-100" type="submit">Login</button></div>

                <div class="mb-3"></div><a href="/register" @click="register" >Non hai un account? Registrati</a>
              </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import {reactive} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

let register = () => {
  router.push("/register");
};

export default {
  name: "login-page",
  setup() {
    const form = reactive({
      email: '',
      password: ''
    });

    const router = useRouter();


    return {
      form
    };
  },
  methods: {
    showMessage: async function (message, type, time) {
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
      await new Promise(resolve => setTimeout(resolve, time))
      alertPlaceholder.innerHTML = ''
    },

     submit: async function() {
       await axios.post('login/', {
         email: this.form.email,
         password: this.form.password,
       }).then(async () => await router.push("/videogames")).catch(async error => {
         if (error.message === "Network Error") {
           await this.showMessage('Network Error', 'danger', 5000)
         }
         await this.showMessage(error.response.data.message, 'danger', 5000);
       });
      // dopo il login vai alla pagina principale
    }
  },
  mounted() {
    // check if the user is already logged in
    axios.get('/profile').then(()=>{
      router.push("/videogames");
    });
  }
}
</script>

<style scoped>
.st-logo {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  width: 5rem;
  height: 5rem;
  background: rgb(220, 53, 69);
  color: white;
  border-radius: 50%;
}
</style>