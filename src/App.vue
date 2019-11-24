<template>
  <div id="app">
    <button @click="index">首页</button>
    <button @click="login">登录页</button>
    <button @click="$router.push('/register')">注册页</button>
    <button @click="$router.push('/about')">关于页</button>
    <div><router-view/></div>

  </div>
</template>

<script>

  export default {
    name: 'App',
    data: function () {
      return {
        //默认首页
        curPage: 'Index'
      }
    },
    methods:{
      index(){
        return this.$router.push('/');
      },
      login(){
        return this.$router.push('login')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
