import Vue from 'vue'
import  VueRouter  from 'vue-router';
import Index from '../components/Index';
import Login from '../components/Login'
import  Register from '../components/Register'
import About from '../components/About'
import componentsA from '../components/componentsA'
import componentsB from '../components/componentsB'

Vue.use(VueRouter)
export  default new VueRouter({
  routes:[
    {
      path:'/',
      component:componentsA
    },{
      path:'/login',
      component:Login
    },{
      path:'/register',
      component:Register
    },{
      path:'/about',
      component:About
    }
    ,{
      path:'/componentsA',
      component:componentsA
    }
    ,{
      path:'/componentsB',
      component:componentsB
    }
  ]

});
