<template>
  <nuxt-link class='estimate-list' :to='to'>
    <div class='estimate-list__icon'><DocIcon/></div>
    <div class='estimate-list__content'>
      <div class='estimate-list__title'>{{ title }}</div>
      <div class='estimate-list__date'>{{ date }}</div>
    </div>
  </nuxt-link>
</template>
<script>
import DocIcon from '~/assets/icons/teenyicons_cost-estimate-outline.svg?inline';

export default {
  components: {DocIcon},
  props: {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang='scss' scoped>
.estimate-list {
  display: flex;
  align-items: center;
  text-decoration: none;
  border-top: 1px solid #DFE0EB;
  margin-left: -32px;
  margin-right: -12px;
  padding-left: 32px;
  padding-right: 30px;
  padding-top: 7px;
  padding-bottom: 7px;
  &__icon {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    min-width: 20px;
    svg {
      width: 100% !important;
      height: 100% !important;
    }
  }
  &__title {
    font-size: 10px;
    font-weight: 400;
    color: #000;
    line-height: 13px;
  }
  &__date {
    font-weight: 700;
    color: #828282;
    font-size: 10px;
    line-height: 13px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
  &:hover &__title {
    color: #2F80ED;
  }
}
</style>

