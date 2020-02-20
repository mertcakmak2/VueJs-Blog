import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Routes from './routes.js'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode:'history'
})


Vue.directive('tema', {
  bind(el,binding){
    if(binding.value == 'uzun'){
      el.style.maxWidth="1200px"
    } else if (binding.value =='kisa'){
      el.style.maxWidth='560px'
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
