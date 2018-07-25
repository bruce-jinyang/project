<template>
  <div id="app">
  	<transition name="slide-fade">
  		test
	    <router-view/>
  	</transition>
  	
    <!--<img src="./assets/logo.png">-->
  </div>
</template>

<script>
	import "./assets/less/site.less"
export default {
//name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active{
	transition:all .3s ease;
}

.slide-fade-leave-active{
	transition:all .3s cubic-bezier(1.0,0.5,0.8,1.0);
}
.slide-fade-enter , .slide-fade-leave-active{
	transform:translateX(-430px);
	opacity: 0;
}
</style>
