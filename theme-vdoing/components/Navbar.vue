components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Github },
<template>
  <header class="navbar blur">
    <div class="nav">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />
      <div class="navlist">
        <router-link :to="$localePath" class="home-link">
          <img class="logo" v-if="$site.themeConfig.logo" :src="$withBase($site.themeConfig.logo)" :alt="$siteTitle" />
          <span ref="siteName" class="site-name" v-if="$siteTitle" :class="{ 'can-hide': $site.themeConfig.logo }">{{
            $siteTitle
          }}</span>
        </router-link>
        <div class="navList">
          <NavLinks class="can-hide" />
        </div>
      </div>
      <div class="links">
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
        <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      </div>
      <Github v-if="repoLink" :repoLink="repoLink" />
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import Github from '@theme/components/Github.vue'

import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox, Github },

  data() {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    repoLink() {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`
      }
      return null
    },
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  width 100%
  background-color #ffffff
  line-height $navbarHeight - 1.4rem
  transition transform 0.3s
  .nav
    margin auto
    padding $navbar-vertical-padding $navbar-horizontal-padding
    max-width $homePageWidth
    // position relative
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color var(--textColor)
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position relative
    display inline-block
    float: right
    .search-box
      flex: 0 0 auto
      vertical-align top
      input
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #ddd;
        background-position: left;
        &:focus
          cursor: auto;
          border-bottom-color: #11a8cd;

.hide-navbar
    .navbar
      transform translateY(-100%)
// 鼠标移入logo展示导航
.navList
  z-index 100
  padding 30px
  border-top 1px solid #eee
  position absolute
  right 0
  left 0
  top: $navbarHeight
  min-height 0
  display none
  background-color  #ffffff
  width  100%
  transition all .5s ease

.home-link
  display inline-block
  height $navbarHeight - $navbar-vertical-padding

.navlist
  display inline-block
  &:hover .navList
    display block
    min-height 300px
    transition all .5s ease

// 959
@media (max-width: $MQNarrow)
  .navbar
    .site-name
      display none

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
