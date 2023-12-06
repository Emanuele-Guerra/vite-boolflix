import { reactive } from 'vue'

export const store = reactive({
    apiCall: "https://api.themoviedb.org/3/search/movie",
    TVCall: "https://api.themoviedb.org/3/search/tv",
    apiKey: 'f2968eda5637985218434bb70e4158f3',
    searchedMovie: "",
    movies: [],
    series: [],
    posterCall: "https://image.tmdb.org/t/p/w342",
    flags: ["de", "en", "fi", "fr", "it", "ja", "ko", "no", "pt", "zh", "es"]
    });




