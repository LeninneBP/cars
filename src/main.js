//-------------------- Vue ---------------------//

import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import VueRouter from 'vue-router';
import router from './router/router';

//-------------------- Prime-Vue ---------------------//

import Paginator from 'primevue/paginator';
import Card from 'primevue/card';
import Galleria from 'primevue/galleria';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ImagePreview from 'primevue/imagepreview';
import ScrollPanel from 'primevue/scrollpanel';
import Tag from 'primevue/tag';
import Rating from 'primevue/rating';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

//-------------------- Firebase ---------------------//

// // import {storage} from 'firebase/storage';
import {initializeApp} from 'firebase/app';
// // import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {firebaseConfig} from '@/firebase/firebase-app.js'

//-------------------- Components ---------------------//

Vue.config.productionTip = false;
Vue.use(PrimeVue);
Vue.use(VueRouter); 
initializeApp(firebaseConfig);

Vue.component('Paginator', Paginator);
Vue.component('Rating', Rating);
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
