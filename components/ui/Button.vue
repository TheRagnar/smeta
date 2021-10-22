<template>
  <nuxt-link
    v-if='type === "nuxt-link"'
    :disabled='disabled'
    :class='classObject'
    :style='style'
    :to='to'
  >{{ title }}
    <rg-icon v-if='moreIcon' class='button__rgIcon' />
    <trash-icon class='button__trashIcon' v-if='icon==="trash"' />
    <pdf-icon class='button__pdfIcon' v-if='icon==="pdf"' />
  </nuxt-link>
  <a
    v-else-if='type=== "link"'
    :href='to'
    :disabled='disabled'
    :class='classObject'
    :style='style'
  >{{ title }}
    <rg-icon v-if='moreIcon' class='button__rgIcon' />
    <trash-icon class='button__trashIcon' v-if='icon==="trash"' />
    <pdf-icon class='button__pdfIcon' v-if='icon==="pdf"' />
  </a>
  <button
    v-else
    :disabled='disabled'
    :class='classObject'
    :style='style'
    @click='onClick'
  >{{ title }}
    <rg-icon v-if='moreIcon' class='button__rgIcon' />
    <trash-icon class='button__trashIcon' v-if='icon==="trash"' />
    <pdf-icon class='button__pdfIcon' v-if='icon==="pdf"' />
  </button>
</template>

<script>
import rgIcon from '~/assets/icons/rg.svg?inline';
import trashIcon from '~/assets/icons/trash.svg?inline';
import pdfIcon from '~/assets/icons/pdf.svg?inline';

export default {
  components: { rgIcon, trashIcon, pdfIcon },
  props: {
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['medium', 'large', 'small'].includes(value)
      }
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button',
      validator(value) {
        return ['button', 'link', 'nuxt-link'].includes(value)
      }
    },
    to: {
      type: [String, Object],
      default: '/'
    },
    isWhite: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'secondary',
      validator(value) {
        return ['secondary', 'white', 'red', 'green'].includes(value)
      }
    },
    onClick: {
      type: Function,
      default: ()=>{}
    },
    styles: {
      type: String,
      default: null
    },
    moreIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
    }
  },
  data() {
    return {
      classObject: {
        button: true,
        'button--medium': this.size === 'medium',
        'button--large': this.size === 'large',
        'button--small': this.size === 'small',

        'button--red': this.color === 'red',
        'button--green': this.color === 'green',

        'button--disabled': this.disabled,
        'button--border': this.isBorder,
        'button--no-border': !this.isBorder
      }
    }
  },
  computed: {
    style() {
      return this.isBorder ?
        `border-color: ${this.color === 'secondary' ? '#2091f9' : '#fff'}; color: ${this.color === 'secondary' ? '#2091f9' : '#fff'}; background-color: transparent; ${this.styles}` :
        `background-color: ${this.color === 'secondary' ? '#2091f9' : '#fff'}; color: ${this.color === 'secondary' ? '#fff' : '#2091f9'}; ${this.styles}`
    }
  }
}
</script>

<style lang='scss' scoped>
.button {
  font-weight: 700;
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  background: none;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  user-select: none;
  z-index: 2;
  line-height: 28px;
  display: inline-block;

  &:disabled {
    cursor: default;
  }

  &--medium {
    padding: 18px 30px;
  }

  &__rgIcon {
    line-height: 28px;
    vertical-align: middle;
    margin-left: 20px;
  }
  &__pdfIcon {
    vertical-align: middle;
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }
  &__trashIcon {
    vertical-align: middle;
    margin-left: 10px;
    width: 20px;
    height: 20px;
  }


  &--no-border {
    background-color: #2091f9;
    color: #fff;
    transition: background-color ease-in-out .05s;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1.5em;
      height: 100%;
      background-color: rgba(#fff, .6);
      transform: translateX(-4em) skewX(-45deg);
    }

    &:not(:disabled):hover {
      &:before {
        animation: move-light 0.5s
      }
    }

    &:active {
      top: 1px;
    }
  }

  &--border {
    border: 1px solid #2091f9;
    color: #2091f9;
    transition: color ease-in-out .15s, border-color ease-in-out .15s, background-color ease-in-out .15s;


    &:disabled:hover {
      background-color: transparent;
      color: #2091f9;
    }

    &:active {
      top: 1px;
    }
  }

  &--disabled {
    filter: grayscale(100%);
  }

  &--large {
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 64px;
  }

  &--small {
    padding: 15.5px 20px;
    font-size: 10px;
    line-height: 12px;
  }
  &--red {
    background-color: #EB5757 !important;
    color: #fff !important;
    font-size: 16px;
    line-height: 28px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  &--green {
    background-color: #27AE60 !important;
    color: #fff !important;
    font-size: 16px;
    line-height: 28px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

@keyframes move-light {
  from {
    transform: translateX(-4em) skewX(-45deg);
  }
  to {
    transform: translateX(18em) skewX(-45deg);
  }
}
</style>


