<template>
  <section class='contacts'>
    <div class='container contacts__container'>
      <h2 class='contacts__title'>Контакты</h2>
      <h4 class='contacts__text'>Свяжитесь с нами, если появилась такая необходимость</h4>
      <div class='contacts__row'>
        <div class='contacts__form'>
          <FrontContactsForm/>
        </div>
        <div class='contacts__icons'>
          <div class='contacts__box'>
            <div class='contacts__icon'>
              <PinIcon/>
            </div>
            <div class='contacts__name'>Адрес</div>
          </div>
          <div class='contacts__box'>
            <div class='contacts__icon'>
              <PhoneIcon/>
            </div>
            <div class='contacts__name'>Телефон</div>
          </div>
          <div class='contacts__box'>
            <div class='contacts__icon'>
              <MailIcon/>
            </div>
            <div class='contacts__name'>Телефон</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import PinIcon from "~/assets/icons/ant-design_mail-outlined1.svg?inline";
  import PhoneIcon from "~/assets/icons/ant-design_mail-outlined2.svg?inline";
  import MailIcon from "~/assets/icons/ant-design_mail-outlined3.svg?inline";

  export default {
    components: {
      PinIcon, PhoneIcon, MailIcon
    }
  }
</script>

<style lang='scss' scoped>
  .contacts {
    padding-top: 110px;
    padding-bottom: 160px;
    &__title {
      text-align: center;
      margin-bottom: 20px;
    }
    &__text {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      color: #737373;
      max-width: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    &__row {
      margin-top: 60px;
      padding-top: 50px;
      padding-bottom: 50px;
      display: flex;
      justify-content: center;
    }
    &__form {
      margin: 0 32.5px;
      box-shadow: 0px 8.49823px 12.4205px rgba(0, 0, 0, 0.07);
      border: 1px solid #ddd;
      background-color: #fff;
      border-radius: 13px;
      padding: 25px 40px;
      width: 400px;
      max-width: 100%;
    }
    &__icons {
      margin: 0 32.5px
    }
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
    }
    &__box {
      display: flex;
      align-items: center;
    }
    &__name {
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
      color: #252B42;
    }
    &__box {
      margin-bottom: 40px;
    }
    @media screen and (max-width: 1366px) {
      padding-top: 50px;
      padding-bottom: 50px;
      &__row {
        padding-top: 0;
      }
    }
    @media screen and (max-width: 768px) {
      &__row {
        flex-wrap: wrap;
        padding-bottom: 0;
      }
      &__icons {
        width: 100%;
        margin: 0;
        margin-top: 30px;
        display: flex;
        justify-content: center;
      }
      &__box {
        margin-bottom: 0;
        flex-wrap: wrap;
        width: calc(100% / 3);
      }
      &__icon {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
      }
      &__name {
        text-align: center;
        width: 100%;
      }
    }
    @media screen and (max-width: 560px) {
      padding-top: 20px;
      &__form {
        margin: 0;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }
      &__row {
        padding: 0;
        margin-top: 30px;
      }
      &__icons {
        flex-wrap: wrap;
      }
      &__box {
        width: 100%;
        padding-top: 30px;
        padding-bottom: 30px;
      }
      &__text {
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
</style>
