
<template>
  <div class="home">
    <Headers></Headers>
    <Lunbo :list="lunboList"></Lunbo>
    <BannerBot :list="bannerList"></BannerBot>
    <Jingdian :list="jingdianList"></Jingdian>
    <Love :list="loveList"></Love>
    <Zhoumo :list="zhoumoList"></Zhoumo>
  </div>
</template>

<script>
import Headers from '@/pages/home/components/Head'
import Lunbo from '@/pages/home/components/Lunbo'
import BannerBot from '@/pages/home/components/BannerBot'
import Jingdian from '@/pages/home/components/Jingdian'
import Love from '@/pages/home/components/Love'
import Zhoumo from '@/pages/home/components/Zhoumo'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components:{
  	Headers,
  	Lunbo,
  	BannerBot,
  	Jingdian,
  	Love,
    Zhoumo
  },
  data () {
    return {
      chengshi: '',
      bannerList:[],
      lunboList:[],
      jingdianList:[],
      loveList:[],
      zhoumoList:[]
    }
  },
  computed:{
    ...mapState({
      curCity: 'city'
    })
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.curCity)
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
     var res = res.data
      if(res.ret && res.data) {
        const data = res.data
        this.bannerList = data.bannerList
        this.lunboList = data.lunboList
        this.loveList = data.loveList
        this.zhoumoList = data.zhoumoList
        this.jingdianList = data.jingdianList
      }
    }
  },
  mounted () {
    this.chengshi = this.curCity
    this.getHomeInfo()
  },
  activated () {
    if (this.chengshi !== this.curCity ) {
      this.chengshi = this.curCity
      this.getHomeInfo()
    }
  }
}
</script>

<style scoped>

</style>
