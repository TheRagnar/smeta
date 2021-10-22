<template>
  <div class='front'>
    <FrontPromo title='Разработка <br/>строительной сметы' description='Составить смету для ремонта онлайн' button-text='Подробнее' button-to='/'/>
    <FrontAbout/>
    <FrontEstimate/>
    <FrontTariffs/>
    <FrontContacts/>
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
  mounted() {
    if(this.$route.params.modal === "true") {
      this.$store.commit(`modalAuth/open`)
    }
  },
  auth: false,
  layout: 'front',
}
</script>

<style lang='scss'>
.front {
  position: relative;
}
</style>
