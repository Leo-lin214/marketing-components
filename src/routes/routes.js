import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  { name: '营销组件', path: '/', component: () => import('./../default') },
  { name: '老虎机', path: '/tigers', component: () => import('./../components/tigers/tigers') },
  { name: '抓娃娃', path: '/grab', component: () => import('./../components/grab/grab') },
  { name: '九宫格', path: '/jiugongge', component: () => import('./../components/jiugongge/jiugongge') },
  { name: '大转盘', path: '/wheel', component: () => import('./../components/wheel/wheel') },
  { name: '翻牌游戏', path: '/flip', component: () => import('./../components/flip/flip') },
];

const router = new VueRouter({ routes });

export default router;