<script>
import { store } from "../store.js"
export default {
    name: 'AppSeries',
    props: {
        serieData: Object
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front frontCard">
                <img :src="store.posterCall + serieData.poster_path" alt="">

            </div>
            <div class="flip-card-back backCard">
                <h3>{{ serieData.name }}</h3>
                <h5>{{ serieData.original_name }} </h5>
                <img v-if="this.store.flags.includes(serieData.original_language)"
                    :src="`${serieData.original_language}.png`" alt="" class="flags">
                <p v-else>{{ serieData.original_language }}</p>
                <p>{{ serieData.vote_average }}</p>

            </div>
        </div>

    </div>
</template>

<style scoped>
.backCard {

    color: white;
    background-color: black;
    margin: 0.5rem;
    text-align: center;
    padding-top: 1rem;
    position: relative;
}

.flags {
    width: 30px;
}

.frontCard {
    position: absolute;
    width: 250px;
    height: 350px;

    top: 0;
    left: 0;
}



.frontCard img {
    width: 100%;
    height: 100%;
}



h3 {
    padding-bottom: 0.5rem;
}

p {
    padding-bottom: 0.5rem;
}

h5 {
    padding-bottom: 0.5rem;
}



.flip-card {
    background-color: transparent;
    margin: 0.3rem;
    width: 250px;
    height: 350px;
    perspective: 1000px;
}


.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}


.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}


.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {

    color: black;
}

/* Style the back side */
.flip-card-back {

    color: white;
    transform: rotateY(180deg);
}
</style> 