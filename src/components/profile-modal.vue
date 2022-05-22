<template>
  <div class="modal" tabindex="-1" id="profile-modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Profilo</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Contenuto della finestra -->
          <div class="container-fluid">
            <img src="/profilepictures/default.png" class="rounded-circle border text-center mx-auto d-block" alt="profile png" style="width: 30%; height: 30%">
            <div class="row justify-content-center">
    <div class="col-auto">
          <table class="table table-responsive">
            <tbody>
              <tr>
                <td>ID</td>
                <td>{{user.id}}</td>
              </tr>
              <tr>
                <td>Nickname</td>
                <td>{{user.nickname}}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{{user.email}}</td>
              </tr>
              <tr>
                <td>Bio</td>
                <td>{{user.bio}}</td>
              </tr>
              <tr>
                <td>Role</td>
                <td>{{role_name}}</td>
              </tr>
            </tbody>
          </table>
    </div>
  </div>

          
          
          <!-- Bottoni -->
          <div class="modal-footer border-none">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Chiudi</button>
          </div>
        </div>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from "vue-router";
import {ref} from "vue";


export default {
  name: "user-modal",
  data() {
    let user = {};
    let role_name = ref("");
    return {
      user,
      role_name
    }
  },
  methods: {
    getUser: async function () {
      axios.get('/profile')
        .then(response => {
          this.user = response.data;
          this.parserole();
        })
        .catch(error => {
          console.log(error);
        })
    },
    parserole: function () {
      this.role_name = this.user.role.name;
    },
  },
  // mounted chiama la funzione quando il componente viene montato
  mounted() {
    this.getUser();
    
  }
}



</script>

<style scoped>

.modal-header {
    border-bottom: 0 none;
}

.modal-footer {
    border-top: 0 none;
}

</style>