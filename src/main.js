import Vue from 'vue'
import App from './App.vue'
import iconfont from './assets/css/iconfont/iconfont.less'
import snow from './components/components'

Vue.config.productionTip = false;
Vue.use(snow);

new Vue({
	render: h => h(App)
}).$mount('#app');
