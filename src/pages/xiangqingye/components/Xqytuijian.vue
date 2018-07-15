<template>
  <div class="tuijian">
   <div class="tuijian-top"><h3>看了该景点的人还看了</h3></div>
   <template v-for="item in lists">
	   <div class="tuijian-list">
		   	<div class="tj-l">
		   		<img :src="item.img_url">
		   	</div>
		   	<div class="tj-r">
		   		<h4>{{item.text}}<span>￥<em>{{item.jiner}}</em><em>起</em></span></h4>
		   		<p><span>★★★★★</span>{{item.pinglun}}条评论</p>
		   		<p>{{item.dizhi}}</p>
		   	</div>
	   </div>
   </template>
  </div>
</template>

<script>
	export default {
	  name: 'Xqytuijian',
	  data: function(){
	  	return {
	  		lists:[{
	  			id:'001',
	  			img_url:'http://img1.qunarzz.com/sight/p0/1508/2f/e615bc3c8e0cf46d9fb92c58ac305f45.water.jpg_228x168_8b75fc61.jpg',
	  			text:'世界公园（4A）',
	  			jiner:'99',
	  			dizhi:'北京·丰台区',
	  			pinglun:'3638'
	  		},
	  		{
	  			id:'002',
	  			img_url:'http://img1.qunarzz.com/sight/p0/1501/d0/d00d72664c3e73d8.water.jpg_200x200_d2b5720b.jpg',
	  			text:'北京天文馆',
	  			jiner:'138',
	  			dizhi:'海淀区',
	  			pinglun:'542'
	  		},
	  		{
	  			id:'003',
	  			img_url:'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
	  			text:'北京野生动物园',
	  			jiner:'68',
	  			dizhi:'大兴区',
	  			pinglun:'10926'
	  		},
	  		{
	  			id:'004',
	  			img_url:'http://img1.qunarzz.com/sight/p0/1601/f5/f5069b6e5f9488b590.water.jpg_200x200_587c485c.jpg',
	  			text:'德云社相声大会广德楼店',
	  			jiner:'90',
	  			dizhi:'西城区',
	  			pinglun:'504'
	  		},
	  		{
	  			id:'005',
	  			img_url:'http://img1.qunarzz.com/sight/p0/1503/dc/dc651cd2e01fb900.img.jpg_200x200_04f5b7b7.jpg',
	  			text:'南宫温泉水世界',
	  			jiner:'59',
	  			dizhi:'南宫文化休闲广场西侧',
	  			pinglun:'1134'
	  		}]
	  	}
	  }
	}
</script>

<style scoped>
	.tuijian{
		padding: 10px 0;
		text-align: left;
	}
	.tuijian-top{
		border-bottom: 1px solid #e1e1e1;
		padding:10px;
	}
	.tuijian-top h3{
		border-left: 3px solid #00bcd4;
		padding-left: 5px;
		font-size: 16px;
		font-weight: 400;
		color: #00afc7;
	}
	.tuijian-list{
		display: flex;
		padding: 10px;
	}
	.tj-l{
		width: 80px;
		height: 80px;
		overflow: hidden;
	}
	.tj-l img{
		display: inline-block;
		vertical-align: middle;
		width: 100%;
		height: 100%;
	}
	.tj-r{
		flex: 1;
		padding-left: 10px;
		overflow: hidden;
		box-sizing: border-box;
	}
	.tj-r h4{
		font-weight: normal;
		font-size: 14px;
	}
	.tj-r h4 span{
		float: right;
		font-size: 12px;
		color: #ff9800;
	}
	.tj-r h4 span em{
		font-style: normal;
		font-size: 18px;

	}
	.tj-r h4 span em:nth-child(2){
		color: #999;
		font-size: 12px;
	}
	.tj-r p{
		font-size: 12px;
		color: #999;
		line-height: 1.8;
		
	}
	.tj-r p span{
		padding-right: 20px;
		color: #ff9800;
		margin-top: 20px;
		display: inline-block;
	}
</style>