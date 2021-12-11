<template>
  <div class="home">
    <div @click="send">我是子应用的home</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    send () {
      this.$setGlobalState({
        params: 123
      });
      // console.log(this.$msg.Confirm.error)
      // this.$msg.Confirm.success({
      //   type:'success',
      //   message:'成功'
      // })
      // this.$msg.Confirm.erroT({
      //   message: "确定同意该申请？",
      //   tips: "提示",
      //   showCancelButton: true,
      //   showConfirmButton: true,
      //   onClose(action) {
      //     console.log(action, " action");
      //   }
      // });
    }
  }
}
</script>
