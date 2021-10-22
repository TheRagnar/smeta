<template>
  <section class='about'>
    <div class='container about__container'>
      <div class='about__center'>
        <h3 class='about__tag'>О сервисе</h3>
        <h2 class='about__title'>SMETA.kz</h2>
        <p class='about__text'>это уникальный продукт, созданный в понятной форме<br> для расчета будущего планирования ремонтных затрат</p>
      </div>
      <div class='about__double'>
        <div class='about__tablet'>
          <img src='~/assets/img/about-tablet.png' alt=''>
        </div>
        <div class='about__numbers'>
          <div class='about-number'>
            <div class='about-number__top'>
              <div class='about-number__circle'>1</div>
              <h3 class='about-number__title'>Преимущество</h3>
            </div>
            <div class='about-number__text'>Вероятно какой то текст который сможет описать продукт с лучшей стороны</div>
          </div>
          <div class='about-number'>
            <div class='about-number__top'>
              <div class='about-number__circle'>2</div>
              <h3 class='about-number__title'>Преимущество</h3>
            </div>
            <div class='about-number__text'>Вероятно какой то текст который сможет описать продукт с лучшей стороны</div>
          </div>
          <div class='about-number'>
            <div class='about-number__top'>
              <div class='about-number__circle'>3</div>
              <h3 class='about-number__title'>Преимущество</h3>
            </div>
            <div class='about-number__text'>Вероятно какой то текст который сможет описать продукт с лучшей стороны</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.about {
  padding-top: 95px;
  padding-bottom: 85px;
  &__center {
    text-align: center;
  }
  &__tag {
    color: #2091f9;
    text-align: center;
  }
  &__title {
    text-align: center;
  }
  &__text {
    text-align: center;
  }
  &__double {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 80px;
  }
  &__numbers {
    margin-left: 64px;
  }
  &-number {
    &__text {
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      color: #737373;
    }
    &__circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 55px;
      height: 55px;
      margin-right: 20px;
      min-width: 55px;
      background-color: #2091f9;
      border-radius: 50%;
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    &__title {
      color: #252B42;
      text-transform: none;
    }
    &:not(:last-child) {
      margin-bottom: 47px;
    }
  }
  @media screen and (max-width: 1366px) {
    padding-top: 50px;
    padding-bottom: 50px;
    &__tablet {
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    &__numbers {
      margin-left: 40px;
      width: 340px;
    }
    &__double {
      margin-top: 40px;
    }
  }
  @media screen and (max-width: 1024px) {
    &__double {
      flex-wrap: wrap;
    }
    &__tablet {
      margin-bottom: 30px;
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    &__numbers {
      display: flex;
      width: calc(100% + 20px);
      margin-left: -10px;
      margin-right: -10px;
    }
    &-number {
      width: calc(100% / 3 - 20px);
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 0;
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 0;
      }
      &__top {
        flex-wrap: wrap;
      }
      &__circle {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
      }
      &__title {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 560px) {
    &__numbers {
      width: 100%;
      margin: 0;
      flex-wrap: wrap;
    }
    &-number {
      width: 100%;
      margin: 0;
    }
    &__numbers &-number {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
