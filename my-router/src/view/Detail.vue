<template>
  <div>
    <h1>Detail---商品列表</h1>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route)
    console.log(this.$router)
  }
}
</script>
