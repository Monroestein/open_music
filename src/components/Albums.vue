//    がんばれ!  🌻

<template>
    <div class="container"> 
        <div class="album" v-for="album in albums" :key="album.id">
            
            <h3>{{album.artist}}</h3>
            
            <div class="image_container">
                <img :src="album.front_image" class="album_cover" alt="">
                <div class="listenAlbum" id="playButton">
                    <a :href="album.url" target=”_blank” class="button">
                        <i class="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
            
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
    // computed: {},
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
    min-height:13%;
    display: flex;
    justify-content: center;
    align-items: center;
}

h5{
    min-height: 3.5rem;
    margin-top: .5rem;
}

.album{
    box-shadow: 0px 0px 5px #99999960;
    padding: .7rem;
    width: 30vw;
    max-width: 300px;
    min-width: 200px;
    /* cursor: pointer; */
    filter: grayscale(1) contrast(.9) brightness(1);
    transition: filter .5s;
    margin: 0;
}

.album:hover{
    filter: none;
}

.image_container{
    width: fit-content;
    position: relative;
}

.album_cover{
    width: 100%;
    /* margin-bottom: .5rem; */
}

.listenAlbum{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 20%;
    transition: opacity 1s;
}

.listenAlbum:hover{
    opacity: 90%;
}

a{
    display: block;
    color: #111;
    transition: color .5s;
}

a:hover{
    color: #cf2828;
}

.button{
    background: #FFF;
    border: none;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    text-align: center;
    font-size: larger;
    position: relative;
    cursor: pointer;
    position: relative;
}

i{  
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-left: .1rem;
}

</style>