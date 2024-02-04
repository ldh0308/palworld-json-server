import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import axios from 'axios';

Vue.prototype.$axios = axios;

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
