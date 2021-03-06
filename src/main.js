import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGoogleCharts from 'vue-google-charts'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueGoogleCharts)

new Vue({
  render: h => h(App),
}).$mount('#app')
