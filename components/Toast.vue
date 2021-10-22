<template>
  <v-snackbar
    :value='$store.state.toast.isOpen'
  >
    {{ $store.state.toast.text }}

    <v-btn
      color='pink'
      text
      class='mrg'
      @click='$store.dispatch("toast/hideSnackbar")'
    >
      CLOSE
    </v-btn>
  </v-snackbar>
</template>
<style lang='scss' scoped>
.mrg {
  margin-left: 30px;
}
</style>
