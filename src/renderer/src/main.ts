import './assets/main.css'
import './tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'

import * as FaIcons from 'oh-vue-icons/icons/fa'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

// TODO: only imports icons we need (other bundle size too large :) )
const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

const app = createApp(App)
app.component('VIcon', OhVueIcon)
app.mount('#app')
