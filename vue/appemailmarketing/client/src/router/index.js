import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/auth/Login'
import store from '@/states'

import EmailList from '@/components/email/EmailList'
import EmailNew from '@/components/email/EmailNew'
import EmailView from '@/components/email/EmailView'
import EmailEdit from '@/components/email/EmailEdit'
import EmailRemove from '@/components/email/EmailRemove'

import ListDisparo from '@/components/list/ListDisparo'
import ListLead from '@/components/list/ListLead'
import LeadView from '@/components/list/LeadView'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/email',
      name: 'EmailList',
      component: EmailList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/email/new',
      name: 'EmailNew',
      component: EmailNew,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/email/view/:id',
      name: 'EmailView',
      component: EmailView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/email/edit/:id',
      name: 'EmailEdit',
      component: EmailEdit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/email/remove/:id',
      name: 'EmailRemove',
      component: EmailRemove,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/list',
      name: 'ListDisparo',
      component: ListDisparo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/list/:id',
      name: 'ListLead',
      component: ListLead,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/lead/:id',
      name: 'LeadView',
      component: LeadView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  let requiresAuth = to.meta.requiresAuth || false

  let token = store.state.user.token

  if (token) {
    window.axios.defaults.headers.common['Authorization'] = 'bearer ' + token
  }

  if (requiresAuth) {
    return store.dispatch('getCurrentUser').then(() => {
      return next()
    }).catch(() => {
      return next({path: 'login'})
    })
  }

  return next()
})
