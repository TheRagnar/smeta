<template>
  <div class='input'>
    <label v-if='label' class='input__label'>{{ label }}</label>
    <input
      class='input__input'
      :class='{"input__input--error": error}'
      :placeholder='placeholder'
      :disabled='disabled'
      :value='value'
      :type='type ? type : "text"'
      @input='updateInput'
      @keypress='$emit("keypress", $event.target.value)'
    >
    <div class='input__error' v-if='error && error.length > 0'>{{ error[0] }}</div>
  </div>
</template>
<script>
export default {
  props: ['label', 'placeholder', 'error', 'disabled', 'value', 'type'],
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    }
  },
}
</script>

<style lang='scss' scoped>
.input {
  flex: 1;
  &__input {
    flex: 1;
    width: 100%;
    height: 58px;
    background-color: transparent;
    border: 2px solid #e8e8e8;
    border-radius: 10px;
    padding-left: 25px;
    padding-right: 25px;
    color: #000;
    font-weight: 500;
    font-size: 16px;
    outline: none !important;
    &:disabled {
      color: #B0B0B0;
    }
    &--error {
      border-color: #ff0000;
    }
    &::placeholder {
      font-size: 15px;
      font-weight: 500;
      color: #B0B0B0;
      line-height: 16px;
    }
    &:not(:disabled):focus,
    &:not(:disabled):active,
    &:not(:disabled):focus-within {
      border-color: #2091F9;
    }
  }
  &__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #252B42;
    margin-bottom: 8px;
    display: block;
  }
  &__error {
    font-size: 12px;
    color: #ff0000;
    margin-top: 4px;
  }
}
</style>
