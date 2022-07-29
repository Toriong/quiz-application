import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
// import router from 'vue-router'

// new Vue({
//     router,
//     render: h => h(App),
// }).$mount('#app')

createApp(App).use(router).mount('#app')
