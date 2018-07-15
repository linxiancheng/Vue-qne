<template>
  <div class="taopiao">
   	<div class="taopiao-top">
   		<div class="hover">门票</div>
   		<div>一日游</div>
   	</div>
   	<div class="taopiao-bot">
   		<h3><span class="linson color">&#xe657;</span>门票</h3>
   		<ul>
   			<li>
   				<a href="javascript:;">
   					<p>冯小刚电影公社两街一院成人票<em>1942民国街+南洋街+芳华小院</em></p>
   					<span>
   						￥<em>128</em>
   						<i class="linson">起&#xe612;</i>
   					</span>
   				</a>
   			</li>

   			<li>查看剩余产品<span class="linson">&#xe612;</span></li>
   		</ul>
   	</div>
  </div>
</template>

<script>
	export default {
	  name: 'Xqycant',
	}
</script>

<style scoped>
	.taopiao-top{
		display: flex;
		line-height: 1.6;
		justify-content: space-around;
		border-bottom: 1px solid #ccc;
	}
	.taopiao-bot h3{
		line-height: 35px;
		text-align: left;
		padding-left: 10px;
	}
	.taopiao-top div{
		width: 30%;
		padding: 5px 0;
		margin-bottom: -1px; 
	}
	.taopiao-top div.hover{
		border-bottom: 2px solid #00afc7;
	}
	.taopiao-bot ul li{
		border-top: 1px solid #ccc;
		line-height: 1.8;
		padding: 5px;
		font-size: 14px;
	}
	.taopiao-bot ul li a{
		text-decoration: none;
		color: #333;
		font-size: 14px;
		display: flex;
		text-align: left;
		justify-content: space-between;
	}
	.taopiao-bot ul li a p{
		width: 75%;
		overflow: hidden;
   		display: -webkit-box;
    	-webkit-box-orient: vertical;
    	-webkit-line-clamp: 2;
    	line-height: 1.8;
    	box-sizing: border-box;
    	padding-left: 10px;
	}
	
	.taopiao-bot ul li a p em{
		font-style: normal;
		font-size: 12px;
		color: #999;
	}
	.taopiao-bot ul li a span{
		color: #ff9800;
		font-size: 12px;
	}
	.taopiao-bot ul li a span em{
		font-style: normal;
		font-size: 18px;
		
	}
	.taopiao-bot ul li a span i{
		color: #999;
		font-size: 12px;
	}
	.color{
		color: #00bcd4;
		padding-right: 10px;
	}

</style>