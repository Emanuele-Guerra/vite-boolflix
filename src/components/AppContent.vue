<script>
import { store } from '../store.js'
    export default{
        name: "AppContent",
        data(){
            return{
                store,
                languages: {
                    en: {
                        original_language: "en",
                        path: "/public/gb.png",
                        condiction: "true"
                    },
                    ita: {
                        original_language: "it",
                        path: "/public/it.png",
                        condiction: "true"
                    },
                    jap: {
                        original_language: "ja",
                        path: "/public/jp.png",
                        condiction: "true"
                    },
                    tedesco: {
                        original_language: "de",
                        path: "/public/de.png",
                        condiction: "true"
                    },
                } 
            }
           
        },
        
    }
</script>

<template>
    <section>
        <div v-for="film in store.movies" class="backCard">
                <h3>{{ film.title }}</h3>
                <h5>{{ film.original_title }}</h5>
                <img :src="languages.path" alt="" v-if="film.original_language = languages.original_language">
                <p v-else="film.original_language"></p>
                <p>{{ film.vote_average }}</p>
            <div v-for="cover in store.movies" class="frontCard">
                <img src="" alt="">

            </div>
        </div>
        
    </section>
        
            
        

</template>

<style scoped>
    .backCard{
        width: 250px;
        height: 350px;
        color: white;
        background-color: black;
        margin: 0.5rem;
        text-align: center;
        padding-top: 1rem;
        position: relative;
        
    }
    .frontCard{
        position: absolute;
        width: 250px;
        height: 350px;
        
        top: 0;
        left: 0;
    }
    section{
        width: 90%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    h3{
        padding-bottom: 0.5rem;
    }
    p{
        padding-bottom: 0.5rem;
    }
    h5{
        padding-bottom: 0.5rem;
    }
</style>

