import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Tbutton from './components/Tbutton/index.vue'
import Cascader from './components/Cascader/index.vue'
const app=createApp(App)
app.component('t-button',Tbutton)
app.component('t-cascader',Cascader)
app.use(store).use(router).mount('#app')
