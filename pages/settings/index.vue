<template>
  <div class='admin page-wrapper'>
    <AdminHeader title='Личный кабинет' type='home' />
    <div class='page-content admin-content'>
      <div class='admin-inner'>
        <div class='admin__header'>
          <div class='admin__title'>Настройки</div>
        </div>
        <div class='admin-form'>
          <v-container fluid>
            <v-row>
              <v-col md='12'>
                <div class='admin-form__title'>Изменить личные данные</div>
              </v-col>
              <v-col md='7'>
                <v-row>
                  <v-col md='12'>
                    <div class='admin-form__input'>
                      <AdminInput v-model='username' placeholder='Ваш логин' label='Логин' :error='errors.username'
                                  @keypress='delete errors.username' />
                    </div>
                  </v-col>
                  <v-col md='6'>
                    <div class='admin-form__input'>
                      <AdminInput v-model='form.first_name' placeholder='Антон' label='Имя' :error='errors.first_name'
                                  @keypress='delete errors.first_name' />
                    </div>
                  </v-col>
                  <v-col md='6'>
                    <div class='admin-form__input'>
                      <AdminInput v-model='form.last_name' placeholder='Потапов' label='Фамилия'
                                  :error='errors.last_name' @keypress='delete errors.last_name' />
                    </div>
                  </v-col>
                  <v-col md='6'>
                    <div class='admin-form__input'>
                      <AdminInput
                        v-model='phone'
                        placeholder='123 456 789'
                        label='Номер телефона'
                        :error='errors.profile && errors.profile.phone_number'
                        @keypress='errors.profile && errors.profile.phone_number && delete errors.profile.phone_number'
                      />
                    </div>
                  </v-col>
                  <v-col md='6'>
                    <div class='admin-form__input'>
                      <AdminInput v-model='email' placeholder='example@example.com' label='E-mail' disabled
                                  :error='errors.email' @keypress='delete errors.email' />
                    </div>
                  </v-col>
                  <v-col md='12'>
                    <div class='admin-form__button'>
                      <UiButton title='Подтвердить' more-icon :on-click='changeForm' />
                    </div>
                  </v-col>
                </v-row>
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
    if (this.$auth.loggedIn) {
      return {
        form: {
          first_name: this.$auth.$state.user.first_name,
          last_name: this.$auth.$state.user.last_name
        },
        errors: {},
        phone: this.$auth.$state.user.profile.phone_number,
        email: this.$auth.$state.user.email,
        username: this.$auth.$state.user.username,
        password: {
          field1: '',
          field2: ''
        }
      }
    } else {
      return {
        form: {
          first_name: '',
          last_name: ''
        },
        errors: {},
        phone: '',
        email: '',
        username: '',
        password: {
          field1: '',
          field2: ''
        }
      }
    }
  },
  methods: {
    async changeForm() {
      this.isFetching = true
      this.errors = {}
      if (this.password.field1 !== this.password.field2) {
        this.errors = {
          field1: ['Пароли не совпадают'],
          field2: ['Пароли не совпадают']
        }
        return null
      }
      try {
        await this.$axios.patch(`/api/auth/users/me/`, {
          ...this.form,
          profile: {
            professions: [this.$auth.$state.user.profile.professions[0].id],
            phone_number: this.phone,
            is_company: this.$auth.$state.user.profile.is_company,
            is_client: this.$auth.$state.user.profile.is_client,
            is_appraiser: this.$auth.$state.user.profile.is_appraiser,
            is_estimator: this.$auth.$state.user.profile.is_estimator,
            is_worker: this.$auth.$state.user.profile.is_worker
          }
        })
        this.$store.commit('toast/showSnackbar', 'Данные успешно изменены')
      } catch (e) {
        if (e.response.status === 400) {
          this.errors = e.response.data
        }
      } finally {
        this.isFetching = false
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

