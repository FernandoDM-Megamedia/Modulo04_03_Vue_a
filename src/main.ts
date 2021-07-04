import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/main.scss'

const vuetify = createVuetify()

createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
