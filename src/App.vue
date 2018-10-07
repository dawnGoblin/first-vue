<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <span class="glyphicon glyphicon-time"></span>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/planlist">计划列表</router-link></li>
          <!--  <li><router-link to="/login"><span class="glyphicon glyphicon-log-in"></span> 登录</router-link></li>
          <li><router-link to="/regist"><span class="glyphicon glyphicon-user"></span> 注册</router-link></li>   -->
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
          <Sidebar></Sidebar>
      </div>
      <div class="col-sm-9">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: { Sidebar },
  }
</script>

