import Vue from 'vue'
import Router from 'vue-router'
//  导入组件(@表示src文件夹)：
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'
import Count from '@/components/Count'
Vue.use(Router) // Vue.use()：使用插件

export default new Router({
  mode: 'history',  //  去掉url上的"#",默认值为hash
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test', // 当url为/test时使用Test组件
      name: 'Test',
      component: Test, // 组件名为Test,与improt后面的名字对应
      children: [ //  子路由写在这里
        {
          path: 'test1', //  相当于url为/test/test1时加载该组件
          name: 'Test1',
          component: Test1
        }, {
          path: 'test2',
          name: 'Test2',
          component: Test2,
          alias: '/test-2' // 相当于给路径test2起别名为test-2,键入时会进入同一界面
        }, {
          path: '/testurl/:userName/:userId',
          name: 'TestUrl',
          component: TestUrl,
          //  路由钩子函数(1)：
          beforeEnter: (to, from, next) => { // 在进入绑定组件前进行
            console.log(to) // to：正在进入的组件（对象）,这里指TestUrl组件
            console.log(from) //  from：进入绑定该钩子函数的组件前的路由信息（对象），这里指进入TestUrl组件前
            next()  //  next(true)：路由跳转(true可以不写)：next(false)：路由不跳转
          }
        }, {
          path: '/home',
          redirect: '/'   //  重定向：当url键入为/home时改变为/
        }, {  //  重定向传参：
          path: '/redirectparam/:userName/:userId(\\d+)',
          redirect: '/testurl/:userName/:userId(\\d+)'
        }
      ]
    }, {
      path: '*',  //  当键入的url没有匹配到时使用该路由
      component: Error  //  使用Error组件
    }, {
      path: '/count',
      component: Count
    }
  ]
})
/*
  redirect(重定向)和alias(别名)的区别:
  前者直接将url改变为真实路径，后者没有改变路径，
  让用户能够明确的看到自己访问的地址
  */
