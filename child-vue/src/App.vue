<template>
  <div id="vueApp">
    <div id="nav">
      <router-link to="/vue">子项目跳路由/Vue</router-link> |
      <router-link to="/about">子项目跳路由/About</router-link>
      <div @click="$router.push('/')">回到主项目</div>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  methods:{
  }
}
</script>

<style>
#vueApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
