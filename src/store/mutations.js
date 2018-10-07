import * as types from './mutation-types'
import * as localStorage from '../local'
export default {
    // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值，未来可以做登入直接读取昵称和头像
    const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
    
    state.list.push(
      Object.assign({ name:'似水年华', avatar: avatar }, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1)
  },

  [types.SET_BASEINFO] (state, data) {
    state.user_datas = data;
    state.time = localStorage.getDate()
    localStorage.user_info.set(state)
  },
  [types.ADD_BASEINFO] (state, data) {
    state.user_datas.role_name = data.role_name;
    state.user_datas.img = data.img
    localStorage.user_info.get(state)
  },
  [types.CLEAR_BASEINFO] (state) {
    state.user_datas=''
    localStorage.user_info.set(state)
  }
};