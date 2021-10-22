<template>
  <div class='sms'>
    <FrontPromo title='Поздравляем с регистрацией' description='Для продолжения регистрации перейдите по ссылке,<br> которая скоро прибудет вам на почту' button-text='На главную' button-to='/'/>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    if(to.name === "modal") {
      this.$store.commit(`modalAuth/open`)
    } else {
      next();
    }
  },
  layout: 'front',
  auth: false
}
</script>

<style lang='scss' scoped>
.sms {

}
</style>
