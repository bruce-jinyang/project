import Vue from "vue"
import Vueroutes from "vue-router"
import Home from "@/Home.vue"
import Cart from "@/Cart.vue" 
import Explorer from "@/Explorer.vue"
import Me from "@/Me.vue"
import Main from "@/main.vue"
import book from "@/book/bookList.vue"
Vue.use(Vueroutes)

export default new Vueroutes({
	mode:"history",
	base:__dirname,
	linkActiveClass:'active',
	routes:[
	
		{
			name:"main",
			path:"/",
			component:Main,
			children:[
				{
					path:"home/:id/:name",
					name:'home',
					component:Home
				},
				{
					path:"Cart",
					name:'cart',
					component:Cart
				},
				{
					path:"Explorer",
					name:'explorer',
					component:Explorer
				},
				{
					path:"Me",
					name:'me',
					component:Me
				}
			]
		},
		{
			name:"book",
			path:"/bookDetail",
			component:book
		}
	]
}
	
)
