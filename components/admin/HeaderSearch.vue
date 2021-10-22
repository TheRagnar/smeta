<template>
  <div class='header-search'>
<!--    <input type='text' class='header-search__input' placeholder='Введите название сметы для поиска'>-->
<!--    <button class='header-search__button'>-->
<!--      <Search/>-->
<!--    </button>-->
  </div>
</template>

<script>
import Search from '~/assets/icons/search.svg?inline';
export default {
  components: {Search}
}
</script>

<style lang='scss' scoped>
.header-search {
  position: relative;
  &__button {
    position: absolute;
    right: 15px;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    margin: 0;
  }
  &__input {
    display: block;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 32px;
    outline: none;
    padding-left: 12px;
    padding-right: 40px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.3px;
    color: #000;
    &::placeholder {
      color: #828282;
      font-weight: 300;
    }
  }
}
</style>
