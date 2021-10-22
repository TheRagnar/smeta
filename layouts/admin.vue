<template>
  <div class='page'>
    <div class='page__left-side'>
      <AdminLeftSide/>
    </div>
    <div class='page__content'>
      <Nuxt/>
    </div>
    <Toast/>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'page-body'
    },
    htmlAttrs: {
      class: 'page-body'
    }
  }
}
</script>


<style lang='scss'>
.page {
  overflow: hidden;
  height: 100vh;
  background-color: #F7F8FC;
  display: flex;
  &__left-side {
    width: 255px;
    min-width: 255px;
    display: flex;
    overflow: auto;
    background-color: #363740;
  }
  &__content {
    flex: 1;
    display: flex;
    overflow: auto;
  }
  &-content {
    padding-left: 20px;
    padding-right: 20px;
    flex: 1;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  &-body {
    overflow: hidden;
  }
}
</style>

