<template>
	<div class="pro-top">
		<div class="pro-dead">
			<h3><span class="linson color2">&#xe633;</span>本周热门榜单 </h3>
			<div class="pro-dead-r">全部榜单〉</div>
			<div style="clear: both;"></div>
		</div>
		<div class="pro-box">
			<div class="pro-boxs">
				<template v-for="list of list">
					<div class="pro-top-list" :key="list.id">
						<a href="javascript:;">
							<img :src="list.list_imgs" />
							{{list.texts}}
							<div class="jiage">
								<span>￥{{list.jiner}}</span>
								起
							</div>
						</a>
					</div>
				</template>
				<div style="clear: both;"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	  name: 'Jingdian',
	  props:{
			list: Array
		}
	}
</script>
<style scoped>
	.pro-dead{
		width: 100%;
		height: 47px;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 10px;
		line-height: 47px;
		text-align: left;
	}
	.pro-dead h3{
		display: inline-block;
		width: 50%;
		font-size: 14px;
	}
	.pro-dead-r{
		float:right;
		font-size: 12px;
		font-weight: bold;
	}
	.pro-top{
		background-color: #e6e4e4;
		padding: 10px 0;
	}
	.pro-box{
		width: 100%;
		background-color: #fff;
    	white-space: nowrap;
	}
	.pro-boxs{
		display: flex;
		overflow-x: scroll;
    	white-space: nowrap;
	}
	.pro-top-list{
		width: 100px;
		height: 140px;
		float: left;
		margin-left: 10px;
	}
	.pro-top-list a img{
		display: block;
		width: 100px;
		height: 100px;
	}
	.pro-top-list a{
		display: block;
		color: #333;
		text-decoration: none;
		font-size: 12px;
		line-height: 1.5;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis; 
	}
	.jiage span{
		color: #ff8300;
	}
	.color2{
		color: red;
		display: inline-block;
		margin: 0 2px;
	}
</style>