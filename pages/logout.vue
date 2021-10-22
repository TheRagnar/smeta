<template>
  <div class='pg'>
    <Loading/>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  mounted() {
    this.$auth.logout()
  }
}
</script>
