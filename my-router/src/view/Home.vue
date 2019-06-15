<template>
  <div>
    <h1>我是app</h1>

    <!-- <a href="#/page1">page1</a><hr/>
    <a href="#/page2">page2</a> -->

    <router-link replace to="/home/page1">page1</router-link><hr/>
    <router-link replace :to="{ name: 'page2'}">page2</router-link><hr/>
    <router-link to="/login">登录</router-link>
    <!-- 路由坑 路由视图
        / page1 page1 组件给替换
        / page2 page2 组件给替换 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">
  .router-link-active{
    color: red
  }
</style>
