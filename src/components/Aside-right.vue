<template>
  <aside class="aside-right">
    <section class="section-left slideIn delay100">
      <ul class="time-list">
        <li class="list">
          <h1><i class="iconfont ib" :class='"icon-" + careerObjective.iconName'></i>{{careerObjective.firstTitle}}</h1>
          <dl v-for='item in careerObjective.secondlist'>
            <dt>{{item.list[0]}}</dt>
            <dd>
              <div class="flex-box flex-start f90" v-for='list in item.list' v-if='list.listName'>
                <div class="nowrap">
                  <p>{{list.listName}}</p>
                </div>
                <div v-html='list.listValue'></div>
              </div>
            </dd>
          </dl>
        </li>
        <li class="list">
          <h1><i class="iconfont ib" :class='"icon-" + workExperience.iconName'></i>{{workExperience.firstTitle}}</h1>
          <dl v-for='item in workExperience.secondlist'>
            <dt>{{item.list[0]}}</dt>
            <dd>
              <div class="flex-box flex-start f90" v-for='list in item.list' v-if='list.listName'>
                <div class="nowrap">
                  <p>{{list.listName}}</p>
                </div>
                <div v-html='list.listValue'></div>
              </div>
            </dd>
          </dl>
        </li>
        <li class="list">
          <h1><i class="iconfont ib" :class='"icon-" + eduExperience.iconName'></i>{{eduExperience.firstTitle}}</h1>
          <dl v-for='item in eduExperience.secondlist'>
            <dt>{{item.list[0]}}</dt>
            <dd>
              <div class="flex-box flex-start f90" v-for='list in item.list' v-if='list.listName'>
                <div class="nowrap">
                  <p>{{list.listName}}</p>
                </div>
                <div v-html='list.listValue'></div>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </section>
    <section class="section-right slideIn delay200">
      <ul class="time-list">
        <li class="list">
          <h1><i class="iconfont ib" :class='"icon-" + projectExperience.iconName'></i>{{projectExperience.firstTitle}}</h1>
          <dl v-for='item in projectExperience.secondlist'>
            <dt>{{item.list[0]}}</dt>
            <dd>
              <div class="flex-box flex-start f90" v-for='list in item.list' v-if='list.listName'>
                <div class="nowrap">
                  <p>{{list.listName}}</p>
                </div>
                <div v-html='list.listValue'></div>
              </div>
            </dd>
          </dl>
        </li>
        <li class="list">
          <h1><i class="iconfont ib" :class='"icon-" + relatedWorks.iconName'></i>{{relatedWorks.firstTitle}}</h1>
          <dl v-for='item in relatedWorks.secondlist'>
            <dt>{{item.list[0]}}</dt>
            <dd>
              <div class="flex-box flex-start f90" v-for='list in item.list'>
                <div class="nowrap">
                  <p>{{list.listName}}</p>
                </div>
                <div v-html='list.listValue'></div>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </section>
  </aside>
</template>
<script>
export default {
  name: 'Aside-right',
  data() {
    return {

    }
  },
  props: ['workExperience', 'careerObjective', 'eduExperience', 'projectExperience', 'relatedWorks']
}
</script>
<style>
</style>
