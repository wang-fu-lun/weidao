const Home = () => import(/* webpackChunkName: "group-foo" */ '@/views/Home/Home.vue')
const Register = () => import(/* webpackChunkName: "group-foo" */ '@/views/Register.vue')
const Mall = () => import(/* webpackChunkName: "group-foo" */ '@/views/Mall/Mall.vue')
const Mine = () => import(/* webpackChunkName: "group-foo" */ '@/views/Mine/Mine.vue')
const Login = () => import(/* webpackChunkName: "group-foo" */ '@/views/Login/Login.vue')
const Detail = () => import(/* webpackChunkName: "group-foo" */ '@/views/Mall/Detail')
const Cart = () => import(/* webpackChunkName: "group-foo" */ '@/views/Cart.vue')
const Serach = () => import(/* webpackChunkName: "group-foo" */ '@/views/Home/Serach.vue')
const routes = [
  {
    // 默认跳转
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    icon: 'icon-shouye-n',
    title: '首页'
  },
  {
    path: '/serach',
    name: 'Home',
    component: Serach
  },
  {
    path: '/mall',
    name: 'Mall',
    icon: 'icon-leimupinleifenleileibie-n',
    title: '分类',
    component: Mall
  },
  {
    path: '/cart',
    name: 'Cart',
    icon: 'icon-gwc-n',
    title: '购物车',
    component: Cart
  },
  {
    path: '/mine',
    name: 'Mine',
    icon: 'icon-wode-n',
    title: '我的',
    component: Mine,
    meta: {
      islogin: Boolean(window.localStorage.username)
    },
    beforeEnter: (to, from, next) => {
      console.log(to.meta.islogin)
      if (to.meta.islogin === true) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

export default routes
