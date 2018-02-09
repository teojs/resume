<template>
  <div class="loading" v-if='!already'>
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  data() {
    return {

    }
  },
  props: ['already']
}
</script>
<style lang='scss' scope>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background: #fff;
  .double-bounce1,
  .double-bounce2 {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #29b6f6;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -30px;
    margin-left: -30px;
    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }
  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }
}

@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: scale(0.0)
  }
  50% {
    -webkit-transform: scale(1.0)
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>
