<script>

import AppHeader from './/components/AppHeader.vue'
import AppContent from './/components/AppContent.vue'
import axios from 'axios'
import { store } from './store'

export default {
	components: {
		AppHeader,
		AppContent
	},
	data() {
		return {

			store
		}
	},
	mounted() {

	},

	methods: {


		getMovies() {
			const options = {
				method: 'GET',
				url: this.store.apiCall,
				params: {
					include_adult: 'false',
					language: 'it-IT',
					page: '1',
					api_key: this.store.apiKey,
					query: this.store.searchedMovie,
				},


			};
			console.log("VALORE DI STORE  " , this.store)

			console.log(options)
			axios.request(options).then(result => {

				this.store.movies = result.data.results
				console.log("VALORE DI MOVIES " , this.store.movies)
				console.log("VALORE DELLA QUERY " , options.params.query)
			})

				.catch(function (error) {
					console.error(error);
				});


		}
	},
}



</script>

<template>
	<AppHeader @search="getMovies" />
	<AppContent />
</template>

<style scoped></style>

