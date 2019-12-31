import Vue from 'vue';
import axios from 'axios';

import Video from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-flash';
// eslint-disable-next-line camelcase
import video_zhCN from 'video.js/dist/lang/zh-CN.json';
// eslint-disable-next-line camelcase
import video_en from 'video.js/dist/lang/en.json';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router';
import store from './store';

Vue.use(ElementUI, { size: 'small' });

Vue.prototype.$video = Video;
Video.addLanguage('zh-CN', video_zhCN);
Video.addLanguage('en', video_en);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
