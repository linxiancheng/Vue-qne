
<template>
  <div class="list-xz">
  	<div class="box">全部分类 <span class="linson">&#xe612;</span></div>
  	<div class="box">推荐排序 <span class="linson">&#xe612;</span></div>
  </div>
</template>

<script>

export default {
  name: 'Xuanze'

}
</script>

<style scoped>
	.list-xz{
		display: flex;
		justify-content: space-around;
		border-top: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
		padding: 5px 0;
		
	}
	.list-xz .box{
		flex: 1;
		line-height: 1.8;
		font-size: 14px;
		position: relative;
		
	}
	.list-xz .box:nth-child(2){
		border-left: 1px solid #f5f5f5;
	}
	
</style>
