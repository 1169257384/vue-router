<template>
  <div>
    <h1>学生管理</h1>
    <div class="main">
      <div class="left">
        <router-view name="aleft"></router-view>
      </div>
      <div class="right">
        <router-view name="aright"></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.main {
  display: flex;
  .left {
    width: 300px;
  }
  .right {
    flex: 1
  }
}
</style>
