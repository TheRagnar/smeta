<template>
  <div class='error'>
    <FrontPromo
      :title='error.statusCode === 404 ? "Ошибка 404" : "Ошибка"'
      description='Произошла ошибка' button-text='На главную'
      button-to='/'
    />
  </div>
</template>

<script>
export default {
  layout: "front",
  props: {
    error: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: {statusCode: 404}
    },
  },
}
</script>
