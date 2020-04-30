// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(ElementUI)
Vue.use(axios)
Vue.config.productionTip = false

// 设置反向代理，前端请求默认发送到 http://localhost:8625/api
// var axios = require('axios')
// axios.defaults.baseURL = 'http://localhost:8625/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
// Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' - smallFrog 书城'
    const role = VueCookies.get('user_ID');
    if (to.meta.permission && !role && (to.path == '/shopping/cart' || to.path == '/shopping/settle' || to.path == '/shopping/pay' || to.path == '/order' || to.path == '/setting')) {
        next('/403'); 
    } else {
        next();
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})