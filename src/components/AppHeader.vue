<script>
    export default{
        name: 'AppHeader'
    }
   
</script>

<template>
    <section>
        <div>
            <h1>BoolfliX</h1>
        </div>
        <div>
            <input type="text" placeholder="Cerca film e serie tv" v.model="store.searchedMovie">
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
        background-color: rgb(16, 16, 16);
        color: white;
        padding: 0 10rem;
    }
    h1{
        color: rgb(191, 0, 0);
        font-size: 32px;
    }
    input{
        padding: 0.2rem 0.5rem;
        border-radius: 5px;
    }
</style>