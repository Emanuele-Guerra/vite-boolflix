<script>

import AppHeader from './/components/AppHeader.vue'
import AppMovie from './/components/AppMovie.vue'
// import AppSeries from './/components/AppSeries.vue'
import axios from 'axios'
import { store } from './store'

export default {
	components: {
		AppHeader,
		AppMovie,
		// AppSeries
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
			axios.request(options).then(result => {
				this.store.movies = result.data.results
			})
				.catch(function (error) {
					console.error(error);
				});
		},
	}
};




</script>

<template>
	<AppHeader @search="getMovies" />



	<h2>MOVIES</h2>
	<section class="wrapper">
		<AppMovie v-for="film in this.store.movies" :movieData="film" />

	</section>


	<!-- <h2>TV SERIES</h2> -->
	<!-- <AppSeries /> -->
</template>

<style scoped>
h2 {
	text-align: center;
	color: white;
	margin: 1rem;
}

.wrapper {
	width: 90%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>

