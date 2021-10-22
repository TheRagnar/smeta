<template>
  <div class='header-user' v-if='$auth.loggedIn'>
    <div class='header-user__title'>{{ $auth.user.username }}</div>
    <div class='header-user__avatar'>
      <img src='https://cs-site.ru/uploads/posts/2020-09/1600253903_35.jpg' alt=''>
    </div>
  </div>
</template>

<style lang='scss'>
.header-user {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__title {
    text-align: right;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
  &__avatar {
    border: 1.5px solid #DFE0EB;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5px;
    position: relative;
    min-width: 45px;
    margin-left: 20px;
    &:after {
      left: -1.5px;
      right: -1.5px;
      bottom: -1.5px;
      top: -1.5px;
      content: '';
      position: absolute;
      z-index: 3;
      border-radius: 50%;
      border: 3px solid #fff;
    }
    img {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
    }
  }
}
</style>
