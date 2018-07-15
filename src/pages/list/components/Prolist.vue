
<template>
<div class="list">
  <div class="list-pro" v-for="item of list" :key="item.id">
	<router-link :to="'/xqy/' + item.id" class="pro">
			<div class="pro-l">
				<img :src="item.imgUrl">
			</div>
			<div class="pro-r">
				<div class="pro-name">{{item.name}}</div>
				<div class="pro-pl">★★★★★<em>{{item.pinglun}}评论</em></div>
				<div class="pro-jg">
					<div class="pro-jg-top">￥<span>{{item.jiage}}</span><em>起</em></div>
					<em>{{item.didian}}</em>
				</div>
				<div class="pro-bq"> <span v-for="lists of item.biaoqian" >{{lists.name}}</span></div>
			</div>
	</router-link>
	<ul>
		<li v-for="lists of item.taopiao" >
			<div class="pro-box-jg">{{lists.name}}  <span><em>￥</em>{{lists.jiage}}</span></div>
		</li>
	</ul>
  </div>
</div>
</template>

<script>

export default {
  name: 'ProList',
  props:{
    list: Array
  }

}
</script>

<style scoped>
	.list{
		background-color: #f5f5f5;
	}
	.list-pro{
		display: flex;
		padding: 10px;
		flex-direction:column;
		text-align: left;
		line-height: 1.7;
		margin-top: 10px;
		background-color: #fff;
	}
	.pro{
		display: flex;
		padding-bottom: 10px;
		text-decoration: none;
		color: #333;
	}
	.pro-l{
		width: 100px;
		height: 100px;
	}
	.pro-l img{
		width: 100%;
		vertical-align: middle;
	}
	.pro-r{
		margin-left: 10px;
		flex: 1;
	}
	.pro-r em{
		font-style: normal;
	}
	.pro-name{
		font-weight: 600;
		font-size: 14px;
	}
	.pro-pl{
		font-size: 12px;
		color: #ff8300;
	}
	.pro-pl em{
		display: inline-block;
		padding: 0 5px;
		color: #333;
	}
	.pro-jg{
		display: flex;
		font-size: 12px;
		justify-content: space-between;
		align-items: center;

	}
	.pro-jg-top{
		color: #ff8300;
	}
	.pro-jg-top span{
		font-size: 18px;
		display: inline-block;
		margin: 0 5px 0 -3px;
	}
	.pro-jg-top em{
		color: #333;
	}
	.pro-bq span{
		display: inline-block;
		padding: 2px 3px;
		font-size: 10px;
		border: 1px solid #ff8300;
		border-radius: 2px;
		line-height: 1;
		color: #ff8300;
		margin-right: 4px;
	}

	.list-pro ul li{
		border-top: 1px solid #f5f5f5;
	}
	.list-pro ul li .pro-box-jg{
		display: inline-block;
		width: 100%;
		text-decoration: none;
		text-align: left;
		color: #999;
		font-size: 12px;
		line-height: 40px;
	}
	.list-pro ul li .pro-box-jg span{
		float: right;
		color: #ff8300;
		font-size: 18px;
	}
	.list-pro ul li .pro-box-jg span em{
		font-size: 12px;
		font-style: normal;
	}
</style>
