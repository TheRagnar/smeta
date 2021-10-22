<template>
  <div class='sms'>
    <Loader v-if='isFetching' />
    <FrontPromo v-else title='E-mail успешно подтвержден'
                description='Теперь вы можете авторизоваться'
                button-text='Войти' :button-to='{name: "modal"}' />
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
  data() {
    return {
      isFetching: false,
      token: false,
      isSuccess: false
    }
  },
  mounted() {
    if (this.$route.params.uid && this.$route.params.token) {
      this.isFetching = true
      this.token = this.$route.params.slug
      try {
        this.$axios.post(`/api/auth/users/activation/`, {
          uid: this.$route.params.uid,
          token: this.$route.params.token
        })
        this.isSuccess = true
      } catch (error) {
        this.$router.push(`/`)
      } finally {
        this.isFetching = false
      }
    } else {
      this.$router.push(`/`)
    }
  },
  auth: false
}
</script>

<style lang='scss'>
.page {

}
</style>
