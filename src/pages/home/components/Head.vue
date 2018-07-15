<template>
	<div class="head">
		<div class="head-left">
			<span class="linson fh-ico">&#xe622;</span>
		</div>
		<div class="head-center">
			<span class="linson ss-ico">&#xe63c;</span>
			景点/目的地/主题
		</div>
		<router-link to="/csy">
			<div class="head-right">
				{{this.city}} 
				<span class="linson ">&#xe614;</span>
			</div>
		</router-link>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
	  name: 'Headers',
	  methods: {
		    goBack () {
		      window.history.length > 1
		        ? this.$router.go(-1)
		        : this.$router.push('/')
		    }
	   },
	  computed: {
	  		...mapState(['city'])
	   }
	}
</script>
<style scoped>
	.head{
		height: 40px;
		background-color: #00afc7;
		display: flex;
		line-height: 40px;
		align-items: center;
	}
	.head-left{
		width: 40px;
		text-align: center;
		float: left;
		color: #fff;
	}
	.head-right{
		
		text-align: center;
		float: right;
		color: #fff;
		font-size: 12px;
		padding: 0 10px;
		overflow: hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.head-center{
		color: #ccc;
		flex: 1;
		font-size: 14px;
		height: 30px;
		line-height: 28px;
		border-radius: 5px;
		background-color: #fff;
		text-align: left;
		padding-left: 5px;
	}
	.fh-ico{
		font-size: 14px;
		color: #fff;
		text-decoration: none;
	}
	.ss-ico{
		font-size: 16px;

	}
</style>