import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './modules/settings';
import UserInfo from './modules/userInfo';
import Aliyun from "@/store/modules/aliyun";
import createPersistedstate from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Settings,
    UserInfo,
    Aliyun
  },
  plugins: [
    createPersistedstate({
      key: 'UserInfo',
      paths: ['Settings', 'UserInfo', 'Aliyun']
    })
  ]
})
