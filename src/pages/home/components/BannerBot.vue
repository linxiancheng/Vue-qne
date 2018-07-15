<template>
	<div class="banner-bottom"> 
		<template v-for="list of list">
				<div class="banner-list" :key="list.id">
					<router-link to="/list">
						<img :src="list.list_img" />
						{{list.text}}
					</router-link>
				</div>
		</template>
		<div style="clear: both;"></div>
	</div>
</template>
<script>
	export default {
	 name: 'BannerBot',
	 props:{
	 	list:Array
	 }
	 
	}
</script>
<style scoped>
	.banner-bottom{
		width: 100%;
		margin-bottom: 5px; 
	}
	.banner-list{
		width: 25%;
		height: 80px;
		float: left;
	}
	.banner-list a{
		display: block;
		font-size: 12px;
		color: #333;
		text-decoration: none;
		text-align: center;
	}
	.banner-list a img{
		display: block;
		width: 55px;
		height: 55px;
		margin: 5px auto;
	}
</style>