
<template>
  <div class="chengshi">
   	<Chengshihead></Chengshihead>
   	<Remenchengshi :list="list"></Remenchengshi>
  </div>
</template>

<script>
import axios from 'axios'
import Chengshihead from '@/pages/chengshiye/components/Chengshihead'
import Remenchengshi from '@/pages/chengshiye/components/Remenchengshi'

export default {
  name: 'Chengshi',
  data(){
  	return {
  		list:[]
  	}
  },
  components:{
  	Chengshihead,
  	Remenchengshi
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/city.json')
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
