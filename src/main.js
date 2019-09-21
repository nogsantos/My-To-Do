import Vue from 'vue';
import Antd from 'ant-design-vue/es';
import App from '@/App.vue';
import store from '@/store';
import '@/registerServiceWorker';

import 'ant-design-vue/dist/antd.css';
import '@/assets/scss/base/_base.scss';

/**
 * Configs
 */
const isDevelopmentEvironment = process.env.NODE_ENV && process.env.NODE_ENV !== 'production';

Vue.config.productionTip = isDevelopmentEvironment;
Vue.config.devtools = isDevelopmentEvironment;

Vue.use(Antd);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
