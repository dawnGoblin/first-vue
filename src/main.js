import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import App from './App'
import Home from './components/Home'
import store from './store'
import Planlist from './components/Planlist'
import Login from './components/Login'
import Regist from './components/Regist'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.prototype.$http=axios

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/planlist',
  component : Planlist,
  children : [{
    path : 'logtime',
    // 懒加载
    component : resolve => require(['./components/Logtime.vue'],resolve),
  }]
},{
  path:'/login',
  component:Login
},{
  path:'/regist',
  component:Regist
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App
});
