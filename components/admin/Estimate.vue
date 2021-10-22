<template>
  <nuxt-link :to='to' class='estimate'>
    <div class='estimate__icon'><DocIcon/></div>
    <div class='estimate__content'>
      <div class='estimate__title'>{{ title }}</div>
      <div class='estimate__date'>{{ date }}</div>
    </div>
    <div class='estimate__link'><ArrowIcon/></div>
  </nuxt-link>
</template>
<script>
import DocIcon from '~/assets/icons/teenyicons_cost-estimate-outline.svg?inline';
import ArrowIcon from '~/assets/icons/bi_arrow-down-circle.svg?inline';

export default {
  components: {DocIcon, ArrowIcon},
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
.estimate {
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  position: relative;
  overflow: hidden;
  padding-top: 25px;
  padding-bottom: 29px;
  transition: box-shadow ease-in-out .15s;
  text-decoration: none;
  &:hover {
    box-shadow: none;
  }
  &__icon {
    width: 37px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 11px;
    min-width: 37px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &__content {
    flex: 1;
    padding-right: 40px;
  }
  &__link {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 30px;
    background-color: #2F80ED;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
  }
  &__title {
    font-size: 16px;
    font-weight: 700;
    color: #000;
    line-height: 20px;
    margin-bottom: 3px;
  }
  &__date {
    font-weight: 300;
    color: #828282;
    font-size: 12px;
    line-height: 15px;
  }
}
</style>

