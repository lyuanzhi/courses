import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(VueRouter);

const router=new VueRouter(routerConfig);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
