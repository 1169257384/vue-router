<template>
  <div>
    <h1>page1--商品列表页</h1>
    <ul>
      <li
        v-for="(good) in goods"
        :key="good.id"
        >
        <router-link :to="`/Detail/${good.id}/${good.name}`">
        {{ good.name }}
        </router-link>
        <!-- <router-link
          :to="{
          name: 'Detail',
          params: {
            id: good.id,
            name: good.name
          }
        }">
         {{ good.name }}
        </router-link> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      goods: [
        {id: 1, name: 'apple' },
        {id: 2, name: 'banana' },
        {id: 3, name: 'orange' }
      ]
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>
