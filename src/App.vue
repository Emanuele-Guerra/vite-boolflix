<script>

import AppHeader from './components/AppHeader.vue'
import AppMovie from './components/AppMovie.vue'
import AppSeries from './components/AppSeries.vue'
import axios from 'axios'
import { store } from './store'

export default {
	components: {
		AppHeader,
		AppMovie,
		AppSeries
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
			//creo oggetto opzioni generico	
			const optionz = {
				method: 'GET',
				params: {
					include_adult: 'true',
					language: 'it-IT',
					page: '3',
					api_key: this.store.apiKey,
					query: this.store.searchedMovie
				}
			}

			//imposto url per serie tv e chiamo
			optionz.url = this.store.TVCall

			axios.request(optionz).then(result => {
				this.store.series = result.data.results
				console.log("serietv ", this.store.series.length)
			})

			//imposto url per film e chiamo
			optionz.url = this.store.filmCall

			axios.request(optionz).then(result => {
				this.store.movies = result.data.results
				console.log("movies ", this.store.movies.length)
			})
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

	<h2>TV SERIES</h2>
	<section class="wrapper">
		<AppSeries v-for="tv in this.store.series" :serieData="tv" />
	</section>
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

