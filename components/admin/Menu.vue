<template>
  <ul class='amenu'>
    <li
      v-for='(item, index) in items'
      :key='index'
      class='amenu__item'
    >
      <nuxt-link
        class='amenu__link'
        :to='item.src'
      >
        <div class='amenu__icon' v-html='item.icon'/>
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang='scss'>
.amenu {
  margin: 0;
  padding: 0;
  display: block;
  &__item {
    margin: 0;
  }
  &__link {
    position: relative;
    display: flex;
    padding: 18px 20px 18px 30px;
    color: #A4A6B3;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
    * {
      fill: #9FA2B4 !important;
      opacity: 1 !important;
    }
    &:hover, &.nuxt-link-active {
      color: #fff;
      * {
        fill: #fff !important;
      }
    }
    &.nuxt-link-active {
      background-color: rgba(#9FA2B4, .08);
      &:after {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: #fff;
        content: '';
      }
    }
  }
  &__icon {
    margin-right: 24px;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
