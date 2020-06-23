<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
    <button
      class="dropdown-title"
      type="button"
      :aria-label="dropdownAriaLabel"
      @click="toggle"
    > 
      <router-link v-if="item.link" :to="item.link" class="link-title">{{ item.text }}</router-link>
      <span class="title" v-show="!item.link">{{ item.text }}</span>
    </button>
    <DropdownTransition>
      <ul
        class="nav-dropdown"
      >
        <li
          class="dropdown-item"
          :key="subItem.link || index"
          v-for="(subItem, index) in item.items"
        >
          <h5 v-if="subItem.type === 'links'">{{ subItem.text }}</h5>

          <ul
            class="dropdown-subitem-wrapper"
            v-if="subItem.type === 'links'"
          >
            <li
              class="dropdown-subitem"
              :key="childSubItem.link"
              v-for="childSubItem in subItem.items"
            >
              <NavLink
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) &&
                  isLastItemOfArray(subItem, item.items) &&
                  toggle()
                "
                :item="childSubItem"/>
            </li>
          </ul>

          <NavLink
            v-else
            @focusout="isLastItemOfArray(subItem, item.items) && toggle()"
            :item="subItem"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'
import DropdownTransition from '@theme/components/DropdownTransition.vue'
import last from 'lodash/last'

export default {
  components: { NavLink, DropdownTransition },

  data () {
    return {
      open: false,
      isMQMobile: false
    }
  },

  props: {
    item: {
      required: true
    }
  },

  computed: {
    dropdownAriaLabel () {
      return this.item.ariaLabel || this.item.text
    }
  },
  beforeMount(){
    this.isMQMobile = window.innerWidth < 720 ? true : false;
    
    window.addEventListener('resize', () => {
      this.isMQMobile = window.innerWidth < 720 ? true : false;
    })
  },
  methods: {
    toggle () {
       if(this.isMQMobile){
         this.open = !this.open
       }
    },

    isLastItemOfArray (item, array) {
      return last(array) === item
    }
  },

  watch: {
    $route () {
      this.open = false
    }
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper
  height auto
  cursor pointer
  .dropdown-title
    display block
    font-size inherit
    font-family inherit
    cursor inherit
    padding inherit
    line-height 1.4rem
    background transparent
    border none
    font-weight 500
    color var(--textColor)
    &:hover
      border-color transparent
    .arrow
      vertical-align middle
      margin-top -1px
      margin-left 0.4rem
  .nav-dropdown
    .dropdown-item
      color inherit
      line-height 1.7rem
      background-color #ffffff
      h5
        padding 10px 0
        margin 0
      .dropdown-subitem-wrapper
        padding 0
        list-style none
        .dropdown-subitem
          font-size 0.9em
      a
        display block
        font-size 13px
        line-height 1.7rem
        padding-left 10px
        position relative
        border-bottom none
        font-weight 400
        margin-bottom 0
        &:hover
          color $accentColor
        &.router-link-active
          color $accentColor
          &::after
            content ""
            width 0
            height 0
            border-left 5px solid $accentColor
            border-top 3px solid transparent
            border-bottom 3px solid transparent
            position absolute
            top calc(50% - 2px)
            left 2px
      &:first-child h5
        margin-top 0
        padding 10px 0
        border-top 0

@media (max-width: $MQMobile)
  .dropdown-wrapper
    &.open .dropdown-title
      margin-bottom 0.5rem
    .dropdown-title
      font-weight 600
      font-size inherit
      &:hover
        color $accentColor
      .link-title
        display none 
      .title
        display inline-block!important
    .nav-dropdown
      transition height .1s ease-out
      overflow hidden
      .dropdown-item
        h5
          border-top 0
          margin-top 0
          padding-top 0
        h5, & > a
          font-size 15px
          line-height 2rem
        .dropdown-subitem
          font-size 14px
          padding-left 1rem

@media (min-width: $MQMobile)
  .dropdown-wrapper
    height auto
    &:hover .nav-dropdown,
    &.open .nav-dropdown
      display block !important
    &.open:blur
      display none
    .dropdown-title .arrow
      border-left 4px solid transparent
      border-right 4px solid transparent
      border-top 6px solid $arrowBgColor
      border-bottom 0
    .nav-dropdown
      list-style none
      padding 0

      height auto !important
      box-sizing border-box;
      max-height calc(100vh - 2.7rem)
      overflow-y auto
      position absolute
      top 100%
      left 0
      right 0
      width 100%
      max-width  100%
      transform translateX(0px)
      background-color var(--mainBg)
      text-align left
      white-space nowrap
      margin 0
  .nav-item .dropdown-title a
    &:hover, &.router-link-active
      margin-bottom -2px
      border-bottom 2px solid lighten($accentColor, 8%)
</style>
