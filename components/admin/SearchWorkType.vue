<template>
  <div class='admin-wrk-search'>
    <div class='admin-wrk-search__input'>
      <input type='text' v-model='searchStr' placeholder='Введите вид работ' class='admin-wrk-search__field'>
      <div v-if='isFetching' class='admin-wrk-search__icon' @click='search'>
        <Loader/>
      </div>
      <div v-else class='admin-wrk-search__icon' @click='search'  v-html='iconSearch'></div>
      <div class='autocomplete' v-if='isOpen' v-click-outside='externalClick'>
        <div v-for='item in items' :key='item.id' class='autocomplete__item' @click='onPress(item)'>{{item.name}}</div>
        <div class='autocomplete__clear' v-if='items.length <= 0'>
          Не найдено
        </div>
      </div>
    </div>
    <div class='admin-wrk-search__buttons'>
      <div class='admin-wrk-search__btn'>Условные обозначения</div>
      <div class='admin-wrk-search__btn'>Как пользоваться ЕНиР</div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside';
import iconSearch from "~/assets/icons/search.svg?raw";
import _ from 'lodash'
export default {
  props: ['onSelect'],
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      iconSearch,
      isFetching: false,
      searchStr: '',
      items: [],
      isOpen: false,
    }
  },
  watch: {
    searchStr(newStr, oldStr) {
      // console.log(newStr.length - oldStr.length)
      if(newStr.length > 3 && (newStr.length - oldStr.length) <= 1) {
        this.debouncedGetAnswer();
      }
    },
  },
  created () {
    this.debouncedGetAnswer = _.debounce(this.search, 500)
  },
  methods: {
    externalClick (event) {
      this.isOpen = false;
      this.items = [];
    },
    onPress(item) {
      this.isOpen = false;
      this.searchStr = item.name;
      if(this.onSelect) {
        this.onSelect(item.is_folder ? item.id : item.parent?.id, true);
      }
    },
    search() {
      this.isOpen = false;
      this.isFetching = true;
      this.$axios.get(`/api/catalogs/work-types/?limit=100000&search=${this.searchStr}`)
        .then(res => {
          this.isFetching = false;
          this.isOpen = true;
          this.items = res.data.results;
        }).catch(error => {
        this.isFetching = false;
        console.log(error)
      })
    }
  }
}
</script>

<style lang='scss'>
.admin-wrk-search__icon {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg,
  .loader{
    width: 16px !important;
    height: 16px !important;
  }
}
.autocomplete {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 800px;
  z-index: 30;
  background: #FFFFFF;
  height: 220px;
  overflow-y: scroll;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  &__clear {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 220px;
    color: #737373;
    text-align: center;
  }
  &__item {
    padding: 4px 15px;
    font-size: 10px;
    line-height: 24px;
    cursor: pointer;
    &:hover {
      color: #fff;
      background-color: #2F80ED;
    }
  }
}
</style>
