<template>
  <div v-if='$store.state.modalAuth.isOpen' class='overlay'>
    <div class='overlay__bg'></div>
    <div class='modal'>
      <div class='modal__close' @click='$store.commit(`modalAuth/close`)'>
        <IconClose />
      </div>
      <div class='modal__content'>
        <div class='modal__title'>Войти</div>
        <div class='modal__input'>
          <input v-model='form.username' class='modal__field' placeholder='Ваш логин'
                 @keypress='delete errors.username'>
          <div class='modal__desc'>
            <div v-if='errors.username' class='modal__error'>{{ errors.username[0] }}</div>
          </div>
        </div>
        <div class='modal__input'>
          <input v-model='form.password' type='password' class='modal__field' placeholder='Пароль' @keypress='delete errors.password'>
          <div class='modal__desc'>
            <div v-if='errors.password' class='modal__error'>{{ errors.password[0] }}</div>
          </div>
        </div>
        <div class='modal__button'>
          <UiButton title='Войти' size='small' styles='width: 115px; text-align: center;' :on-click='onPress' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from '~/assets/icons/ant-design_close-circle-outlined.svg?inline'

export default {
  components: { IconClose },
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      errors: {}
    }
  },
  methods: {
    async onPress() {
      try {
        await this.$auth.loginWith('local', { data: this.form });
        this.$store.commit('modalAuth/close');
        this.$router.push('/estimates');
      } catch (e) {
        if (e.response.status === 401) {
          this.$store.dispatch('toast/showSnackbar', e.response.data.detail)
        } else if (e.response.status === 400) {
          const { data } = e.response
          this.errors = data
        }
      }
    }
  }
}
</script>

<style lang='scss'>
.no-scroll {
  overflow: hidden;
}

.modal {
  background-image: url("../../assets/img/modalBg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 778px;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 20px;
  overflow: hidden;
  padding-top: 115px;
  padding-bottom: 115px;
  z-index: 30;

  &__desc {
    height: 14px;
    margin-top: 3px;
  }

  &__error {
    font-size: 11px;
    color: #fff;
    line-height: 14px;
  }

  &__content {
    width: 340px;
    margin-left: auto;
    margin-right: auto;
  }

  &__input {
    margin-bottom: 5px;
  }

  &__button {
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    user-select: none;
  }

  &__title {
    color: #fff;
    font-size: 26px;
    line-height: 37px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
    user-select: none;
  }

  &__field {
    background-color: #fff;
    border-radius: 7px;
    height: 35px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 10px;
    font-weight: 500;
    outline: none;
    border: 1px solid #E8E8E8;

    &::placeholder {
      color: #B0B0B0;
    }
  }
}

.overlay {
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(#151515, .5);
  }
}
</style>
