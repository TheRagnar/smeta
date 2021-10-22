<template>
  <div class='admin page-wrapper'>
    <AdminHeader title='Создание сметы' type='home' />
    <div class='page-content admin-content'>
      <div class='admin-inner'>
        <div class='admin-form'>
          <v-container fluid>
            <v-row>
              <v-col md='12'>
                <div class='admin-form__input'>
                  <AdminInput v-model='form.name' placeholder='Смета № 1' label='Название сметы'
                              :error='errors.name'
                              @keypress='delete errors.name'
                  />
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
                    @input='delete errors.city'
                  />
                </div>
              </v-col>

              <v-col md='12'>
                <div class='admin-form__button'>
                  <UiButton title='Создать' more-icon :on-click='changeForm' />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      isFetching: false,
      errors: {},
      form: {
        city: null,
        name: ''
      },
      cities: {
        isFetching: false,
        list: []
      }
    }
  },
  methods: {
    async fetchCities() {
      this.cities.isFetching = true
      try {
        const { data } = await this.$axios.get(`/api/catalogs/cities/?limit=10000`)
        this.cities.list = data.results
      } catch (e) {
      } finally {
        this.cities.isFetching = false
      }
    },
    async changeForm() {
      this.isFetching = true
      this.errors = {}
      try {
        const response = await this.$axios.post(`/api/estimates/`, this.form)
        this.$router.push(`/estimates/details/${response.data.id}`)
      } catch (e) {
        if (e.response.status === 400) {
          this.errors = e.response.data
        }
      } finally {
        this.isFetching = false
      }
    }
  },
  mounted() {
    this.fetchCities()
  },
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
  }
}
</style>

