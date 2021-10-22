<template>
  <div class='admin page-wrapper'>
    <AdminHeader title='Личный кабинет' type='home' />
    <div class='page-content admin-content'>
      <div class='admin-inner'>
        <div class='admin__header'>
          <div class='admin__title'>Статьи</div>
        </div>
        <div
          v-for='n in 10'
          :key='n'
          class='admin__item'
        >
          <AdminArticle
            :to='`/adad${n}`'
            title='Что такое асинхронная коммуникация и почему она помогает работать продуктивнее'
            content='Команда Go Mobile работает по гибридному графику: часть дней в офисе, часть — удалённо. За полтора года в таком режиме мы не снизили продуктивность и даже стали работать эффективнее. Дело в том, что мы были к этому готовы. Один из секретов — асинхронная коммуникация. В статье рассказываем, почему асинхронная коммуникация — топ и как её внедрить.'
            date='17:56 - 19.08.2021'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gridIcon from '~/assets/icons/fe_app-menu.svg?raw'
import listIcon from '~/assets/icons/ant-design_ordered-list-outlined.svg?raw'
import docIcon from '~/assets/icons/ant-design_file-outlined.svg?raw'
import plusIcon from '~/assets/icons/akar-icons_circle-plus.svg?raw'
import docZoomIcon from '~/assets/icons/bx_bx-file-find.svg?raw'

export default {
  layout: 'admin',
  data() {
    return {
      gridIcon, listIcon, docIcon, plusIcon, docZoomIcon
    }
  }
}
</script>

<style lang='scss' scoped>
.admin {
  &-inner {
    padding-top: 20px;
    padding-left: 12px;
    padding-right: 12px;
  }
  &__title {
    margin-bottom: 50px;
  }
  &__item {
    margin-bottom: 22px;
  }
}
</style>

