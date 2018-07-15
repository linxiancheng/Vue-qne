
<template>
  <div class="remen-head">
 	<div class="remen-top">
			<h3>当前城市</h3>
	    </div>
		<div class="remen-box">
		    <div class="box">
		    	{{this.curCity}} 
			</div>
		</div>
  	<template  v-for="item of list">
	   	<div class="remen-top" :id = " item.initial">
			<h3>{{ item.initial }}</h3>
	    </div>
		<div class="remen-box">
		    <div class="box" 
		    v-for="ls of item.list"
		    @click="remenheadclick(ls.name)"
		    >
		    	{{ ls.name }}
			</div>
		</div>
	</template>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Remenchengshi',
  props:{	
			list: Array
		},
  computed: {
  		...mapState({
  			curCity:'city'
  		})
  },	
  methods:{
  	remenheadclick (city) {
  		this.$store.dispatch('changecity',city)
  		this.$router.push('/')
  	}
  }
}
</script>

<style scoped>
	.remen-head{
		background-color: #f7f7f7;
	}
	.remen-top{
		
		padding: 10px;
	}
	.remen-top h3{
		font-size: 12px;
		text-align: left;
		color: #ccc;
		font-weight: 500;
	}
	.remen-box{
		display: flex;
		flex-wrap:wrap;
		background-color: #fff
	}
	.remen-box .box{
		width: 25%;
		padding: 10px 5px;
		border-right: 1px solid #f1f1f1;
		border-bottom: 1px solid #f1f1f1;
		overflow: hidden;
		box-sizing: border-box;
		background-color: #fff;
		white-space:nowrap;
		text-overflow:ellipsis; 
		font-size: 12px;
		color: #333;
	}
	.remen-box .box a{
		text-decoration: none;
	    color: #333;
	}
</style>
