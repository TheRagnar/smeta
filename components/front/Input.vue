<template>
  <div class='input'>
    <textarea
      v-if='type == "textarea"'
      :placeholder='placeholder'
      :value='value'
      class='input__field'
      @input='updateValue($event.target.value)'
    ></textarea>
    <input
      v-else
      :placeholder='placeholder'
      type='text'
      :value='value'
      class='input__field'
      @input='updateValue($event.target.value)'
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "input",
      validator(value) {
        return ["input", "textarea"].includes(value)
      }
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
    value: {
      type: String,
      default: null,
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  }
}
</script>

<style lang='scss' scoped>
.input {
  &__field {
    background: #F5F5F5;
    border: 1px solid #E8E8E8;
    border-radius: 7px;
    width: 100%;
    height: 36px;
    padding-left: 15px;
    padding-right: 15px;
    resize: none;
    outline: none;
    color: #252B42;
    font-weight: 500;
    font-size: 14px;
    &::placeholder {
      color: #B0B0B0;
      font-weight: 500;
      font-size: 10px;
    }
  }
  textarea {
    height: 142px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  textarea.input__field {

    &::placeholder {
      font-size: 15px;
    }
  }
}
</style>

