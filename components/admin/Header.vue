<template>
  <header class='header'>
    <v-container class='content' fluid>
      <v-row align='end'>
        <v-col :md='type === "home" ? 3 : 9'>
          <div class='header__item'>
            <div class='header-top'>
              <nuxt-link :to='backTo' class='header-back' v-html='iconBack' v-if='type==="back"'></nuxt-link>
              <div class='header__title'>{{ title }}</div>
            </div>
          </div>
        </v-col>
        <v-col v-if='type === "home"' md='6'>
          <div class='header__item'>
            <div class='header__center'>
              <AdminHeaderSearch/>
            </div>
          </div>
        </v-col>
        <v-col md='3' class='header__user'>
          <div class='header__item'>
            <AdminHeaderUser/>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import iconBack from "~/assets/icons/eva_arrow-back-fill.svg?raw";
export default {
  props: {
    title: {
      type: String,
      default: "Заголовок",
    },
    type: {
      type: String,
      default: "home",
      validator(value) {
        return ["home", "back"].includes(value)
      }
    },
    backTo: {
      type: String,
    }
  },
  data() {
    return{
      iconBack,
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #DFE0EB;
  &-top {
    display: flex;
    align-items: center;
  }
  &-back {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
  }
  &__title {
    color: #252733;
    font-weight: 700;
    letter-spacing: 0.3px;
    font-size: 24px;
  }
  &__item {
    padding-top: 32px;
    padding-right: 10px;
    padding-bottom: 4px;
  }
  &__user {
    border-left: 1px solid #DFE0EB;
  }
}
</style>
