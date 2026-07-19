import DefaultLayout from '../components/Layouts/DefaultLayout.vue'
import HomeView from '../views/HomeView2.vue'

const router = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home2',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('../components/Layouts/AuthLayout.vue'),
  },
]

export default router
