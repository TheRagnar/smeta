<template>
  <div class='select' data-app>
    <div v-if='label' class='select__label'>{{ label }}</div>
    <div :class='{"select__input--error": error}' class='select__input'>
      <v-select
        :items='items'
        :label='placeholder'
        :close-on-select="true"
        solo
        outlined
        :menu-props="{ bottom: true, offsetY: true }"
        :item-text='itemText'
        :item-value='itemValue'
        :value='value'
        @input='updateInput'
        hide-details
      />
    </div>
    <div class='select__error' v-if='error && error.length > 0'>{{ error[0] }}</div>
  </div>
</template>
<script>
export default {
  props: ['items', 'placeholder', 'label', 'itemText', 'itemValue', 'error', 'value'],
  methods: {
    updateInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>
<style lang='scss'>
.select {
  * {
    box-shadow: none !important;
  }
  fieldset {
    border: 2px solid #e8e8e8;
    border-radius: 10px;
  }
  .v-input__slot {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }
  .v-text-field--outlined.v-input--is-focused fieldset, .v-text-field--outlined.v-input--has-state fieldset {
    border-color: #2091f9;
  }
  .v-menu__content {
    border: 2px solid #e8e8e8;
    border-radius: 10px;
  }
  .v-text-field input {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #B0B0B0;
  }
  &__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #252B42;
    margin-bottom: 8px;
    display: block;
  }
  .v-icon.v-icon {
    color: transparent;
    background-image: url("../../assets/img/arr.png");
    background-position: center center;
  }
  &__error {
    font-size: 12px;
    color: #ff0000;
    margin-top: 4px;
  }
  &__input {
    &--error {
      fieldset {
        border-color: #ff0000;
      }
    }
  }
}
</style>
