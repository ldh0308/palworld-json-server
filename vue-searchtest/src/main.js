import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import axios from 'axios';

Vue.prototype.$axios = axios;
