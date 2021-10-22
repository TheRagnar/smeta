<template>
  <div class='loader'>
    <v-progress-circular
      indeterminate
      color="primary"
    />
  </div>
</template>

<style lang='scss'>
.loader {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    stroke: #2091f9;
  }
}
</style>
