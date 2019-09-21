import Vue from 'vue';
import {
  Button,
  Card,
  Layout,
  Skeleton,
  Row,
  Col,
  Form,
  Input,
  Divider,
  Icon,
  Popconfirm,
  Affix,
  BackTop,
  message,
} from 'ant-design-vue';
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

Vue.use(Button);
Vue.use(Card);
Vue.use(Layout);
Vue.use(Skeleton);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(Input);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(Popconfirm);
Vue.use(Affix);
Vue.use(BackTop);

Vue.prototype.$message = message;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
