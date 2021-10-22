<template>
  <div class='admin page-wrapper'>
    <AdminHeader title='Личный кабинет' type='home' />
    <div class='page-content admin-content'>
      <v-container fluid class='admin__container admin__flex'>
        <v-row class='admin__container'>
          <v-col md='9' class='admin__container'>
            <div class='admin__header'>
              <div class='admin__title'>Готовые сметы</div>
              <div class='admin__control'>
                <button
                  :class='{"admin__switch--active": isGrid}'
                  class='admin__switch'
                  @click='toggleView(true)'
                  v-html='gridIcon'
                />
                <button
                  :class='{"admin__switch--active": !isGrid}'
                  class='admin__switch'
                  @click='toggleView(false)'
                  v-html='listIcon'
                />
              </div>
            </div>
            <div v-if='isFetching'>
              <Loader />
            </div>
            <div v-else>
              <v-row v-if='isGrid' class='admin-row'>
                <v-col :md='getGridMd' v-for='item in estimates' :key='item.id'>
                  <AdminEstimate :to='`/estimates/details/${item.id}`' :title='item.name' :date='generateDate(item.created_at, item.updated_at)' />
                </v-col>
              </v-row>
              <div v-else class='admin-line'>
                <AdminEstimateList :to='`/estimates/details/${item.id}`' v-for='item in estimates' :key='item.id'
                                   :title='item.name' :date='generateDate(item.created_at, item.updated_at)' />
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
import moment from "moment";
import gridIcon from '~/assets/icons/fe_app-menu.svg?raw'
import listIcon from '~/assets/icons/ant-design_ordered-list-outlined.svg?raw'

export default {
  layout: 'admin',
  auth: true,
  data() {
    return {
      gridIcon, listIcon,
      isGrid: true,

      estimates: [],
      isFetching: false
    }
  },
  computed: {
    getGridMd() {
      return this.isGrid ? 4 : 12
    }
  },
  methods: {
    generateDate(createdAt,updatedAt) {
      return `${moment(createdAt).format("HH:MM - DD.MM.YYYY")}`
    },
    toggleView(isGrid) {
      this.isGrid = isGrid
    },
    async findWorks() {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await this.$axios.get(`/api/estimates/1/works/`)
      } catch (e) {
        console.warn(e)
      }
    },
    async fetchEstimate() {
      this.isFetching = true
      try {
        const response = await this.$axios.get(`/api/estimates/`)
        this.estimates = response.data.results
      } catch (e) {
        console.warn(e)
      } finally {
        this.isFetching = false
      }
    }
  },
  mounted() {
    this.fetchEstimate()
  }
}
</script>

<style lang='scss'>
.admin {
  &-line {
    position: relative;

    &:after {
      botom: 0;
      border-bottom: 1px solid #DFE0EB;
      content: '';
      left: -32px;
      right: -12px;
      position: absolute;
    }
  }

  &__title {
    font-size: 14px;
    color: #000;
    line-height: 18px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 0;
    padding-right: 14px;
  }

  &__line {
    border-left: 1px solid #DFE0EB;
    padding-left: 20px;
    padding-top: 20px;
  }

  &__flex {
    display: flex;
  }

  &__container {
    flex: 1;
  }

  &-content {
    display: flex;
  }

  &-row {
    padding-right: 14px;
  }

  &__control {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  &__switch {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;

    * {
      fill: #828282;
    }

    &.admin__switch--active {
      * {
        fill: #2F80ED;
      }
    }
  }

  &-action {
    border: 1px solid #E0E0E0;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    position: relative;
    padding: 15px;
    padding-right: 42px;
    text-decoration: none;
    margin-bottom: 12px;
    cursor: pointer;
    color: #252B42;

    &.nuxt-link-active {
      border-color: #2F80ED;
      background-color: #2F80ED;
      color: #FFFFFF;

      * {
        color: #fff !important;
        fill: #fff !important;
      }
    }

    &:after {
      left: -1px;
      right: -1px;
      bottom: -1px;
      top: -1px;
      position: absolute;
      content: "";
      z-index: 3;
      opacity: 0;
      border: 2px solid #2091f9;
      transition: all ease-in-out .3s;
      border-radius: 10px;
    }

    &:hover {
      &:after {
        opacity: 1;
      }
    }

    &__more {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__title {
      color: #000;
      font-size: 13px;
      font-weight: 700;
      line-height: 21px;
    }

    &__description {
      font-weight: 300;
      font-size: 9px;
      line-height: 11px;
    }

    &__icon {
      display: flex;
      align-content: center;
      justify-content: center;
      width: 38px;
      height: 44px;
      margin-right: 10px;
    }
  }
}
</style>

