<template>
  <div class='auth-button'>
    <div class='auth-button__item' v-if='!$auth.loggedIn'>
      <UiButton
        type='nuxt-link'
        to='/registration'
        title='Зарегистрироваться'
      />
    </div>
    <div class='auth-button__item' v-if='!$auth.loggedIn' @click='onClose'>
      <UiButton
        title='Войти'
        is-border
        type='nuxt-link'
        :to='{name: "modal"}'
        :styles='windowWidth < 1366 ? "width: 100%" : ""'
      />
    </div>
    <div class='auth-button__item' v-if='$auth.loggedIn' @click='onClose'>
      <UiButton
        title='В панель'
        type='nuxt-link'
        to='/estimates'
        :styles='windowWidth < 1366 ? "width: 100%" : ""'
      />
    </div>
    <div class='auth-button__item' v-if='$auth.loggedIn' @click='onClose'>
      <UiButton
        title='Выйти'
        is-border
        :on-click='logOut'
        :styles='windowWidth < 1366 ? "width: 100%" : ""'
      />
    </div>
  </div>
</template>

<script>
export default {
  props:['onClose'],
  methods: {
    logOut() {
      this.$auth.logout();
    },
    auth() {

    }
  }
}
</script>

<style lang='scss' scoped>
.auth-button {
  display: flex;
  align-items: center;
  &__item {
    margin-left: 15px;
    display: flex;
  }
  @media screen and (max-width: 1366px) {
    padding: 20px 30px;
    flex-wrap: wrap;
    &__item {
      width: 100%;
      margin: 5px 0;
    }
  }
}
</style>
