import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ImagePreview from 'primevue/imagepreview';


import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false

Vue.use(PrimeVue)

Vue.component('Dialog', Dialog);
Vue.component('Button', Button);
Vue.component('ImagePreview', ImagePreview);

new Vue({
  render: h => h(App),
}).$mount('#app')
