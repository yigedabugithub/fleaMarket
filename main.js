// 此处代码如果有错误或者需要优化的地方，请联系作者。(小伙伴们在使用的时候切记不要忘了暴露store,这个错很多小伙伴都犯过!切记)
import App from './App';
import Vue from 'vue';

// 引入全局公共功能函数
import tool from '@/utils/common.js';
Vue.prototype.tool=tool;

// 引入插件
import plugins from './plugins';
Vue.use(plugins);

// 引入全局TuniaoUI
import TuniaoUI from 'tuniao-ui';
Vue.use(TuniaoUI);

// 引入store
import store from './store';

// 引入TuniaoUI提供的vuex简写方法
let vuexStore = require('@/store/$t.mixin.js');
Vue.mixin(vuexStore);

//配置公共方法
import common from '@/utils/debounce.js';
Vue.prototype.$noMultipleClicks = common.noMultipleClicks;

// 引入lodash  把lodash挂载在原型上面
import _ from 'lodash';
Vue.prototype.$_ = _ ; 

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
	store,
    ...App
})
app.$mount()
