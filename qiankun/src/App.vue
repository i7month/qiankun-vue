<template>
  <div id="app">
    <div v-show="!show">
      <router-view></router-view>
    </div>
    <div id="container" v-show="show"></div>
  </div>
</template>
<script>
import _ from "llo/utils";
export default {
  data() {
    return {
      show: false,
    };
  },
  watch: {
    $route(to) {
      console.log(to);
      if (to.path.includes("/child-")) {
        this.show = true
      }else {
        this.show = false
      }
    },
  },
  mounted() {
    if(this.$route.path.includes("/child-")) this.show = true
    window.addEventListener(
      "scroll",
      this.$utils.throttle((props) => {
        console.log(props);
      }, 1000)
    );
  },
  destroyed() {
    window.removeEventListener("scroll", this.$utils.throttle());
  },
  methods: {
    submit: _.throttle((props) => {
      console.log(props);
    }, 1000)
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100vh;
  position: relative;
}
</style>
