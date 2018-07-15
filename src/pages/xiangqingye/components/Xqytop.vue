
<template>
  <div class="xiangqingye">
   	<div class="head-img">
   		<img src="http://img1.qunarzz.com/sight/p0/201406/13/1ddfa4e100ed1e7654313253c4988d53.jpg_600x330_ad2bd71e.jpg">
   		<p>海口观澜湖华谊冯小刚电影公社</p>
   		<span class="linson"  @click="goBack">&#xe622;</span>
   	</div>
    <div class="head-img-bottom">
  		<div class="top">
  			<div class="top-box">
  				<div class="top-box-l">
	  				<span><em>4.9 </em> <em class="fen">分</em>很棒</span>
	  				<p>12350条评论   9条攻略</p>
  				</div>
  				<div class="top-box-r linson">
	  				&#xe604;
  				</div>
  			</div>
  			<div class="top-box">
  				<div class="top-box-l">
	  				<h4>景点简介</h4>
	  				<p>开放时间、贴士</p>
  				</div>
  				<div class="top-box-r linson">
	  				&#xe604;
  				</div>
  			</div>
  		</div>
  		<div class="bottom">
  			<span class="linson">&#xe6e5;</span>
  			<p>海南省海口市观澜湖大道（西线高速往观澜湖温泉1.8公里处)</p>
  			<span class="linson">&#xe604;</span>
  		</div>
  	</div>
  </div>
</template>

<script>


export default {
  name: 'Xqytop',
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
	.head-img{
		position: relative;
		width: 100%;
		height: 0;
		overflow: hidden;
		padding-bottom: 55%;
	}
	.head-img img{
		width: 100%;
		vertical-align: middle;
		display: inline-block;
	}
	.head-img p{
		position: absolute;
		left: 2%;
		bottom: 5%;
		color: #fff;
		width: 80%;
		overflow: hidden;
   		display: -webkit-box;
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp: 2;
    	line-height: 1.2;
    	font-weight: 600;
    	text-align: left;
	}
	.head-img span{
		display: inline-block;
		position: absolute;
		left: 2%;
		top: 2%;
		padding: 10px;
		border-radius: 50%;
		background-color: rgba(0,0,0,.3);
		color: #fff;
		text-align: center;
	}
	.head-img-bottom{
		display: flex;
		border-radius: 5px 5px  0 0;
		background-color: #fff;
		margin-top: -5px;
		z-index: 88;
		position: relative;
		flex-direction:column;
		padding: 5px;
	}
	.top{
		padding: 5px 0 10px 0;
		display: flex;
		flex-direction: row;
		flex: 1
	}
	.top-box{
		display: flex;
		-ms-align-items: center;
		align-items: center;
		justify-content: center;
		text-align: left;
		line-height: 1.2;
		flex: 1;
		border-left: 1px solid #ccc;
	}
	.top-box:nth-child(1){
		border-left:none;
	}
	.top-box-l{
		font-size: 14px;
		flex: 1;
		padding-left: 5px;
	}
	.top-box-l h4{
		font-size: 14px;
		font-weight: 400;
		line-height: 1.8;
	}
	.top-box-l span{
		color: #ff8300;
	}
	.top-box-l span em{
		font-size: 22px;
		font-style: normal;
	}
	.top-box-l p{
		font-size: 12px;
		color: #999;
	}
	.top-box-r{
		color: #999;
		padding-right: 5px;
	}
	.bottom{
		display: flex;
		border-top: 1px solid #ccc;
		padding: 10px;
		flex-direction:row;
		align-items: center;
	}
	.bottom p{
		overflow: hidden;
   		display: -webkit-box;
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp: 2;
    	line-height: 1.2;
    	font-size: 14px;
    	text-align: left;
    	padding: 0 5px;
	}
	.top-box-l span em.fen{
		font-size: 14px;
		padding-right: 10px;
	}
</style>
