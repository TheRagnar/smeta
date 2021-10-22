<template>
  <div>
    <header v-if='windowWidth < 1366' class='header' :class='{"header--active": isOpen}' v-click-outside='externalClick'>
      <div class='container header__container'>
        <nuxt-link to='/' class='header__logo'>
          <UiLogo />
        </nuxt-link>
        <div class='header__button' @click='toggleMobileMenu'>
          <div class='header__line'></div>
          <div class='header__line'></div>
          <div class='header__line'></div>
        </div>
      </div>
      <div class='header__menu'>
        <div class='header__top'>
          <FrontMenu/>
        </div>
        <div class='header__bottom'>
          <FrontAuthButton/>
        </div>
      </div>
    </header>
    <header v-else class='header' >
      <div class='container header__container'>
        <nuxt-link to='/' class='header__logo'>
          <UiLogo />
        </nuxt-link>
        <div class='header__navigation'>
          <div class='header__menu'>
            <FrontMenu />
          </div>
          <div class='header__auth-button'>
            <FrontAuthButton :on-close="close" />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isOpen = !this.isOpen;
    },
    externalClick (event) {
      this.isOpen = false;
    },
    close() {
      console.log(1111)
      this.isOpen = false;
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  padding-top: 18px;
  padding-bottom: 45px;

  &__logo {
    display: flex;
    align-items: center;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__menu {
    margin-left: 30px;
  }

  &__auth-button {
    margin-left: 30px;
  }
  @media screen and (max-width: 1366px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 20;
    background-color: #fff;
    box-shadow: 0px 8.49823px 12.4205px rgba(0, 0, 0, 0.07);
    transition: left ease-in-out .15s, right ease-in-out .15s;
    &__logo {
      width: 120px;
      height: auto;
    }
    &__button {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      width: 60px;
      height: 60px;
      position: relative;
      padding: 10px;
      cursor: pointer;
    }
    &__line {
      height: 4px;
      background-color: #252B42;
      width: 100%;
    }
    &__menu {
      width: 300px;
      position: fixed;
      right: -301px;
      top: 0;
      bottom: 0;
      background-color: #252B42;
      color: #fff;
      display: flex;
      justify-content: space-between;
      transition: right ease-in-out .15s;
      border-left: 1px solid #252B42;
      flex-direction: column;
    }
    &--active {
      left: -300px;
      right: 300px;
      background-color: #fff;
      &:after {
        top: 111px;
        left: 0;
        right: 0;
        bottom: 0;
        content: "";
        position: fixed;
        background-color: #151515;
        z-index: -1;
        opacity: .4;
        pointer-events: none;
      }
    }
    &--active &__menu {
      right: 0;
    }
  }
  @media screen and (max-width: 580px) {
    &:after {
      top: 80px;
    }
    &__logo {
      width: 100px;
      svg {
        height: auto;
      }
    }
    &__menu {
      width: 220px;
    }
    &--active {
      left: -220px;
      right: 220px;
    }
  }
}
</style>

