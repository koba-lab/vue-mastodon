import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.prototype.$apiaxios = axios.create({
  baseURL: 'https://ika.queloud.net',
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
