<template>
  <div class="content">
    <Loading :already='already'></Loading>
    <asideLeft v-show='already'>
      <Banner :username='resumeData.userName' :jobType='resumeData.jobType'></Banner>
      <baseInfo :baseInfo='resumeData.baseInfo' :skills='resumeData.skills'></baseInfo>
    </asideLeft>
    <asideRight v-show='already' :workExperience='resumeData.workExperience' :careerObjective='resumeData.careerObjective' :eduExperience='resumeData.eduExperience' :projectExperience='resumeData.projectExperience' :relatedWorks='resumeData.relatedWorks'></asideRight>
  </div>
</template>
<script>
import Loading from './components/Loading.vue'
import asideLeft from './components/Aside-left.vue'
import asideRight from './components/Aside-right.vue'
import Banner from './components/Banner.vue'
import baseInfo from './components/Base-info.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Loading,
    asideLeft,
    asideRight,
    Banner,
    baseInfo
  },
  data() {
    return {
      already: false,
      // username: '',
      // jobType: '',
      // baseInfo: [],
      // skills: [],
      // workExperience: [],
      // careerObjective: [],
      // eduExperience: [],
      // projectExperience: [],
      // relatedWorks: [],
    }
  },
  mounted() {
    this.$nextTick(function () {
      //一下定时器是给开发用的，上线时用下面注释掉的那个
      // setInterval(() => {
      //   this.getResumeData();
      // }, 100)
      // this.getResumeData();
      this.hideLoading();
      // this.onFocus();
    })
  },
  methods: {
    // getResumeData: function () {
    //   axios.get('/static/jsons/resume.json').then((res) => {
    //     if (res.data.status === 0) {
    //       var data = res.data
    //       this.username = data.userName
    //       this.jobType = data.jobType
    //       this.baseInfo = data.baseInfo
    //       this.skills = data.skills
    //       this.workExperience = data.workExperience
    //       this.careerObjective = data.careerObjective
    //       this.eduExperience = data.eduExperience
    //       this.projectExperience = data.projectExperience
    //       this.relatedWorks = data.relatedWorks
    //     } else {
    //       alert('数据获取异常！')
    //     }
    //   })
    // },
    // onFocus: function() {
    //   window.onfocus = () => {
    //     this.getResumeData();
    //   }
    // },
    hideLoading: function () {
      window.onload = () => {
        setTimeout(() => {
          this.already = true
        }, 1)
      }
      setTimeout(() => {
        this.already = true
      }, 10000)
    }
  },
  computed: {
    resumeData() {
      return this.$store.state
    }
  }
}
</script>
<style src="./assets/styles/main.scss" lang='scss'></style>
