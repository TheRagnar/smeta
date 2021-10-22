<template>
  <section class='tariffs'>
    <div class='container'>
      <h2 class='tariffs__title'>Тарифы</h2>
      <div class='tariffs__tabs'>
        <FrontTabs/>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.tariffs {
  padding-top: 50px;
  padding-bottom: 110px;
  &__title {
    text-align: center;
    color: #252B42;
  }
  &__tabs {
    margin-top: 60px;
  }
  @media screen and (max-width: 1366px) {
    padding-top: 30px;
    padding-bottom: 50px;
    &__tabs {
      margin-top: 20px;
    }
  }
}
</style>
