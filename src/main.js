import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faPhone } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faPhone)

const _App = createApp(App)

_App.use(router);

_App.component('font-awesome-icon', FontAwesomeIcon)

_App.mount('#app')
