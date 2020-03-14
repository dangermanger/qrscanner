// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
import './assets/css/main.css'

// //bootsctrap 4
// import 'bootstrap4' не запускался вебпак

//Font Awesome 5 free
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Vue.js
window.Vue = require('vue')
//Vue QR-scanner
import Vue from "vue";
import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)
Vue.component('menu-component', require('./components/menu.vue').default)
Vue.component('qr-scanner-component', require('./components/qr-scanner.vue'))

// Vue init
const app = new Vue({
  el: '#app'
})

