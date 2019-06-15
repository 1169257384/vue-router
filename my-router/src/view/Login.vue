<template>
  <div>
    <h1>登录页面</h1>
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="password"/>
    <button @click="handlelogin">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handlelogin () {
      //过了几秒假设登录成功
      setTimeout(() => {
        //跳转回首页
        // this.$router.push('/home/page1')
        // this.$router.replace('/home/page1')   //replace 可以让页面重定位
        this.$router.replace({
          name: 'page1'
        })
      },2000)
    }
  }
}

</script>

