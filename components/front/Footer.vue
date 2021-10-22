<template>
  <footer class='footer'>
    <div class='container footer__container'>
      <div class='footer__navigation'>
        <div class='footer__row'>
          <div class='footer__title'>Страницы</div>
          <ul class='footer__menu'>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
          </ul>
        </div>
        <div class='footer__row'>
          <div class='footer__title'>Ссылки</div>
          <ul class='footer__menu'>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
          </ul>
        </div>
        <div class='footer__row'>
          <div class='footer__title'>Ссылки</div>
          <ul class='footer__menu'>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
            <li class='footer__item'><a href='' class='footer__link'>Навигация</a></li>
          </ul>
        </div>
      </div>
      <div class='footer__control'>
        <div class='footer__social'>
          <FrontSocial/>
        </div>
        <div class='footer__subscribe'>
          <FrontSubscribe/>
        </div>
      </div>
      <div class='footer__map'>
        <img src='~/assets/img/map.png' alt=''>
      </div>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
.footer {
  padding: 107px 0;
  color: #fff;
  background-color: #252B42;
  &__container {
    display: flex;
    flex-wrap: wrap;
    width: 1125px;
    justify-content: space-between;
  }
  &__map {
    width: 100%;
    margin-top: 24px;
    border-radius: 22px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  &__navigation {
    display: flex;
    width: 585px;
  }
  &__menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  &__title {
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  &__row {
    width: calc(100% / 3);
  }
  &__link {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    user-select: none;
    position: relative;
    &:hover {
      color: #2091F9;
    }
    &:active {
      top: 1px;
    }
  }
  &__item {
    margin-bottom: 18px;
  }
  &__control {
    width: 450px;
  }
  &__social {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1366px) {
    padding-top: 50px;
    padding-bottom: 50px;
    &__navigation {
      flex-wrap: wrap;
      margin-left: -15px;
      width: auto;
      margin-right: 30px;
    }
    &__row {
      width: auto;
      margin-left: 15px;
      margin-right: 15px;
    }
    &__control {
      width: 360px;
    }
    &__social {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    &__navigation {
      width: calc(100% + 20px);
      margin-left: -10px;
      margin-right: -10px;
    }
    &__row {
      width: calc(100% / 3 - 20px);
      margin-left: 10px;
      margin-right: 10px;
    }
    &__control {
      width: 100%;
    }
  }
  @media screen and (max-width: 560px) {
    &__row {
      width: 100%;
      margin: 0;
      margin-bottom: 15px;
    }
    &__navigation {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
