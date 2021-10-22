<template>
  <div class='subscribe'>
    <h3 class='subscribe__title'>Подпишись на нашу рассылку</h3>
    <p class='subscribe__text'>получайте только полезную информацию с нами</p>
    <div class='subscribe__input'>
      <input
        type='text'
        placeholder='Ваш Email'
        class='subscribe__field'
      >
    </div>
    <div class='subscribe__button'>
      <UiButton
        size='large'
        title='Подписаться'
      />
    </div>
  </div>
</template>

<style lang='scss' scoped>
  .subscribe {
    &__title {
      font-size: 24px;
      line-height: 36px;
      text-transform: none;
      margin-bottom: 5px;
    }
    &__text {
      font-weight: 500;
      color: #fff;
      font-size: 16px;
      line-height: 28px;
    }
    &__input {
      margin-top: 24px;
    }
    &__field {
      padding-left: 25px;
      padding-right: 25px;
      height: 62px;
      border: 2px solid #E8E8E8;
      border-radius: 10px;
      width: 100%;
      outline: none;
      &::placeholder {
        font-size: 14px;
        font-weight: 500;
        color: #B0B0B0;
      }
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }
    &__button {
      margin-top: 12px;
      display: flex;
    }
    @media screen and (max-width: 1366px) {
      &__title {
        font-size: 20px;
        line-height: 26px;
      }
      &__text {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
</style>
