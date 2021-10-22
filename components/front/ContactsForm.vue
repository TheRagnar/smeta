<template>
  <form class='contactsForm'>
    <div class='contactsForm__title'>Задайте вопрос</div>
    <div class='contactsForm__input'>
      <FrontInput
        v-model='name'
        placeholder='Ваше имя'
      />
    </div>
    <div class='contactsForm__input'>
      <FrontInput
        v-model='email'
        placeholder='Ваш E-mail'
      />
    </div>
    <div class='contactsForm__input'>
      <FrontInput
        v-model='message'
        placeholder='Ваше сообщение'
        type='textarea'
      />
    </div>
    <div class='contactsForm__button'>
      <UiButton title='Отправить' size='small'/>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      message: null,
    }
  },
}
</script>

<style lang='scss' scoped>
.contactsForm {
  &__title {
    color: #252B42;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 30px;
  }
  &__input {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 560px) {
    &__input {
      margin-bottom: 20px;
    }
  }
}
</style>
