
<template>
  <div class="list-top">
  	<div class="linson list-fh" @click="goBack">&#xe622;</div>
  	<div class="list-ipu" >
  		<input type="text" name="" placeholder="请输入城市或景点">
  		<span class="linson f-c">&#xe638;</span>
  	</div>
  	<div class="list-ss">搜索</div>
  </div>
</template>

<script>

export default {
  name: 'Protop',
   methods: {
		    goBack () {
		      window.history.length > 1
		        ? this.$router.go(-1)
		        : this.$router.push('/')
		    }
	   }
}
</script>

<style scoped>
	.list-top{
		display: flex;
		justify-content: space-between;
		padding: 5px 10px;
		align-items: center;
	}
	.list-fh{
		flex: 1;
		text-align: left;
	}
	.list-ipu{
		flex: 5;
		padding: 5px 10px;
		background-color: #f2f2f2;
		border-radius:50px;
		display: flex;
		justify-content: space-between;
	}
	.list-ipu input{
		background-color: #f2f2f2;
		border: none;
		font-size: 14px;
		text-align: center;
		flex: 1;
		margin-right: 10px;
	}
	.list-ss{
		font-size: 14px;
		flex: 1;
		padding: 5px 0;
	}
	.f-c{
		color: #d0d0d0;
		cursor: pointer;
	}
</style>
