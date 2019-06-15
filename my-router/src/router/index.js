//路由器的文件
//0.引入 vue
import Vue from 'vue'
//1.引入 vue-router
import VueRouter from 'vue-router'
//1.1引入路由级别组件
import Home from '../view/Home.vue'
import page1 from '../view/page1.vue'
import page2 from '../view/page2.vue'
import detail from '../view/Detail.vue'
import login from '../view/Login.vue'
import admin from '../view/admin.vue'
import right from '../view/right.vue'
import left from '../view/left.vue'
//2.使用 (VueRouter)插件
Vue.use(VueRouter)
//3.配置路由规则 [{}, {}, {}]
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'page1', //要看好这个是哪里来的 url地址
        alias: 'ji',
        name: 'page1',
        component: page1
      },
      {
        path: 'page2',
        alias: 'll',
        name: 'page2',
        component: page2
      },
    ]
  },

  {
    // 通过 ：来指定后面的id是动态路由参数
    // /detail/1/apple
    // /detail/2/banana
    path: '/Detail/:id/:name',
    name: 'Detil',
    component: detail,
  },

  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/admin',
    name: 'admin',
    component: admin,
    children: [
      {
        path: 'add',
        components: {
          default: page1,
          aleft: left,
          aright: right
        }
      },
      {
        path: 'hhh',
        components: {
          default: page2,
          aleft: {
            render (h) {
              return h('p' , '啦啦啦')
            }
          },
          aright: {
            render (h) {
              return h('p' , '德玛西亚')
            }
        }
      }
      }
    ]
  },

  {
    path: '*',
    redirect: '/home/page1'
  }
]
//实例化路由器对像
const router =new VueRouter({
  routes: routes //可以简写
})
//5.将第四步中的东西给暴露出去
export default router;
