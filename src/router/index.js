import Vue from 'vue'
import Router from 'vue-router'
//  导入组件(@表示src文件夹)：
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'
Vue.use(Router) // Vue.use()：使用插件

export default new Router({
  mode: history,  //  去掉url上的"#"
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
          component: TestUrl
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
    }
  ]
})
/*
  redirect(重定向)和alias(别名)的区别:
  前者直接将url改变为真实路径，后者没有改变路径，
  让用户能够明确的看到自己访问的地址
  */
