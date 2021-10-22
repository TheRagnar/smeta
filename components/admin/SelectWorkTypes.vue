<template>
  <div class='wtps'>
    <div class='wtps__label'>Выберите тип работ:</div>
    <div class='wtps__field'>
      <input
        type='text'
        class='wtps__input'
        placeholder='Поле ввода для поиска'
        v-model='searchStr'
      />
    </div>
    <div class='wtps__list'>
      <div class='wtps-add' @click='$store.commit("mwa/open")'>
        <div class='wtps-add__text'>Добавить тип работ</div>
        <div class='wtps-add__icon' v-html='iconPlusLine'></div>
      </div>
      <div class='wtps-rw' v-for='row in rows' :key='row.id'>
        <div @click='onPressRow(row)'
             class='wtps-row'
             :class='{
                "wtps-row--folder": row.is_folder,
                "wtps-row--active": row.is_folder ? openFolderIds.includes(row.id) : selectItem === row.id,
                "wtps-row--select": selectParent === row.id,
              }'
             v-if='isExactMatch ? !row.is_folder : true'
        >
          <div class='wtps-row__title' v-if='row.is_folder'>
            {{ row.name }}
          </div>
          <div class='wtps-row__text' v-else>
            {{ row.name }}
          </div>
          <div class='wtps-row__control' v-if='row.is_folder'>
            <div class='wtps-row__icon wtps-row__icon-plus' v-html='iconDelete'
                 v-if='openFolderIds.includes(row.id)'></div>
            <div class='wtps-row__icon wtps-row__icon-plus' v-html='iconPlus'
                 v-else></div>
          </div>
          <div class='wtps-row__control' v-else>
            <div @click='onPressItem(row)' class='wtps-row__icon wtps-row__icon-more' v-html='iconMore'></div>
          </div>
        </div>
        <div class='wtps-items' v-if='row.items'>
          <div v-for='it in row.items'
               :key='`it${it.id}`'
               class='wtps-row'
               :class='{"wtps-row--active": selectItem === it.id,}'
               @click='onPressRow(it)'
          >
            <div class='wtps-row__text'>
              {{ it.name }}
            </div>
            <div class='wtps-row__control'>
              <div @click='onPressItem(it)' class='wtps-row__icon wtps-row__icon-more' v-html='iconMore'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import iconPlus from '~/assets/icons/plus.svg?raw'
import iconDelete from '~/assets/icons/delete.svg?raw'
import iconMore from '~/assets/icons/more.svg?raw'
import iconPlusLine from '~/assets/icons/plus2.svg?raw'

export default {
  props: ['label', 'items', 'city'],
  data() {
    return {
      iconPlus,
      iconDelete,
      iconMore,
      iconPlusLine,
      searchStr: '',
      totalSearchStr: '',
      openFolderIds: [],
      selectItem: null,
      selectParent: null,
      itemsSearch: [],
      child: []
    }
  },
  computed: {
    rows() {
      if (this.searchStr.length > 2) {
        return this.itemsSearch
      } else {
        return this.items.map(item => {
          return {
            ...item,
            items: this.child.find(i => i.parent === item.id)?.items
          }
        })
      }
    },
    isExactMatch() {
      return this.rows.filter(item => !item.is_folder).length === 1
    }
  },
  watch: {
    searchStr(newStr, oldStr) {
      if (newStr.length > 3) {
        this.debouncedGetAnswer()
      }
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.search, 300)
  },
  methods: {
    onPressItem(row) {
      const rate = row.rates.find(item => item.city.id === this.city)
      this.$store.commit('mwaw/open', {
        source_work_type: row.id,
        name: row.name,
        unit: row.unit,
        rate,
        quantity: '',
        is_brigade: false
      })
    },
    async onPressFolder(id) {
      if (this.openFolderIds.includes(id)) {
        this.child = this.child.filter(item => item.parent !== id)
        this.openFolderIds = this.openFolderIds.filter(item => item !== id)
      } else {
        try {
          this.openFolderIds = [...this.openFolderIds, id]
          const response = await this.$axios.get(`/api/catalogs/work-types/?limit=100000&parent=${id}&rates_city=${this.city}`)
          this.child = [...this.child, {
            parent: id,
            items: response.data.results
          }]
        } catch (e) {
          console.log(e)
        }
      }
    },
    onPressRow(row) {
      if ([...event.target.parentNode.classList].includes('wtps-row__icon')) return
      if (row.is_folder) {
        this.onPressFolder(row.id)
        return
      }
      if (this.selectItem === row.id) {
        this.selectItem = null
        this.selectParent = null
        return
      }
      this.selectItem = row.id
      this.selectParent = row.parent.id
      this.onPressItem(row)
    },
    search() {
      this.$axios.get(`/api/catalogs/work-types/?limit=100000&search=${this.searchStr}&rates_city=${this.city}`)
        .then(res => {
          this.itemsSearch = res.data.results
          let openFolderIds = []
          res.data.results.forEach((item) => {
            if (item.is_folder) openFolderIds.push(item.id)
          })
          this.openFolderIds = openFolderIds
        }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang='scss'>
.wtps {
  &-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #6FCF97;
    fill: #fff;
    color: #fff;
    font-size: 16px;
    line-height: 24px;
    padding-right: 54px;
    cursor: pointer;
    user-select: none;
  }

  &__list {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding-top: 15px;
    margin-top: -15px;
    height: 600px;
    overflow-y: scroll;
  }

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
    user-select: none;
    outline: none !important;
    background-color: #fff;
    position: relative;
    z-index: 3;

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

  &-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 50px;
    padding-top: 8px;
    padding-bottom: 8px;
    user-select: none;
    cursor: pointer;
    position: relative;

    &--select &__title {
      color: #666666;
      font-weight: 700;
    }

    &:after {
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      z-index: 2;
      position: absolute;
      content: "";
      background-color: #CCCCCC;
    }

    &--folder {
      padding-top: 16px;
      padding-bottom: 16px;
    }

    &--active {
      background-color: #2F80ED;

      &:after {
        display: none;
      }
    }

    &--active &__title,
    &--active &__text {
      color: #fff;
    }

    &__icon {
      cursor: pointer;

      &-plus {
        fill: transparent;
        stroke: #2091f9;
      }

      &-more {
        fill: #2091f9;
      }
    }

    &--active &__icon {
      &-plus {
        fill: transparent;
        stroke: #fff;
      }

      &-more {
        fill: #fff;
      }
    }

    &__control,
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__control {
      margin-left: 25px;
    }

    &__title {
      font-size: 16px;
      line-height: 24px;
      color: #666666;
      text-transform: uppercase;
    }

    &__text {
      font-size: 16px;
      line-height: 24px;
      color: #666666;
    }
  }
}
</style>
