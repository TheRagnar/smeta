<template>
  <div class='tabs'>
    <div class='tabs__head'>
      <div
        class='tabs__button'
        :class='{"tabs__button--active": isMount}'
        @click='toggleTab'
      >Помесячная оплата</div>
      <div
        class='tabs__button'
        :class='{"tabs__button--active": !isMount}'
        @click='toggleTab'
      >Годовая оплата (скидка 10%)</div>
    </div>
    <div class='tabs__content'>
      <div v-if='windowWidth > 1366' class='tabs__item'>
        <div
          v-for='item in rows'
          :key='item.id'
          class='tabs__row'
          :class='{"tabs__row--active": activeIndex === item.id}'
          @click='onPressRow(item.id)'
        >
          <h3 class='tabs__title'>{{ item.title }}</h3>
          <p class='tabs__text'>{{ item.text }}</p>
          <div class='tabs__price'>
            <div class='tabs__number'>{{ isMount ? item.pricePerMount : item.pricePerYear }}</div>
            <div class='tabs__info'>
              <div class='tabs__currency'>{{ item.currency }}</div>
              <div class='tabs__mount'>{{ isMount ? item.inMount : item.inYear }}</div>
            </div>
          </div>
          <div class='tabs__checkboxs'>
            <div
              v-for='(checkbox, index) in item.list'
              :key='index'
              class='tabs__checkbox'
            >
              <div class='tabs__circle' :class='{"tabs__circle--checked": checkbox.isChecked}'></div>
              {{ checkbox.name }}
            </div>
          </div>
          <div class='tabs__control'>
            <UiButton
              size='large'
              title='Купить тариф'
              :color='activeIndex === item.id ? "white" : "secondary"'
            />
          </div>
        </div>
      </div>

      <div v-else class='tabs__item'>
        <swiper
          ref='mySwiper'
          :options="swiperOption"
          @slideChange='onChangeSlide'
          @init='onChangeSlide'
        >
          <swiper-slide
            v-for='item in rows'
            :key='item.id'
          >
            <div
              class='tabs__row'
              :class='{"tabs__row--active": activeIndex === item.id}'
              @click='onPressRow(item.id)'
            >
              <h3 class='tabs__title'>{{ item.title }}</h3>
              <p class='tabs__text'>{{ item.text }}</p>
              <div class='tabs__price'>
                <div class='tabs__number'>{{ isMount ? item.pricePerMount : item.pricePerYear }}</div>
                <div class='tabs__info'>
                  <div class='tabs__currency'>{{ item.currency }}</div>
                  <div class='tabs__mount'>{{ isMount ? item.inMount : item.inYear }}</div>
                </div>
              </div>
              <div class='tabs__checkboxs'>
                <div
                  v-for='(checkbox, index) in item.list'
                  :key='index'
                  class='tabs__checkbox'
                >
                  <div class='tabs__circle' :class='{"tabs__circle--checked": checkbox.isChecked}'></div>
                  {{ checkbox.name }}
                </div>
              </div>
              <div class='tabs__control'>
                <UiButton
                  size='large'
                  title='Купить тариф'
                  :color='activeIndex === item.id ? "white" : "secondary"'
                />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive  } from 'vue-awesome-swiper'

import 'swiper/css/swiper.min.css'

export default {
  components: {
    Swiper, SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
          860: {
            slidesPerView: 2,
          }
        },
      },
      rows: [
        {
          id: 0,
          title: "Базовый",
          text: "краткое описание тарифа и его выгодность",
          pricePerMount: "500",
          pricePerYear: "5 000",
          currency: "₸",
          inMount: "в месяц",
          inYear: "в год",
          list: [
            { id: 0, isChecked: true, name: "Что то там включено", },
            { id: 1, isChecked: true, name: "Что то там включено", },
            { id: 2, isChecked: true, name: "Что то там включено", },
            { id: 3, isChecked: false, name: "Что то там не включено", },
            { id: 4, isChecked: false, name: "Что то там не включено", },
          ]
        },
        {
          id: 1,
          title: "Стандартный",
          text: "краткое описание тарифа и его выгодность",
          pricePerMount: "2 000",
          pricePerYear: "30 000",
          currency: "₸",
          inMount: "в месяц",
          inYear: "в год",
          list: [
            { id: 0, isChecked: true, name: "Что то там включено", },
            { id: 1, isChecked: true, name: "Что то там включено", },
            { id: 2, isChecked: true, name: "Что то там включено", },
            { id: 3, isChecked: true, name: "Что то там включено", },
            { id: 4, isChecked: false, name: "Что то там не включено", },
          ]
        },
        {
          id: 2,
          title: "Бизнес",
          text: "краткое описание тарифа и его выгодность",
          pricePerMount: "15 000",
          pricePerYear: "99 000",
          currency: "₸",
          inMount: "в месяц",
          inYear: "в год",
          list: [
            { id: 0, isChecked: true, name: "Что то там включено", },
            { id: 1, isChecked: true, name: "Что то там включено", },
            { id: 2, isChecked: true, name: "Что то там включено", },
            { id: 3, isChecked: true, name: "Что то там включено", },
            { id: 4, isChecked: true, name: "Что то там включено", },
          ]
        }
      ],
      isMount: true,
      activeIndex: 1,
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    onPressRow(index) {
      this.activeIndex = index;
    },
    toggleTab() {
      this.isMount = !this.isMount;
    },
    onChangeSlide() {
      this.activeIndex = this.swiper.realIndex;
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs {
  &__head {
    display: flex;
    justify-content: center;
  }
  &__button {
    padding: 10px 28px;
    border: 2px solid #e9e9e9;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: #d1d1d1;
    cursor: pointer;
    background-color: #EEEEEE;
    user-select: none;
    &--active {
      background-color: transparent;
      color: #2091f9;
    }
  }
  &__item {
    padding-top: 60px;
    display: flex;
    margin: 0 -25px;
  }
  &__row {
    width: calc(100% / 3 - 50px);
    margin: 0 25px;
    border: 1px solid #2091F9;
    padding: 40px 50px;
    padding-top: 70px;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    transition: background-color ease-in-out .15s, box-shadow ease-in-out .15s;
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
    &:after {
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      content: '';
      position: absolute;
      border-radius: 10px;
      border: 3px solid #2091f9;
      opacity: 0;
      transition: opacity ease-in-out .15s;
      pointer-events: none;
    }
    &:hover:after {
      opacity: 1;
    }
    &:hover {
      box-shadow: none;
    }
    &--active {
      background-color: #2091f9;
    }
  }
  &__title {
    text-transform: none;
    text-align: center;
    margin-bottom: 16px;
  }
  &__text {
    font-weight: 600;
    text-align: center;
    color: #737373;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 28px;
    min-height: 84px;
  }
  &__price {
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 42px;
  }
  &__number {
    color: #2091f9;
    font-size: 50px;
    font-weight: 700;
    margin-right: 10px;
    text-overflow: clip;
    white-space: nowrap;
  }
  &__currency {
    color: #2091f9;
    font-size: 24px;
    font-weight: 700;
  }
  &__mount {
    color: #8EC2F2;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
  &__checkboxs {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  &__circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(#737373, .3);
    margin-right: 20px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABbSURBVHgBrZDRCcAgDERvlI7QjdpN2k0cyREcwRFihEP80xw+yIec7yABRMzs9ylQoNz5EOW87I9LlhlUnyTJDF+GKSyvSkIHY8lYx5Rr++ebJZnygyhTyZbcAJPqpyia5fR3AAAAAElFTkSuQmCC');
    background-position: center center;
    background-repeat: no-repeat;
    &--checked {
      background-color: #2DC071;
    }
  }
  &__checkbox {
    display: flex;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: 27px;
    }
  }
  &__row--active * {
    color: #fff;
  }
  &__row--active &__circle {
    opacity: .3;
    background-color: #fff;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBnZDbCYQwEEWvA7vbRkqwI9OBbAW6FSzagFqJJdhCOvBHEP0wji9Q8ZVcGAZCzmFmHFhGRE3IzSNYZIYDrhSmGWAuzRXANIew+NfCGuYQiAoRt8kdjGnnUPmf31bQdV9oLc8kV/B6DTmOt5MYHWyWlIvkKexsJZULeuX8rADtcpfKf2cwySAZJ4la78n/HrIKWhtQ6OTkAAAAAElFTkSuQmCC');
  }
  &__row--active &__circle--checked {
    opacity: 1;
  }
  &__control {
    display: flex;
    padding-top: 42px;
  }
  @media screen and (max-width: 1366px) {
    &__item {
      display: block;
      margin: 0;
    }
    &__row {
      width: 100%;
      margin: 0;
    }
  }
  @media screen and (max-width: 768px) {
    &__button {
      font-size: 14px;
      line-height: 19px;
      padding: 8px 20px;
    }
    &__item {
      padding-top: 30px;
    }
  }
  @media screen and (max-width: 600px) {
    &__head {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 480px) {
    &__row {
      padding: 30px 20px;
    }
    &__price {
      margin-top: 35px;
      margin-bottom: 20px;
    }
    &__number {
      font-size: 40px;
    }
    &__currency {
      font-size: 18px;
      line-height: 1;
    }
    &__mount {
      font-size: 12px;
      line-height: 1;
    }
    &__text {
      font-size: 16px;
      line-height: 1.2;
      min-height: 0;
    }
  }
}
</style>
