<template>
  <div class="about">
    <h2 style="color:red;text-align:center;">你现在在主应用/路由</h2>
    <br>
    <br>
    <br>
    <button @click="$router.push('/about')">主应用 /about</button>
    <br />
    <br />
    <br />
    <button @click="$router.push('/child-vue/vue')">子应用 /child-vue/vue</button>
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
