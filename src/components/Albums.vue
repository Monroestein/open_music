//    がんばれ!  🌻

<template>
    <div class="container"> 
        <div class="album" v-for="album in albums" :key="album.id">
            <h3>{{album.artist}}</h3>
            <img :src="album.front_image" class="album_cover" alt="">
            <h5>{{album.album}}</h5>
        </div>    
    </div>
</template>

<script>

export default {
    name: 'album-comp',
    props: {
        albums:{
            type: Array,
            required:true
        }
    },
    data: function(){
        return {}
    },
    computed: {
    },
    // methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

.container{
    margin: 2rem auto;
    max-width: 1500px;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
}

h3{
    font-size: 1.0625rem;
    margin-bottom: .9rem;
}

.album{
    box-shadow: 0px 0px 5px #99999960;
    padding: .7rem;
    width: 30vw;
    max-width: 300px;
    min-width: 200px;
    cursor: pointer;
    filter: grayscale(1) contrast(.9) brightness(1);
    transition: filter .5s;
}

.album:hover{
    filter: none;
}

.album_cover{
    width: 100%;
    margin-bottom: .5rem;
}
</style>