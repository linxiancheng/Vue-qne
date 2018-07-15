
<template>
  <div class="xiangqing">
    <Xqytop></Xqytop>
    <Xqycant></Xqycant>
	<Xqypinglun></Xqypinglun>
	<Xqytuijian></Xqytuijian>
  </div>
</template>

<script>

import Xqytop from '@/pages/xiangqingye/components/Xqytop'
import Xqycant from '@/pages/xiangqingye/components/Xqycant'
import Xqypinglun from '@/pages/xiangqingye/components/Xqypinglun'
import Xqytuijian from '@/pages/xiangqingye/components/Xqytuijian'
export default {
  name: 'Xiangqing',
  components:{
    Xqytop,
    Xqycant,
    Xqypinglun,
    Xqytuijian
  }
}
</script>

<style scoped>

</style>
