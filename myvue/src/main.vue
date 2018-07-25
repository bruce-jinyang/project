<template>
	<div>
		<div class="tabs">
	  		<ul>
	  		 	<router-link tag="li" exact :to='{name:"home",params:{id:1,name:"test"}}'>
	  		 		<div>
	  		 			<img src="./assets/images/home.svg" />
	  		 		</div>
	  		 		<div>
	  		 			首页
	  		 		</div>
	  		 	</router-link>
	  		 	<router-link tag="li" :to='{name:"explorer"}' exact>
	  		 		<div>
	  		 			<img src="./assets/images/category.svg" />
	  		 		</div>
	  		 		<div>
	  		 			分类
	  		 		</div>
	  		 	</router-link>
	  		 	<router-link tag="li"  :to='{name:"cart"}' exact>
	  		 		<div>
	  		 			<img src="./assets/images/cart.svg" />
	  		 		</div>
	  		 		<div>
	  		 			购物车
	  		 		</div>
	  		 	</router-link>
	  		 	<router-link tag="li" :to='{name:"me"}' exact>
	  		 		<div>
	  		 			<img src="./assets/images/me.svg" />
	  		 		</div>
	  		 		<div>
	  		 			我
	  		 		</div>
	  		 	</router-link>
	  		 	<!--<router-link tag="li"  :to='{name:"book"}'>
	  		 		<div>
	  		 			<img src="./assets/images/me.svg" />
	  		 		</div>
	  		 		<div>
	  		 			切换
	  		 		</div>
	  		 	</router-link>-->
	  		</ul>
	  		
	  	</div>
	  	<div class="content">
	  		<router-view></router-view>
	  	</div>
	</div>
</template>

<script>
	import data from "./fixtures/home.json"
	export default({
		created(){
			console.log(data)
		}
	})
</script>

<style>
</style>