<template>
  <div class="about">
    <h2 style="color:red;text-align:center;">你现在主应用/about路由</h2>
    <br>
    <br>
    <br>
    <button @click="$router.push('/')">主应用 /</button>
    <br />
    <br />
    <br />
    <button @click="$router.push('/child-vue/about')">子应用 /child-vue/about</button>
  </div>
</template>
<style scoped>
.about{
  display: flex;
  flex-direction: column;
}
.about button{
  height: 40px;
}
</style>
