import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quote from '../views/Quote.vue'
import QuotesByDate from '../views/Quotes.vue'
import TheirProfile from '../views/TheirProfile.vue'
import MyProfile from '../views/MyProfile.vue'
import CreateQuote from '../views/createQuote'
import Auth from '../views/Auth.vue'
import CreateAccount from '../views/CreateAccount.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quote/:id',
    name: 'Quote',
    component: Quote
  },
  {
    path: '/user/:id/createQuote',
    name: 'CreateQuote',
    component: CreateQuote
  },
  {
    path: '/QuotesByDate',
    name: 'QuotesByDate',
    component: QuotesByDate
  },
  {
    path: '/theirProfile/:id',
    name: 'TheirProfile',
    component: TheirProfile
  },
  {
    path: '/myProfile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/createAccount',
    name: 'CreateAccount',
    component: CreateAccount
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
