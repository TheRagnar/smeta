<template>
  <div class='social'>
    <a href='' class='social__link'><Whatsapp/></a>
    <a href='' class='social__link'><Facebook/></a>
    <a href='' class='social__link'><Telegram/></a>
  </div>
</template>

<script>
import Whatsapp from "~/assets/icons/dashicons_whatsapp.svg?inline";
import Facebook from "~/assets/icons/akar-icons_facebook-fill.svg?inline";
import Telegram from "~/assets/icons/akar-icons_telegram-fill.svg?inline";

export default {
  components: {Whatsapp, Facebook, Telegram}
}

</script>

<style lang='scss' scoped>
.social {
  display: flex;
  align-items: center;
  &__link {
    width: 41px;
    height: 41px;
    margin-right: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    fill: #fff;
    transition: background-color ease-in-out .15s;
    position: relative;
    &:hover {
      fill: #2091f9;
    }
    &:active {
      top: 1px;
    }
  }
}
</style>
