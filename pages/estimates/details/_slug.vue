<template>
  <div class='admin page-wrapper'>
    <AdminHeader :title='`Смета ${defaultTitle}`' type='back' back-to='/estimates' />
    <div class='page-content admin-content'>
      <div class='admin-inner'>
        <div class='admin-form'>
          <v-container fluid>
            <v-row>
              <v-col md='12'>
                <div class='admin-form__input'>
                  <AdminInput v-model='form.name' :value='form.name' placeholder='Смета № 1' label='Название сметы' :error='errors.name'
                              @keypress='delete errors.name' />
                </div>
              </v-col>

              <v-col md='12'>
                <div class='admin-form__input'>
                  <Loader v-if='cities.isFetching' />
                  <AdminSelect
                    v-else
                    v-model='form.city'
                    item-text='repr'
                    item-value='id'
                    label='Выберите город'
                    :items='cities.list'
                    placeholder='Город'
                    :error='errors.city'
                    @input='delete errors.city; '
                  />
                </div>
              </v-col>

              <v-col md='5'>
                <div class='admin-from__input'>
                  <AdminSelectWorkTypes :city='form.city' :items='workTypes'/>
                </div>
              </v-col>
              <v-col md='7'>
                <div class='admin-form__table'>
                  <v-data-table
                    :items-per-page='-1'
                    :headers='tableHeaders'
                    :item-class='getItemClass'
                    :items="[...works, footer]"
                    class='admin-table'
                  />
                </div>
              </v-col>

              <v-col md='12' class='admin-form__footer'>
                <div class='admin-form__button'>
                  <UiButton color='red' size='small' title='Удалить смету' icon='trash' :on-click='removeEstimate' />
                </div>
                <div class='admin-form__buttons'>
                  <div class='admin-form__button'>
                    <UiButton color='green' size='small' title='Актуализировать' :on-click='saveChange' />
                  </div>
                  <div class='admin-form__button'>
                    <UiButton color='green' size='small' title='Скачать смету в PDF' icon='pdf' :on-click='generatePdf' />
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
    <AdminModalWorkAdd :fetch-works='fetchWorks'/>
    <AdminModalWorkAddWork :fetch-works='fetchWorks'/>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData({params, $axios}) {
    const id = params.slug;
    const cities = await $axios.get(`/api/catalogs/cities/?limit=100000`);
    const estimate = await $axios.get(`/api/estimates/${id}/`);
    const works = await $axios.get(`/api/estimates/${id}/works/?limit=100000`);
    const workTypes = await $axios.get(`/api/catalogs/work-types/?limit=100000&level=0&rates_city=${estimate.data.city.id}`);
    return {
      form: {
        name: estimate.data.repr,
        city: estimate.data.city.id,
      },
      cities: {
        isFetching: false,
        list: cities.data.results,
      },
      defaultTitle: estimate.data.repr,
      estimateId: id,
      works: works.data.results.length > 0 ? works.data.results : [{},{},{},{},{}],
      workTypes: workTypes.data.results,
    }
  },
  data() {
    return {
      errors: {},
      form: {
        city: null,
        name: ''
      },
      cities: {
        isFetching: false,
        list: []
      },
      defaultTitle: "",
      estimateId: null,
      works: [{},{},{},{},{}],
      workTypes: [],
      tableHeaders: [
        {
          text: "Наименование работ",
          value: "name",
        },
        {
          text: "Исполнитель",
          value: "",
        },
        {
          text: "Объём работ",
          value: "quantity",
        },
        {
          text: "Стоимость, ₸",
          value: "rate",
        }
      ]
    }
  },
  computed: {
    footer() {
      return {
        type: "FOOTER",
        quantity: "Итого:",
        rate: this.works.reduce((total, current) => {
          return +total + +current.rate
        }, 0).toFixed(2)
      }
    }
  },
  watch: {
    async 'form.city'(newVal, oldVal) {
      const workTypes = await this.$axios.get(`/api/catalogs/work-types/?limit=100000&level=0&rates_city=${newVal}`);
      this.workTypes = workTypes.data.results
    }
  },
  mounted() {

  },
  methods: {
    getItemClass(row) {
      if(row.type === "FOOTER") {
        return "admin-table__footer"
      }
      return "admin-table__item"
    },
    async removeEstimate() {
      this.isFetching = true;
      this.errors = {};
      try {
        const response = await this.$axios.delete(`/api/estimates/${this.$route.params.slug}/`);
        this.$router.push("/estimates");
      } catch (e) {
        this.errors = e.response.data
      } finally {
        this.isFetching = false;
      }
    },
    generatePdf() {

    },
    async saveChange() {
      this.isFetching = true;
      this.errors = {};
      try {
        const response = await this.$axios.patch(`/api/estimates/${this.$route.params.slug}/`, this.form);
        this.defaultTitle = this.form.name;
      } catch (e) {
        this.errors = e.response.data
      } finally {
        this.isFetching = false;
      }
    },
    async fetchWorks() {
      try {
        const works = await this.$axios.get(`/api/estimates/${this.$route.params.slug}/works/?limit=100000`);
        this.works = works.data.results.length > 0 ? works.data.results : [{},{},{},{},{}]
      } catch (e) {
        console.warn(e)
      }
    }
  }
}
</script>

<style lang='scss'>
.admin {
  &-inner {
    padding-top: 20px;
    padding-left: 12px;
    padding-right: 12px;
    flex-grow: 1;
  }

  &-form {
    background: #FFFFFF;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 20px;
    &__table {
      padding-top: 36px;
    }
    &__buttons {
      display: flex;
      justify-content: flex-end;
    }
    &__buttons &__button {
      margin-left: 15px;
    }

    &__input {
      margin-bottom: 10px;
    }

    &__title {
      font-size: 24px;
      line-height: 30px;
      font-weight: 700;
      color: #000;
    }

    &__button {
      margin-top: 10px;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
    }
  }
  &-table {
    border: 1px solid #D2D2D2;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    overflow: hidden;
    th {
      font-weight: 500;
      color: #fff !important;
      font-size: 16px !important;
      line-height: 28px;
      text-align: left !important;
      padding-top: 5px !important;
      padding-bottom: 5px !important;
      background-color: #2091f9;
      &:not(:last-child) {
        border-right: 2px solid #E0E0E0;
      }
    }
    &__item {
      td {
        min-height: 38px !important;
        height: 38px !important;
        font-size: 16px !important;
        color: #666666;
        line-height: 24px;
        padding-top: 5px !important;
        padding-bottom: 5px !important;
        &:not(:last-child) {
          border-right: 2px solid #E0E0E0;
        }
      }
    }
    &__footer {
      td {
        font-weight: 500;
        color: #fff !important;
        font-size: 16px !important;
        line-height: 28px;
        text-align: left !important;
        padding-top: 5px !important;
        padding-bottom: 5px !important;
        background-color: #2091f9;
        &:not(:last-child) {
          border-right: 2px solid #E0E0E0;
        }
      }
    }
    .v-data-footer,
    .v-data-table-header__icon{
      display: none;
    }
  }
}
</style>

