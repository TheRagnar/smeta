<template>
  <div class='registration-page'>
    <div class='registration'>
      <div class='registration__content'>
        <div class='registration__top'>
          <v-tabs centered>
            <v-tabs-slider></v-tabs-slider>
            <v-tab class='registration__tab'>
              <div class='registration__tabicon' v-html='homeSvg' />
              Персональные данные
            </v-tab>
            <v-tab class='registration__tab'>
              <div class='registration__tabicon' v-html='userSvg' />
              Что-то еще
            </v-tab>
            <v-tab class='registration__tab'>
              <div class='registration__tabicon' v-html='callSvg' />
              Ещё что-то
            </v-tab>
          </v-tabs>
        </div>
        <div class='registration__form'>
          <div class='registration__title'>Персональные данные</div>
          <div class='registration__item'>
            <div class='registration__radios'>
              <div class='registration__radio'>
                <label class='radio'>
                  <input v-model='isFiz' :value='true' type='radio' class='radio__input'>
                  <div class='radio__fake'></div>
                  <div class='radio__text'>Физ. лицо</div>
                </label>
              </div>
              <div class='registration__radio'>
                <label class='radio'>
                  <input v-model='isFiz' :value='false' type='radio' class='radio__input'>
                  <div class='radio__fake'></div>
                  <div class='radio__text'>Юр. лицо</div>
                </label>
              </div>
            </div>
          </div>
          <div class='registration__item'>
            <AdminInput
              v-model='form.username'
              placeholder='Введите логин'
              label='Логин'
              :error='errors.username'
              @keypress='delete errors.username'
            />
          </div>
          <div class='registration__item'>
            <v-row>
              <v-col md='6'>
                <AdminInput
                  v-model='form.email'
                  placeholder='example@example.com'
                  label='E-mail'
                  :error='errors.email'
                  @keypress='delete errors.email'
                />
              </v-col>
              <v-col md='6'>
                <AdminInput
                  v-model='phone'
                  placeholder='123 456 789'
                  label='Телефон'
                  :error='errors.profile && errors.profile.phone_number'
                  @keypress='errors.profile && errors.profile.phone_number && delete errors.profile.phone_number'
                />
              </v-col>
            </v-row>
          </div>
          <div class='registration__item'>
            <AdminSelect
              v-model='typesOfActivity.value'
              item-text='label'
              item-value='id'
              label='Тип деятельности'
              :items='typesOfActivity.data'
              placeholder='Выберите тип деятельности'
              :error='errors.typesOfActivity'
              @input='delete errors.typesOfActivity'
            />
          </div>
          <div class='registration__item'>
            <Loader v-if='professionsListData.isFetching' />
            <AdminSelect
              v-else
              v-model='professionsListData.value'
              item-text='repr'
              item-value='id'
              label='Профессия'
              :items='professionsListData.data'
              placeholder='Выберите профессию'
              :error='errors.profile && errors.profile.professions'
              @input='errors.profile && errors.profile.professions && delete errors.profile.professions'
            />
          </div>

          <div class='registration__item'>
            <v-row>
              <v-col md='6'>
                <AdminInput
                  v-model='form.first_name'
                  placeholder='Введите ваше имя'
                  label='Имя'
                  :error='errors.first_name'
                  @keypress='delete errors.first_name'
                />
              </v-col>
              <v-col md='6'>
                <AdminInput
                  v-model='form.last_name'
                  placeholder='Повторите вашу фамилию'
                  label='Фамилия'
                  :error='errors.last_name'
                  @keypress='delete errors.last_name'
                />
              </v-col>
            </v-row>
          </div>

          <div class='registration__item'>
            <v-row>
              <v-col md='6'>
                <AdminInput
                  v-model='form.password'
                  type='password'
                  placeholder='Введите пароль'
                  label='Парль'
                  :error='errors.password'
                  @keypress='delete errors.password; delete errors.repeatPassword'
                />
              </v-col>
              <v-col md='6'>
                <AdminInput
                  v-model='form.repeatPassword'
                  type='password'
                  placeholder='Повторите пароль'
                  label='Подтвердите пароль'
                  :error='errors.repeatPassword'
                  @keypress='delete errors.password; delete errors.repeatPassword'
                />
              </v-col>
            </v-row>
          </div>
          <div class='registration__footer'>
            <UiButton type='nuxt-link' title='Назад' is-border to='/' />
            <UiButton title='Далее' :on-click='sendForm' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeSvg from '~/assets/icons/home_tab.svg?raw'
import userSvg from '~/assets/icons/user_tab.svg?raw'
import callSvg from '~/assets/icons/bx_bx-user-voice.svg?raw'

export default {
  auth: false,
  data() {
    return {
      isFetching: false,
      homeSvg,
      userSvg,
      callSvg,
      isFiz: true,
      errors: {},
      form: {
        email: '',
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        repeatPassword: ''
      },
      typesOfActivity: {
        data: [
          { id: 'is_company', label: 'Компания' },
          { id: 'is_client', label: 'Клиент' },
          { id: 'is_appraiser', label: 'Сметчик' },
          { id: 'is_estimator', label: 'Оценщик' },
          { id: 'is_worker', label: 'Мастер' }
        ],
        value: null
      },
      phone: '',
      professionsListData: {
        isFetching: false,
        data: [],
        error: null,
        value: null
      }
    }
  },
  mounted() {
    this.fetchTypeOfActivity()
  },
  methods: {
    async sendForm() {
      this.isFetching = true
      this.errors = {}
      if (!this.typesOfActivity.value) {
        this.errors = {
          typesOfActivity: ['Поле обязательно для заполнения']
        }
        return null
      }
      if (this.form.password !== this.form.repeatPassword) {
        this.errors = {
          password: ['Пароли не совпадают'],
          repeatPassword: ['Пароли не совпадают']
        }
        return null
      }
      try {
        await this.$axios.post(`/api/auth/users/`, {
          ...this.form,
          profile: {
            professions: this.professionsListData.value ? [this.professionsListData.value] : null,
            phone_number: this.phone,
            is_company: this.typesOfActivity.value === 'is_company',
            is_client: this.typesOfActivity.value === 'is_client',
            is_appraiser: this.typesOfActivity.value === 'is_appraiser',
            is_estimator: this.typesOfActivity.value === 'is_estimator',
            is_worker: this.typesOfActivity.value === 'is_worker'
          }
        })
        this.$router.push(`/sms`)
      } catch (e) {
        if (e.response.status === 400) {
          this.errors = e.response.data
        }
      } finally {
        this.isFetching = false
      }
    },

    async fetchTypeOfActivity() {
      this.professionsListData.isFetching = true
      try {
        const { data } = await this.$axios.get(`/api/catalogs/professions/?limit=10000`)
        this.professionsListData.data = data.results
      } catch (e) {
      } finally {
        this.professionsListData.isFetching = false
      }
    }
  }
}
</script>

<style lang='scss'>
.registration {
  .v-tabs-slider-wrapper {
    height: 3px !important;
  }

  .v-tabs-slider {
    height: 3px;
    background-color: #2091f9;
  }

  &-page {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding-top: 100px;
    padding-bottom: 80px;
  }

  &__content {
    width: 750px;
    max-width: 100%;
    margin: auto;
  }

  &__tabicon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  &__tab {
    background-color: transparent !important;
    fill: #737373 !important;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: .2px;
    text-transform: none;
    align-items: center;
    border-bottom: 3px solid #E4E4E4;

    .v-ripple__container {
      display: none !important
    }

    &.v-tab--active {
      color: #2091f9;
      fill: #2091f9 !important;
    }

    &:before {
      display: none !important;
    }
  }

  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #2091f9;
    margin-bottom: 45px;
  }

  &__form {
    padding-top: 30px;
  }

  &__tabs {
    justify-content: center;
  }

  .v-slide-group__content {
    justify-content: center;
  }

  &__radios {
    display: flex;
    justify-content: space-around;
  }

  &__radio {
    margin-bottom: 20px;
  }

  &__item {
    margin-bottom: 12px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
  }
}

.radio {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #252B42;

  &__input {
    display: none;
  }

  &__fake {
    width: 30px;
    height: 30px;
    background-color: #2091F9;
    border-radius: 50%;
    border: 7.5px solid #2091f9;
    margin-right: 7px;
  }

  &__input:checked + &__fake {
    background-color: #fff;
  }
}
</style>
