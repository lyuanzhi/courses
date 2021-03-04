import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './view/login.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location){
	return originalPush.call(this, location).catch(err => err)
}

export default{
	routes:[
		{
			path:'/login',
			component: Login
		}
	]
}