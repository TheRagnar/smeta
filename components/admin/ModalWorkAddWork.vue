<template>
  <div class='mwa mwaw' v-if='$store.state.mwaw.isOpen'>
    <div class='mwa__overlay' @click='click'></div>
    <div class='mwa__modal'>
      <div class='mwa__header'>
        <div class='mwa__title'>{{ $store.state.mwaw.data.name }}</div>
      </div>
      <div class='mwa__content'>
        <v-row>
          <v-col md='12'>
            <div class='mwa__input'>
              <div class='mwa__text'>Исполнитель:</div>
              <div class='mwa__radios'>
                <label class='mwa-radio'>
                  <input type='radio' v-model='form.is_brigade' :value='true'  class='mwa-radio__input'>
                  <div class='mwa-radio__fake'></div>
                  <div class='mwa-radio__text'>Бригада</div>
                </label>
                <label class='mwa-radio'>
                  <input type='radio' v-model='form.is_brigade' :value='false'  class='mwa-radio__input'>
                  <div class='mwa-radio__fake'></div>
                  <div class='mwa-radio__text'>Фирма</div>
                </label>
              </div>
            </div>
          </v-col>
          <v-col md='12'>
            <div class='mwa__input'>
              <AdminInput
                label='Укажите объем услуг'
                :placeholder='$store.state.mwaw.data.unit'
                :value='form.quantity'
                v-model='form.quantity'
                :error='errors.quantity'
                @keypress='delete errors.quantity'
              />
            </div>
          </v-col>
        </v-row>
        <div class='mwa__button'>
          <UiButton
            size='small'
            title='Принять'
            :on-click='sendForm'
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else />
</template>
<script>
const defaultForm = {
  name: "",
  unit: "",
  rate: "",
  quantity: "",
  is_brigade: false,
}
export default {
  props: ['fetchWorks'],
  data() {
    return {
      errors: {},
      form: { ...defaultForm }
    }
  },
  methods: {
    click() {
      this.$store.commit('mwaw/close')
    },
    async sendForm() {
      try {
        let rate;
        if(this.form.is_brigade) {
          // rate = `${this.$store.state.mwaw.data.rate.min_brigade_rate} - ${this.$store.state.mwaw.data.rate.max_brigade_rate}`;
          rate = this.$store.state.mwaw.data.rate.max_brigade_rate ? this.$store.state.mwaw.data.rate.max_brigade_rate : this.$store.state.mwaw.data.rate.min_brigade_rate;
        } else {
          // rate = `${this.$store.state.mwaw.data.rate.min_company_rate} - ${this.$store.state.mwaw.data.rate.max_company_rate}`;
          rate = this.$store.state.mwaw.data.rate.max_company_rate ? this.$store.state.mwaw.data.rate.max_company_rate : this.$store.state.mwaw.data.rate.min_company_rate;
        }
        await this.$axios.post(`/api/estimates/${this.$route.params.slug}/works/`, {
          source_work_type: this.$store.state.mwaw.data.source_work_type,
          name: this.$store.state.mwaw.data.name,
          unit: this.$store.state.mwaw.data.unit,
          rate,
          quantity: this.form.quantity,
          is_brigade: this.form.is_brigade,
        })
        this.form = { ...defaultForm };
        this.$store.commit('mwaw/close');
        if(this.fetchWorks) {
          this.fetchWorks();
        }
      } catch (e) {
        this.errors = e.response.data
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.mwa {
  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #252B42;
    margin-bottom: 8px;
    display: block;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(#151515, .5);
  }

  &__modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 560px;
    max-width: 100%;
  }

  &__header {
    background: #2F80ED;
    border-radius: 10px 10px 0px 0px;
    padding: 4px 50px;
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  &__content {
    padding: 25px 50px;
  }

  .col {
    padding-top: 0;
    padding-bottom: 0;
  }

  .row {
    margin-top: 0;
    margin-bottom: 0;
  }

  &__button {
    display: flex;
    justify-content: center;
  }

  &__input {
    margin-bottom: 20px;
  }

  &-radio {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
    line-height: 24px;
    color: #666666;
    margin-right: 30px;

    &__input {
      display: none;
    }

    &__fake {
      width: 30px;
      height: 30px;
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid #CCCCCC;
      margin-right: 7px;
      position: relative;
    }

    &__input:checked + &__fake {
      &:after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "";
        position: absolute;
        z-index: 2;
        background-color: #2091f9;
        border-radius: 50%;
        width: 12px;
        height: 12px;
      }
    }
  }

  &__radios {
    display: flex;
    align-items: center;
  }

  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    color: #252B42;
    margin-bottom: 8px;
    display: block;
  }
}
</style>
