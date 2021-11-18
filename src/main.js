import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueRouter from 'vue-router';
import router from './router/router';

import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ImagePreview from 'primevue/imagepreview';
import ScrollPanel from 'primevue/scrollpanel';
import Tag from 'primevue/tag';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false;

Vue.use(PrimeVue);
Vue.use(VueRouter); 

Vue.component('Tag', Tag);
Vue.component('Card', Card);
Vue.component('Galleria', Galleria);
Vue.component('Dialog', Dialog);
Vue.component('Button', Button);
Vue.component('ImagePreview', ImagePreview);
Vue.component('ScrollPanel', ScrollPanel);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
