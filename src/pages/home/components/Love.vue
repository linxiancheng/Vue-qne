<template>
	<div class="love">
		<div class="love-top"><span class="linson color1">&#xe602;</span>猜你喜欢</div>
		<template v-for="list of list">
			<div class="love-box" :key="list.id">
				<a href="javascript:;">
					<div class="love-box-l">
						<img :src="list.img_url">
					</div>
					<div class="love-box-r">
						<div class="love-head">{{list.text}}</div>
						<div class="love-con m-top10"><i>★★★★★</i><span>{{list.pinglun}}</span>条评论</div>
						<div class="love-bot m-top10"><span class="mn">￥{{list.jiner}}</span>起 <span class="fr">{{list.dizhi}}</span></div>
					</div>
				</a>
			</div>
		</template>
		<div class="chakan">查看所有产品</div>
	</div>
</template>
<script>
	export default {
	  name: 'Love',
		props:{
				list: Array
			} 
	}
</script>
<style scoped>
	.love{
		text-align: left;
	}
	.love-top{
		width: 100%;
		height: 45px;
		line-height: 45px;
		box-sizing: border-box;
		padding-left: 10px;
		font-weight: bold;
		font-size: 14px;
	}
	.love-box{
		width: 100%;
		box-sizing: border-box;
		padding: 5px 10px;
	}
	.love-box a{
		text-decoration: none;
		color: #333;
		display: flex;
	}
	.love-box-l{
		width: 100px;
		height: 100px;
		overflow: hidden;
	}
	.love-box-l img{
		display: inline-block;
		width: 100%;
	}
	.love-box-r{
		box-sizing: border-box;
		padding: 10px 0 10px 10px;
		line-height: 1.5;
		flex: 1;
	}
	.love-head{
		font-weight: bold;
		font-size: 14px;
	}
	.love-con{
		font-size: 12px;
		color: #666;
	}
	.love-con i{
		font-style: normal;
		color: #ffb436;
		margin-right: 15px;
	}
	.love-bot{
		font-size: 12px;
		color: #666;
	}
	.love-bot .mn{
		font-size: 14px;
		color: #ff8300;
	}
	.love-bot .fr{
		width: 60px;
		float: right;
		display: block;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis; 
		text-align: right;
	}
	.m-top10{
		margin-top: 10px;
	}
	.color1{
		color: #ff4444;
		display: inline-block;
		margin: 0 2px;
	}
	.chakan{
		font-size: 14px;
		color: #00afc7;
		text-align: center;
		line-height: 40px;
	}
</style>