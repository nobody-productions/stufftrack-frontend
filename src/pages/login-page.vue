<template>
  <section class="position-relative py-4 py-xl-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Accedi a StuffTrack</h2>
          <p class="w-lg-50">Il nuovo modo di tenere traccia dei tuoi interessi e di ciò che ti piace.</p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-6 col-xl-4">
          <div class="card mb-5">
            <div class="card-body d-flex flex-column align-items-center">
              <div class="bs-icon-xl bs-icon-circle bs-icon-primary bs-icon my-4" style="background: var(--bs-red);">
              <i class="fa-solid fa-link"></i>
              </div>
              <form @submit.prevent="submit" class="text-center form-signin">
                <div class="mb-3"><input v-model="form.email" class="form-control" type="email" name="email" placeholder="Email"></div>
                <div class="mb-3"><input v-model="form.password" class="form-control" type="password" name="password" placeholder="Password"></div>
                <div class="mb-3"><button class="btn btn-primary d-block w-100" type="submit">Login</button></div>

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
    const submit = async() => {
      await axios.post('login/', {
        email: form.email,
        password: form.password,
      }).then(async () => await router.push("/")).catch( async () => {
        alert("Credenziali errate");
      });
      // dopo il login vai alla pagina principale


    };

    return {
      form,
      submit,
    };
  },
  mounted() {
    // check if the user is already logged in
    axios.get('/profile').then(()=>{
      router.push("/dashboard");
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