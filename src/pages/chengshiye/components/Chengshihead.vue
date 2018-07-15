
<template>
  <div class="chengshi-head">
   	<div class="top">
		<span class="linson"  @click="goBack">&#xe622;</span>
	   	城市选择
    </div>
    <div class="head-box">
    	<div class="box cur">境内</div>
    	<div class="box">境外·港澳台</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Chengshihead',
  methods: {
		    goBack () {
		     this.$router.push('/')
		    }
	}
}
</script>

<style scoped>
	.chengshi-head{
		background-color: #00bcd4;
	}
	.top{
		color: #fff;
		line-height: 40px;
		position: relative;
	}
	.top span{
		position: absolute;
		left: 0;
		top: 0;
		padding: 0 10px;
	}
	.head-box{
		display: flex;
		justify-content: center;
		padding: 10px 40px;
	}
	.head-box .box{
		flex: 1;
		background-color: #00bcd4;
		line-height: 1.5;
		font-size: 14px;
		color: #fff;
		border: 1px solid #fff;
	}
	.head-box .box.cur{
		color: #00bcd4;
		background-color: #fff;
	}
</style>
