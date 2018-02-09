<template>
  <aside class="aside-left slideIn" :class='{fixedBottom: isFixed}'>
    <slot></slot>
  </aside>
</template>
<script>
export default {
  name: 'Aside-left',
  data() {
    return {
      isFixed: false
    }
  },
  mounted() {
    this.scrollToFixed()
  },
  methods: {
    scrollToFixed: function() {
      window.onscroll = () => {
        if (document.body.clientWidth > 750) {
          if ((document.body.clientHeight + document.body.scrollTop) > this.$el.offsetHeight) {
            this.isFixed = true
          } else {
            this.isFixed = false
          }
        } else {
          this.isFixed = false
        }
      }
    }
  }
}
</script>
<style>
</style>
