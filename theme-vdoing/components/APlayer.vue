<template>
  <div class="wrapper">
    <Player
      v-if="show"
      :autoplay="player.autoplay"
      :music="player.music"
      :list="player.musicList"
      :volume="player.volume"
      :float="player.float"
      :controls="player.controls"
      :listFolded="player.listFolded"
      :mutex="player.mutex"
      :mini="player.mini"
    />
  </div>
</template>

<script>
import Player from 'vue-aplayer'
export default {
  name: 'Aplayer',
  filters: {},
  components: {
    Player
  },
  props: {},
  data() {
    return {
      show: false,
      player: {
        autoplay: false,
        volume: 0.5,
        float: true,
        controls: true,
        listFolded: true,
        mutex: true,
        mini: false,
        shuffle: false,
        repeat: 'no-repeat',
        music: {},
        musicList: []
      }
    }
  },
  created() {
    this.$nextTick(() => {
      Object.keys(this.player).forEach(key => {
        this.player[key] = this.$themeConfig.music[key]
      })
      this.show = true
    })
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="stylus">
.wrapper{
  width: 300px;
  position: fixed;
  left: 0;
  bottom: 20px;
}
</style>
