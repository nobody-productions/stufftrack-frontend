<template>
  <section class="position-relative py-4 py-xl-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Registrati a StuffTrack</h2>
          <p class="w-lg-50">Il nuovo modo di tenere traccia dei tuoi interessi e di ciò che ti piace.</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card mb-5">
            <div class="card-body d-flex flex-column align-items-center" style="height: 484px;">
              <div class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4" style="background: var(--bs-red);">
                <i class="fa-solid fa-link"></i>
              </div>
              <form @submit.prevent="submit" class="text-center" method="post">
                <div class="mb-3"><input v-model="username" class="form-control" type="text" name="username" placeholder="Nome utente"></div>
                <div class="mb-3"></div><input v-model="email" class="form-control" type="email" name="email" placeholder="Email">
                <div class="mb-3"></div><input v-model="password" class="form-control" type="password" name="password" placeholder="Password">
                <div class="mb-3"></div><input v-model="passwordConfirm" class="form-control" type="password" name="password" placeholder="Conferma password" style="margin-bottom: 6px;">
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

export default {
  name: "register-page",
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');

    const submit = () => {
      console.log(username.value, email.value, password.value, passwordConfirm.value);
      axios.post("/register", {
        nickname: username.value,
        email: email.value,
        password: password.value,
        password_confirm: passwordConfirm.value
      }).then(function (response) {
        console.log(response);
        router.push("/login");
      }).catch(function (error) {
        console.log(error);
      });
    }

    return {
      username,
      email,
      password,
      passwordConfirm,
      submit
    }
  },
  mounted() {
    // check if the user is already logged in
    axios.get('/profile').then(()=>{
      router.push("/dashboard")
    });
  }
}
</script>

<style scoped>
.bs-icon {
  --bs-icon-size: .75rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: var(--bs-icon-size);
  width: calc(var(--bs-icon-size) * 2);
  height: calc(var(--bs-icon-size) * 2);
  color: var(--bs-primary);
}

.bs-icon-xs {
  --bs-icon-size: 1rem;
  width: calc(var(--bs-icon-size) * 1.5);
  height: calc(var(--bs-icon-size) * 1.5);
}

.bs-icon-sm {
  --bs-icon-size: 1rem;
}

.bs-icon-md {
  --bs-icon-size: 1.5rem;
}

.bs-icon-lg {
  --bs-icon-size: 2rem;
}

.bs-icon-xl {
  --bs-icon-size: 2.5rem;
}

.bs-icon.bs-icon-primary {
  color: var(--bs-white);
  background: var(--bs-primary);
}

.bs-icon.bs-icon-primary-light {
  color: var(--bs-primary);
  background: rgba(var(--bs-primary-rgb), .2);
}

.bs-icon.bs-icon-semi-white {
  color: var(--bs-primary);
  background: rgba(255, 255, 255, .5);
}

.bs-icon.bs-icon-rounded {
  border-radius: .5rem;
}

.bs-icon.bs-icon-circle {
  border-radius: 50%;
}


</style>