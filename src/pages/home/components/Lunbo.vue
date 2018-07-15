<template>
	<div class="banner">
		<swiper  :options="swiperOption"  ref="mySwiper" v-if="showLunbo">
		    <swiper-slide v-for="lists of list" :key="lists.id">
				<a href="javascript:;">
					<img :src="lists.url">
				</a>
		    </swiper-slide>
		 	<div class="swiper-pagination" slot="pagination"></div>  
		 </swiper>
	</div>
</template>
<script>
	export default {
		name: 'Lunbo',
		props:{
			list: Array
		},
		data: function(){
				  	return {
					  	swiperOption: {  
		                    pagination: '.swiper-pagination',  
		                    loop: true,
		                    autoplay:3000
		                }
		                
				  	}
				 },
		computed:{//计算属性
			showLunbo () {
				return this.list.length
			}
		}		 
	}
</script>
<style scoped>
.banner >>> .swiper-pagination-bullet-active{
		background-color: #fff;
	}
	.banner{
		width: 100%;
		height: 0;
		overflow: hidden;
		background-color: #ccc;
		padding-bottom: 25%;
	}
	.banner img{
		width: 100%;
	}
</style>