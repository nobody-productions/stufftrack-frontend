import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// configurazione di Axios
axios.defaults.baseURL = 'http://localhost:8000/api/v1/'
axios.defaults.withCredentials = true


createApp(App).use(router).mount('#app')
