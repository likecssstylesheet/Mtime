import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		isShow:true,
		isHide:false
	},
	mutations:{
		tabberShow(state){
			state.isShow = false;
			state.isHide = true
		},
		tabberHide(state){
			state.isShow = true;
			state.isHide = false

		}
	}
})

export default store
