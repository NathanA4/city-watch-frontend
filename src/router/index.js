import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/city/:id',
    props: true,
    component: () => import('../views/City/City.vue'),
    children: [
      {
        path: '',
        props: true,
        components: {
          content: () => import('../views/City/CityHome.vue')
        }
      },
      {
        path: 'about',
        props: true,
        components: {
          content: () => import('../views/City/CityAbout.vue')
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
