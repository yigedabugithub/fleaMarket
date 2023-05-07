<script>
import config from '@/config/config.js'
import { getToken } from '@/utils/auth.js'
export default {
  onLaunch: function () {
    this.initApp()
  },
  onShow() {
    // 1.以下为Tuniao-Ui的vuex使用方法，例如如下创建一个数组arr。使用this.$t.vuex('vuex_frenidList',arr);
    // 2.在store下的index.js里面的 state 对象里面定义你的要存储的数据字段，例如 vuex_frenidList 。建议 vuex_开头。
    // 3.获取vuex数据,直接使用 this.vuex_frenidList 即可获取到状态机的数据。
  },
  methods: {
    // 初始化应用
    initApp() {
      this.initConfig()
      //#ifdef H5
      this.checkLogin()
      //#endif
    },
    // 挂载全局配置信息
    initConfig() {
      this.globalData.config = config
    },
    // 检查一哈登录状态(H5)
    checkLogin() {
      if (!getToken()) {
        // this.$tab.reLaunch('/pages/login')
      }
    }
  }
}
</script>
<style>
page {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
<style lang="scss">
// 引入Tuniao-Ui的样式文件(如果还需引入uView或者其他框架，如下即可)
@import './tuniao-ui/index.scss';
@import './tuniao-ui/iconfont.css';
// 在使用animate.css的时候注意一定要把animate.css文件中的 :root选择器改为 page (切记)。
@import '@/static/animate/animate.css';
// 去掉页面滚动条
::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
</style>
