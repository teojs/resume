<template>
  <div class="baseInfo">
    <ul>
      <li>
        <h1><i class="iconfont icon-baseinfo ib"></i>基本信息：</h1>
      </li>
      <li v-for='item in baseInfo'>
        <div class="flex-box">
          <div class="flex-cell"><span><i class="iconfont ib" :class='"icon-" + item.iconName'></i>{{item.infoName}}</span></div>
          <div class="flex-cell">
            <a :href='item.url' target="_blank" v-if='item.url'><i class="iconfont icon-wailian ib"></i>{{item.value}}</a>
            <span v-else>{{item.value}}</span>
          </div>
        </div>
      </li>
    </ul>
    <ul>
      <li>
        <h1><i class="iconfont icon-skill ib"></i>职业技能：</h1>
      </li>
      <li v-for='item in skills'>
        <div class="flex-box">
          <div class="flex-cell"><span><i class="iconfont icon-yuyan ib"></i>{{item.skillName}}</span></div>
          <div class="flex-cell">
            <i class="iconfont ib" :class='"icon-star-" + item.level'></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'baseInfo',
  data() {
    return {}
  },
  props: [
    'baseInfo',
    'skills'
  ]
}
</script>
<style>
</style>
