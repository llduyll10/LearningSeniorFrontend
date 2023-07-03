import './assets/main.css'

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'


import App from './App.vue'
import {router} from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })

app.mount('#app')
