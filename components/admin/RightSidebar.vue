<template>
  <v-col md='3' class='admin__line admin__container'>
    <router-link to='/estimates/create' class='admin-action'>
      <div class='admin-action__icon' v-html='docIcon' />
      <div class='admin-action__content'>
        <div class='admin-action__title'>Новая смета</div>
        <div class='admin-action__description'>Создайте новую смету и сохраните в нужном формате</div>
      </div>
      <div class='admin-action__more' v-html='plusIcon' />
    </router-link>

    <router-link to='/enir' class='admin-action'>
      <div class='admin-action__icon' v-html='docZoomIcon' />
      <div class='admin-action__content'>
        <div class='admin-action__title'>ЕНиР</div>
        <div class='admin-action__description'>Сверится с справочником</div>
      </div>
    </router-link>
  </v-col>
</template>

<script>
import docIcon from '~/assets/icons/ant-design_file-outlined.svg?raw'
import plusIcon from '~/assets/icons/akar-icons_circle-plus.svg?raw'
import docZoomIcon from '~/assets/icons/bx_bx-file-find.svg?raw'

export default {
  data() {
    return { docIcon, plusIcon, docZoomIcon }
  }
}
</script>
