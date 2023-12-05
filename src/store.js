import { reactive } from 'vue'

export const store = reactive({
    apiCall: "https://api.themoviedb.org/3/search/movie",
    apiKey: 'f2968eda5637985218434bb70e4158f3',
    searchedMovie: "",
    movies: []

   
    
});




