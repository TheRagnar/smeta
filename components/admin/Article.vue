<template>
  <div class='article'>
    <div class='article__content'>
      <div class='article__title'>{{ title }}</div>
      <div class='article__content'>
        {{ content }}
      </div>
      <div class='article__control'>
        <nuxt-link class='article__link' to='to'>Читать подробнее <div class='article__bot' v-html='arrowBottomIcon'></div></nuxt-link>
      </div>
      <div class='article__date'>{{ date }}</div>
    </div>
    <nuxt-link to='to' class='article__arrow' v-html='arrowRightIcon'></nuxt-link>
  </div>
</template>
<script>
import arrowBottomIcon from '~/assets/icons/akar-icons_arrow-down.svg?raw';
import arrowRightIcon from '~/assets/icons/bi_arrow-down-circle.svg?raw';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      arrowBottomIcon,
      arrowRightIcon,
    }
  },
}
</script>

<style lang='scss'>
.article {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  padding-top: 20px;
  padding-left: 17px;
  padding-right: 50px;
  padding-bottom: 12px;
  overflow: hidden;
  position: relative;
  &__arrow {
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    bottom: 0;
    content: "";
    background-color: #2091f9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    color: #000;
    padding-bottom: 9px;
    margin-bottom: 6px;
    position: relative;
    &:after {
      left: 0;
      width: 71px;
      height: 3px;
      background-color: #2091f9;
      content: "";
      position: absolute;
      bottom: 0;
    }
  }
  &__content {
    font-size: 14px;
    line-height: 18px;
  }
  &__control {
    margin-top: 10px;
  }
  &__link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    line-height: 15px;
    text-decoration: none;
    color: #000;
    font-weight: 700;
    * {
      stroke: #000 !important;
    }
    &:hover {
      color: #2091f9;
      * {
        stroke: #2091f9 !important;
      }
    }
  }
  &__bot {
    margin-top: 3px;
    margin-left: 5px;
  }
  &__date {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    margin-top: 10px;
    color: #828282;
  }
}
</style>
