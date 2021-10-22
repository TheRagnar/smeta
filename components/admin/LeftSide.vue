<template>
  <div class='left-side'>
    <div class='left-side__logo'>
      <router-link to='/estimates' class='left-side__logo-link'>
        <Logo/>
      </router-link>
    </div>
    <div class='left-side__content'>
      <div class='left-side__item'>
        <AdminMenu :items='menu1'/>
      </div>
      <div class='left-side__item'>
        <AdminMenu :items='menu2'/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/img/logo.svg?inline";

export default {
  components: {Logo},
  data() {
    return {
      menu1: [
        {src: "/estimates", title: "Готовые сметы", icon: require(`~/assets/icons/overview.svg?raw`)},
        {src: "/enir", title: "ЕНиР", icon: require(`~/assets/icons/tickets.svg?raw`)},
        {src: "/articles", title: "Статьи", icon: require(`~/assets/icons/articles.svg?raw`)},
      ],
      menu2: [
        {src: "/settings", title: "Настройки", icon: require(`~/assets/icons/settings.svg?raw`)},
        {src: "/subscribe", title: "Подписка", icon: require(`~/assets/icons/subscription.svg?raw`)},
        {src: "/logout", title: "Выйти", icon: require(`~/assets/icons/logout.svg?raw`)},
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.left-side {
  background-color: #363740;
  flex: 1;
  padding-top: 15px;
  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    &-link {
      display: block;
      svg {
        display: block;
      }
    }
  }
  &__item {
    margin-bottom: 35px;
    &:last-child {
      border-bottom: 1px solid rgba(#DFE0EB, .06);
    }
  }
}
</style>


