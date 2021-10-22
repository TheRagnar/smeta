<template>
  <ul class='menu'>
    <li v-if='windowWidth < 1366' class='menu__logo'>
      <UiLogo/>
    </li>
    <li class='menu__item'>
      <nuxt-link class='menu__link' to='/'>О сервисе</nuxt-link>
    </li>
    <li class='menu__item'>
      <nuxt-link class='menu__link' to='/'>Создать смету</nuxt-link>
    </li>
    <li class='menu__item'>
      <nuxt-link class='menu__link' to='/'>Тарифы</nuxt-link>
    </li>
    <li class='menu__item'>
      <nuxt-link class='menu__link' to='/'>Контакты</nuxt-link>
    </li>
  </ul>
</template>

<style lang='scss' scoped>
  .menu {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    &__item {
      margin-left: 15px;
    }
    &__link {
      color: #737373;
      font-weight: 600;
      text-decoration: none;
      position: relative;
      &:hover {
        color: #2091f9;
      }
      &:active {
        top: 1px;
        color: #1d73c3;
      }
    }
    @media screen and (max-width: 1366px) {
      flex-direction: column;
      align-items: stretch;
      &__item {
        margin: 0;
      }
      &__link {
        padding: 15px 30px;
        text-align: left;
        flex: 1;
        display: flex;
        color: #fff;
        font-weight: 400;
        font-size: 16px;
        position: relative;
        &:after {
          left: -1px;
          top: 0;
          bottom: 0;
          background-color: #DDE2FF;
          content: '';
          position: absolute;
          z-index: 2;
          opacity: 0;
          transition: background-color ease-in-out .15s;
          width: 3px;
        }
        &:hover {
          background-color: #343b66;
          color: #fff;
          &:after {
            opacity: 1;
          }
        }
      }
      &__logo {
        height: 111px;
        background-color: #fafafa;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 120px;
        }
      }
    }
    @media screen and (max-width: 580px) {
      &__logo {
        height: 80px;
        svg {
          width: 100px;
          height: auto;
        }
      }
    }
  }
</style>
