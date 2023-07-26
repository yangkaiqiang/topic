import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import News from '../pages/News/index.vue';
import NewsDetail from '../pages/News/Detail.vue';
import Login from '../pages/Login/index.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: News,
  },
  {
    path: '/news/:id', // 新闻详情
    name: 'NewsDetail',
    component: NewsDetail,
    props: true,
  },
  {
    path: '/login', // 登录
    name: 'Login',
    component: Login,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 路由守卫省略

export default router;
