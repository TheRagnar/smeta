<template>
  <div class='admin page-wrapper'>
    <AdminHeader title='ЕНиР' type='back' back-to='/estimates' />
    <div class='page-content admin-content'>
      <v-container fluid class='admin__container admin__flex'>
        <v-row class='admin__container'>
          <v-col md='9' class='admin__container'>
            <div class='admin__header'>
              <div class='admin__title'>Единые нормы и расценки на строительные, монтажные и ремонтно-строительные
                работы
              </div>
            </div>
            <div class='admin-wrk'>
              <AdminSearchWorkType :on-select='onPressParent' />
              <div class='admin-wrk__scroll'>
                <div class='admin-wrk-content'>
                  <div class='admin-wrk-content__item'>
                    <div class='admin-wrk-content__title'>Содержание</div>
                  </div>
                  <div v-for='folder in folders' :key='folder.id' class='admin-wrk-content__item' @click='onPressParent(folder.id)'>
                    <div class='admin-wrk-content__name'>{{ folder.name }}</div>
                    <div class='admin-wrk-content__icon admin-wrk-content__icon--delete' v-html='iconDelete'
                         v-if='selectItem === folder.id'></div>
                    <div class='admin-wrk-content__icon' v-html='iconPlus'
                         v-else></div>
                  </div>
                </div>
              </div>

              <div class='admin-wrk-table' v-if='selectItem'>
                <table class='admin-wrk-table__table'>
                  <thead>
                  <tr>
                    <th :colspan='cities.length*2 + 2'>{{ getItem.name }}</th>
                  </tr>
                  <tr>
                    <td rowspan='2'>№</td>
                    <td rowspan='2'>ЕД</td>
                    <td colspan='2' v-for='city in cities' :key='`cityx${city.id}`'>{{ city.repr }}</td>
                  </tr>
                  <tr>
                    <template v-for='(city, index) in cities'>
                      <td :key='`city${city.id}`'>Бригада</td>
                      <td :key='`cityz${city.id}`'>Фирма</td>
                    </template>
                  </tr>
                  </thead>
                  <tbody>
                  <template v-for='(item, index) in items'>
                    <tr :key='`item${item.id}`' :class='{"admin-wrk-table__gray": index % 2 == 0}'>
                      <td rowspan='2' class='admin-wrk-table__center'>{{ index + 1 }}</td>
                      <td rowspan='2' class='admin-wrk-table__center'>{{ item.unit }}</td>
                      <td :colspan='cities.length*2' class='admin-wrk-table__center admin-wrk-table__bld'>
                        {{ item.name }}
                      </td>
                    </tr>
                    <tr :key='`itemx${item.id}`' :class='{"admin-wrk-table__gray": index % 2 == 0}'>
                      <template v-for='city in cities'>
                        <td :key='`ct${city.id}`'>{{ rateGen(true, item, city.id) }}</td>
                        <td :key='`ctx${city.id}`'>{{ rateGen(false, item, city.id) }}</td>
                      </template>
                    </tr>
                  </template>
                  </tbody>
                </table>
              </div>
            </div>
          </v-col>
          <AdminRightSidebar />
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import iconPlus from '~/assets/icons/plus.svg?raw'
import iconDelete from '~/assets/icons/circle_delete.svg?raw'

export default {
  layout: 'admin',
  data() {
    return {
      iconPlus,
      iconDelete,
      selectItem: null,
      items: []
    }
  },
  computed: {
    folders() {
      return this.workTypes.filter(item => item.is_folder)
    },
    getItems() {
      return this.workTypes.filter(item => item.parent?.id === this.selectItem)
    },
    getItem() {
      return this.workTypes.find(item => item.id === this.selectItem)
    }
  },
  methods: {
    rateGen(isBrigade, item, cityId) {
      const findRate = item.rates.find(i => i.city.id === cityId)
      if (isBrigade) {
        return +findRate.max_brigade_rate ? `${findRate.max_brigade_rate} ₸` : `от ${findRate.min_brigade_rate} ₸`
      } else {
        return +findRate.max_company_rate ? `${findRate.max_company_rate} ₸` : `от ${findRate.min_company_rate} ₸`
      }
    },
    async onPressParent(id, isOpen) {
      if (isOpen) {
        this.selectItem = id
        const response = await this.$axios.get(`/api/catalogs/work-types/?limit=100000&parent=${id}`)
        this.items = response.data.results
      } else {
        if (this.selectItem === id) {
          this.selectItem = null
          this.items = []
        } else {
          this.selectItem = id
          const response = await this.$axios.get(`/api/catalogs/work-types/?limit=100000&parent=${id}`)
          this.items = response.data.results
        }
      }
    }
  },
  mounted() {
  },
  async asyncData({ params, $axios }) {
    const workTypes = await $axios.get(`/api/catalogs/work-types/?limit=100000&level=0`)
    const cities = await $axios.get(`/api/catalogs/cities/?limit=100000`)
    return {
      workTypes: workTypes.data.results,
      cities: cities.data.results
    }
  }
}
</script>

<style lang='scss'>
.admin {
  &-wrk {
    padding-right: 14px;
    padding-bottom: 100px;

    &-table {
      background-color: #fff;
      margin-top: 30px;
      overflow: auto;

      tr {
        background-color: #fff;
      }

      tr.admin-wrk-table__gray {
        background-color: #F6F6F6;
      }

      &__center {
        text-align: center;
      }

      td.admin-wrk-table__bld {
        font-weight: 500;
        font-size: 12px;
      }

      &__table {
        width: 100%;
        border-spacing: 0;
        overflow: hidden;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
      }

      thead {
        td {
          text-align: center;
          font-weight: 700;
          font-weight: bold;
          font-size: 12px;
        }
      }

      td {
        border: 1px solid #DFE0EB;
        height: 38px;
        padding: 5px;
        font-weight: 300;
        font-size: 12px;
        white-space: nowrap;
      }

      th {
        background-color: #2f80ed;
        padding: 4px;
        font-weight: bold;
        font-size: 16px;
        line-height: 36px;
        color: #fff;
      }
    }

    &-content {
      &__item {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 15px;
        padding-right: 55px;
        position: relative;
        cursor: pointer;

        &:nth-child(even) {
          background-color: #F6F6F6;
        }
      }

      &__title {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        padding-top: 8px;
        padding-bottom: 8px;
      }

      &__icon {
        position: absolute;
        top: 50%;
        right: 25px;
        content: '';
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(-50%);
        fill: transparent;
        stroke: #2091f9;

        &--delete {
          * {
            stroke: #EB5757 !important;
          }
        }
      }

      &__name {
        font-size: 12px;
        line-height: 36px;
        letter-spacing: 0.1px;
        color: #000000;
      }
    }

    &__scroll {
      background: #FFFFFF;
      height: 380px;
      overflow-y: scroll;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
      border-radius: 5px;
    }

    &-search {
      border-bottom: 1px solid #DFE0EB;
      padding-left: 32px;
      padding-right: 26px;
      margin-left: -32px;
      margin-right: -26px;
      margin-top: 20px;
      padding-bottom: 11px;
      margin-bottom: 30px;

      &__buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }

      &__btn {
        background: #FFFFFF;
        padding: 0 14px;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        margin-left: 15px;
        cursor: pointer;
        font-size: 9px;
        line-height: 21px;
        user-select: none;
      }

      &__input {
        position: relative;
        margin-bottom: 10px;
      }

      &__field {
        height: 32px;
        padding-left: 12px;
        padding-right: 60px;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        width: 100%;
        display: block;
        outline: none;
        color: #000;
        font-weight: 500;

        &::placeholder {
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 0.3px;
          color: #828282;
        }
      }
    }
  }
}
</style>

