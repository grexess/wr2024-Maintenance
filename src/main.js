import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './helpers';

import './style.css';
import App from './App.vue';

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();
createApp(App).use(router).use(vuetify).use(pinia).mount('#app');
