<template>
  <section class='promo'>
    <div class='promo__image promo__woman'><img src='~/assets/img/promo-woman.png' alt=''></div>
    <div class='promo__image promo__man'><img src='~/assets/img/promo-man.png' alt=''></div>
    <div class='container promo__container'>
      <h1 class='promo__title' v-html='title'/>
      <h4 class='promo__description' v-html='description'/>
      <div class='promo__button'>
        <UiButton
          :title='buttonText'
          type='nuxt-link'
          :to='buttonTo'
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'description', 'buttonText', 'buttonTo']
}
</script>

<style lang='scss' scoped>
.promo {
  background-image: url("../../assets/img/promo-bg.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-top: 120px;
  padding-bottom: 186px;
  overflow: hidden;
  &__container {
    position: relative;
    z-index: 2;
  }
  &__image {
    position: absolute;
    bottom: 0;
    z-index: 1;
    img {
      display: block;
    }
  }
  &__woman {
    left: 0;
  }
  &__man {
    right: 0;
  }
  &__title {
    color: #252b42;
    text-align: center;
    margin-bottom: 15px;
  }
  &__description {
    color: #737373;
    text-align: center;
  }
  &__button {
    margin-top: 24px;
    justify-content: center;
    display: flex;
  }
  @media screen and (max-width: 1366px) {
    margin-top: 111px;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 50px;
    &__image {
      transform: scale(.4);
      transform-origin: bottom left;
    }
    &__man {
      transform-origin: bottom right;
    }
    &__title {
      font-size: 30px;
      line-height: 38px;
    }
  }
  @media screen and (max-width: 580px) {
    margin-top: 80px;
    &__image {
      display: none;
    }
  }
}
</style>
