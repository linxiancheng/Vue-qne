<template>
	<div class="zhoumo">
		<div class="zhoumo-top">周末去哪儿</div>
		<template v-for="list of list">
			<div class="zhoumo-box" :key="list.id">
				<a href="javascript:;">
					<div class="zhoumo-top-box-l">
						<img :src="list.img_url">
					</div>
					<div class="zhoumo-box-r">
						<h3>{{list.text}}</h3>
						<p>{{list.jieshao}}</p>
					</div>
				</a>
			</div>
		</template>
		<div class="zhoumo-sm"><span class="linson">&#xe641;</span><em>票面价</em>是指通过景区指定窗口售卖的纸质门票上标注的价格</div>
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
	.zhoumo{
		text-align: left;
	}
	.zhoumo-top{
		line-height: 40px;
		padding: 0 10px;
		box-sizing: border-box;
	}
	.zhoumo-box a{
		text-decoration: none;
		color: #333;
	}
	.zhoumo-top-box-l{
		width: 100%;
		height: 0;
		padding-bottom: 38%;
		overflow: hidden;
	}
	.zhoumo-top-box-l img{
		width: 100%;
	}
	.zhoumo-box-r{
		line-height: 1.8;
		padding:5px 10px;
		box-sizing: border-box;
	}
	.zhoumo-box-r h3{
		font-weight: 400;
		font-size: 14px;
	}
	.zhoumo-box-r p{
		color: #999;
		font-size: 12px;
	}
	.zhoumo-sm{
		color: #666;
		font-size: 12px;
		line-height: 1.8;
	}
	.zhoumo-sm em{
		font-style: normal;
		font-weight: bold;
	}
</style>