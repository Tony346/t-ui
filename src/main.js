import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Tbutton from './components/Tbutton/index.vue'
import Cascader from './components/Cascader/index.vue'
import Rate from './components/Rate/index.vue'
import Slider from './components/Slider/index.vue'

const app = createApp(App)
app.component('t-button', Tbutton)
app.component('t-cascader', Cascader)
app.component('t-rate', Rate)
app.component('t-slider', Slider)
app.use(store).use(router).mount('#app')
