// Composables
import user from '@/store/user'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      // {
      //   path: '/products',
      //   name: 'Products',
      //   component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue'),
      // },
      // {
      //   path: '/prod',
      //   name: 'Products',
      //   component: () => import(/* webpackChunkName: "products" */ '@/views/ProductsView.vue'),
      // },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/ProfileView.vue'),
        meta: {
          guard: 'auth'
        }
      },
        {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/AboutView.vue'),
      },
      {
        path: '/products',
        name: 'products',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ProductsView.vue'),
      },
      {
        path: '/single',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/SingleProduct.vue'),
      },
      // {
      //   path: '/contact',
      //   name: 'contact',
      //   // route level code-splitting
      //   // this generates a separate chunk (about.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import(/* webpackChunkName: "home" */ '@/views/ContactView.vue'),
      // },
      {
        path: '/contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/ContactView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/CartView.vue'),
      },

      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
        meta: {
          guard: 'public'
        },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/views/NotFoundView.vue'),
      },
    ],
  },
  // {
  //   path: '/auth',
  //   component: () => import('@/layouts/appbar-free/AppBarFree.vue'),
  //   children: [

  //   ]
  // },
  {
    path: '/admin',
    component: () => import('@/layouts/Admin/DefaultAdmin.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/DashboardView.vue'),
        meta:{
          guard:'admin'
        }
      },
      {
        path: '/chartView',
        name: 'chartView',
        component: () => import('@/views/chartView.vue'),
        meta:{
          guard:'admin'
        }
      },
      {
        path: '/productlist',
        name: 'productlist',
        component: () => import('@/views/ProductListView.vue'),
        meta:{
          guard:'admin'
        }
      },
      {
        path: '/addProduct',
        name: 'addProduct',
        component: () => import('@/views/AddProductsView.vue'),
        meta:{
          guard:'admin'
        }
      },
      {
        path: '/userList',
        name: 'UsersList',
        component: () => import('@/views/UsersListView.vue'),
        meta:{
          guard:'admin'
        }
      },
      {
        path: '/EditProduct',
        name: 'EditProduct',
        component: () => import('@/views/EditProductlist.vue'),
        meta:{
          guard:'admin'
        }
      },





    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

}

)

router.beforeEach(function (to, from, next) {
  const store = user()

  if (to.meta.guard === 'auth' && !store.isLoggedIn) {
    next('/login')
    // this.$router.push({ path: "/" })
  }
  // else if (to.meta.guard === 'public' && store.isLoggedIn) {
  //   next('/profile')
  // }
  else
    next()
})
router.afterEach(() => {
  window.scrollTo(0, 0);
});
export default router
