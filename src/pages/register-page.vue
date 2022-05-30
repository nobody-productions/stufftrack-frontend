<template>
  <section class="position-relative py-4 py-xl-5">
    <div class="container">
      <div class="row mb-5">
        <div id="liveAlertPlaceholder"></div>
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Registrati a StuffTrack</h2>
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
              <form @submit.prevent="submit" class="text-center" method="post">
                <div class="mb-3"><input v-model="form.username" class="form-control" type="text" name="username" placeholder="Nome utente" required></div>
                <div class="mb-3"></div><input v-model="form.email" class="form-control" type="email" name="email" placeholder="Email" required>
                <div class="mb-3"></div><input v-model="form.password" class="form-control" type="password" name="password" placeholder="Password" required>
                <div class="mb-3"></div><input v-model="form.passwordConfirm" class="form-control" type="password" name="password" placeholder="Conferma password" required style="margin-bottom: 6px;">
                <div class="mb-3"></div><button class="btn btn-dark d-block w-100" type="submit">Registrati</button>
                <div class="mb-3 mt-3"></div><a class="text-center" href="/login">Hai già un account? Accedi</a>
              </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import router from "@/router";
import {reactive} from 'vue';

export default {
  name: "register-page",
  setup() {

    const form = reactive({
      username: '',
      email: '',
      password: '',
      passwordConfirm: ''
    });

    return {
      form
    }
  },
  methods: {
    showmessage: async function (message, type, time) {
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
    submit: function () {

      console.log(this.form.username);
      console.log(this.form.email);
      console.log(this.form.password);
      console.log(this.form.passwordConfirm);

      if (this.form.username.length < 3) {
        this.showmessage('Il nome utente deve essere di almeno 3 caratteri', 'danger', 3000)
        return
      }

      if (this.form.password !== this.form.passwordConfirm) {
        this.showmessage('Le password non corrispondono', 'danger', 3000);
        return
      }
      axios.post("/register", {
        nickname: this.form.username,
        email: this.form.email,
        password: this.form.password,
        password_confirm: this.form.passwordConfirm,
        id: 2
      }).then(function (response) {
        console.log(response);
        router.push("/login");
      }).catch(async function (error) {
        if (error.message === "Network Error") {
          await this.showmessage('Network Error', 'danger', 5000)
        }
        await this.showmessage(error.response.data.message, 'danger', 5000);
      });
    }

  },
  mounted() {
    // check if the user is already logged in
    axios.get('/profile').then(()=>{
      router.push("/videogames")
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