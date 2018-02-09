import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const state = {
  userName: '',
  username: '',
  jobType: '',
  baseInfo: '',
  skills: '',
  workExperience: '',
  careerObjective: '',
  eduExperience: '',
  projectExperience: '',
  relatedWorks: ''
}
const mutations = {
  getData() {
    axios.get('/static/jsons/resume.json').then((res) => {
      if (res.data.status === 0) {
        var data = res.data
        state.userName = data.userName
        state.username = data.userName
        state.jobType = data.jobType
        state.baseInfo = data.baseInfo
        state.skills = data.skills
        state.workExperience = data.workExperience
        state.careerObjective = data.careerObjective
        state.eduExperience = data.eduExperience
        state.projectExperience = data.projectExperience
        state.relatedWorks = data.relatedWorks
      } else {
        alert('数据获取异常！')
      }
    })
  }
}
const getters = {

}
const actions = {

}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
store.commit('getData')
export default store
