import * as types from './mutation-types'

export default {
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan);
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  },
  setbaseinfo({ commit }, param){
    commit(types.SET_BASEINFO,param)
  },
  addbaseinfo({ commit }, param){
    commit(types.ADD_BASEINFO,param)
  },
  clearbaseinfo({ commit }){
    commit(types.CLEAR_BASEINFO)
  }
};