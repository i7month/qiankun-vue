// import axios from 'axios'


// async function state () {
//   const res = await axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video')
//   return res.data.result
// }
// let result = state()


export default [
  {
    name: "vue-app", // 应用的名字
    entry: "//localhost:8081", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#container", // 容器id
    activeRule: "/#/child-vue", // 根据路由 激活的路径
    abs:{name:213}
  }
]