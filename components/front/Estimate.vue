<template>
  <section class='estimate'>
    <div class='container estimate__container'>
      <div class='estimate__content'>
        <h2 class='estimate__title'>Составить смету</h2>
        <p class='estimate__text'>начать составлять смету можно нажав на кнопку ниже приобрести тариф и приступить к составлению какой либо сметы</p>
        <div class='estimate__button'>
          <UiButton
            title='Начать создавать смету'
          />
        </div>
        <p class='estimate__proto'>Составь свою первую смету всего за <span>500 тенге</span></p>
      </div>
      <div class='estimate__image'><img src='~/assets/img/estimate-database.png' alt=''></div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.estimate {
  padding-top: 155px;
  padding-bottom: 155px;
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    max-width: 450px;
    margin-right: 50px;
  }
  &__title {
    margin-bottom: 10px;
  }
  &__button {
    margin-top: 24px;
    margin-bottom: 20px;
  }
  &__proto {
    color: #000;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    text-decoration: underline;
    span {
      font-weight: 700;
    }
  }
  &__image {
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:after {
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0;
      content: '';
      position: absolute;
      z-index: 2;
      background-color: rgba(0,0,0,.5);
      transition: all ease-in-out .15s;
      background-image: url("../../assets/img/view.png");
      background-position: center center;
      background-repeat: no-repeat;
    }
    &:hover {
      &:after {
        opacity: 1;
      }
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 1366px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
    &__container {
      flex-wrap: wrap;
      justify-content: center;
    }
    &__content {
      text-align: center;
      margin-bottom: 20px;
      margin-right: 0;
    }
  }
}
</style>
