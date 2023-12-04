<script>

import AppHeader from './/components/AppHeader.vue'
import axios from 'axios'
import { store } from './store'

export default{
  components: {
    AppHeader
  },
  data () {
  return {
    
    store
  }
  },
  mounted(){
    this.getMovies();
  },
 
  methods: {
    getMovies(){
      axios.get(`${this.store.apiCall}${this.store.apiKey}query=${this.store.searchedMovie}`).then(risultato =>{
        console.log("il log " + risultato.data)
        
        
          
          
      })
      
      
    }
  },
}



</script>

<template>
    <AppHeader />
</template>

<style scoped>

</style>

