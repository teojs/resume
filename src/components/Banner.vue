<template>
  <div class="banner-bg">
    <div class="myInfo flex-box">
      <div class="flex-cell">
        <div class="jobName"><i class="iconfont icon-user ib"></i>{{username}}</div>
        <div class="myName"><i class="iconfont icon-work ib"></i>{{jobType}}</div>
      </div>
      <div class="flex-cell">
        <div class="myHeader">
          <img src="../assets/images/header.jpg" alt=头像>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: ['username', 'jobType']
}
</script>
<style>
</style>
