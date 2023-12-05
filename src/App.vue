<script>

import AppHeader from './/components/AppHeader.vue'
import AppContent from './/components/AppContent.vue'
import axios from 'axios'
import { store } from './store'

export default{
  components: {
    AppHeader,
    AppContent
  },
  data () {
  return {
    
    store
  }
  },
  mounted(){
   
},

methods: {
	theLog(){
		console.log("the log")
	},
	
	getMovies(){
		const options = {
        method: 'GET',
        url: this.store.apiCall,
        params: {include_adult: 'false',
		language: 'en-US',
		page: '1',
		api_key: this.store.apiKey,
		query: this.store.searchedMovie,
		},
		
        headers: {
          accept: 'application/json',
          
        }
	};
	console.log("VALORE DI 	query  " + this.query)
	
	axios.request(options).then(result =>{
		
		this.store.movies.push(...result.data)
		console.log(this.store.movies)
	})
	
	.catch(function (error) {
		console.error(error);
	});
	
      
    }
  },
}



</script>

<template>
    <AppHeader @search="getMovies"/>
    <AppContent />
</template>

<style scoped>

</style>

