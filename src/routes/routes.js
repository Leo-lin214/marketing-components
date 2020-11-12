import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  { name: '营销组件', path: '/', component: () => import('./../default') },
  { name: '老虎机', path: '/tigers', component: () => import('./../components/tigers/tigers') },
  { name: '抓娃娃', path: '/grab', component: () => import('./../components/grab/grab') },
  { name: '测试', path: '/test', component: () => import('./../components/test/test') }
];

const router = new VueRouter({ routes });

export default router;