import './assets/css/index.less'

import { createApp } from 'vue'
import "normalize.css"

import App from './App.vue'
import router from "./router"
import pinia from "./store"
import ElementPlus from 'element-plus'
import registerIcons from './global/register-icons'

import 'element-plus/dist/index.css'

createApp(App).use(router).use(pinia).use(registerIcons).use(ElementPlus).mount('#app')
