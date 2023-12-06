<script>

import { store } from '../store';
    export default{
        name: 'AppHeader',

        data(){
            return{
                store,
            }
            
        },
        methods:{
            search(){
                console.log("funziona")
                this.$emit('search')
            }
        }
    }
   
</script>

<template>
    <section>
        <div>
            <a href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/231206/504e88f1a30f968e13f4cdd854aab685.png" alt="netflix-font" border="0"></a>
        </div>
        <div class="flexSearch">
            <input type="text" placeholder="Cerca film e serie tv" v-model="store.searchedMovie">
            <button @click="$emit('search')"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </section>
</template>

<style scoped>
    section{
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgb(0, 0, 0);
        color: white;
        padding: 0 10rem;
    }
    
    input{
        padding: 0.3rem 0.4rem;
        border-radius: 5px;
    }
    button{
        color: white;
        border: none;
        background: none;
        font-size: 20px;
        padding:  0.5rem;
    }
    button:active{
        color: rgb(74, 74, 74);
    }
    img{
        width: 150px;
    }
    .flexSearch{
        display: flex;
        align-items: center;
    }
</style>