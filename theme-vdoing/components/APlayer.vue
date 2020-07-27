<template>
  <div class="wrapper">
    <Player autoplay float :volume="0.2" controls :music.sync="musicList" showLrc/>
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
      musicList: {
        title: '我的女人',
        artist: '小贱（谭冰尧）',
        src: 'https://isure.stream.qqmusic.qq.com/C400001qvMYG0hiRVj.m4a?guid=9409258217&vkey=1FF59B4C275639A1DA34B9ADDD97E0CD89DC80511C73390C23D86D374B6218F1551E58B0B78DDE732AB06950B0D0EBA458E61145B0AB66FF&uin=0&fromtag=66',
        pic: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000001kWhKj1sKTHA.jpg',
        lrc: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?-=MusicJsonCallback_lrc&pcachetime=1595837553443&songmid=000AbLvu3VLOM2&g_tk_new_20200303=5381&g_tk=5381&loginUin=1404241558&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
      }
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
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
