
<template>
  <div class="list">
    <Protop></Protop>
    <Xuanze></Xuanze>
    <Prolist :list="list"></Prolist>
  </div>
</template>

<script>
import axios from 'axios'
import Protop from '@/pages/list/components/Protop'
import Xuanze from '@/pages/list/components/Xuanze'
import Prolist from '@/pages/list/components/Prolist'
export default {
  name: 'List',
  data () {
    return{
      list:[]
    }
  },
  components:{
  	Protop,
    Prolist,
    Xuanze
  },
   methods: {
    getHomeInfo: function () {
      axios.get('/api/list.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
     if(res && res.data) {
        const data = res.data
        this.list = data
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
