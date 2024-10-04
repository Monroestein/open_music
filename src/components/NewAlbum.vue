//    がんばれ!  🌻

<template>
    <div class="container"> 
        <div class="button_container">
            <button class="addButton" @click="someoneWantsToAddAlbum">Add Album</button>
        </div>
        <div class="form_container" v-if="showForm">
            <form>
                
                <!-- Artist -->
                <label for="artist-name">
                    <h5>Artist</h5>
                </label>
                <input type="text" id="artist-name" autocomplete="off" autocapitalize="words" v-model="artist">

                <!-- Album -->
                <label for="album-name">
                    <h5>Album</h5>
                </label>
                <input type="text" id="album-name" autocomplete="off" autocapitalize="words" v-model="album">    

                <!-- Genre -->
                <label for="genres">
                    <h5>Genre</h5>
                </label>
                <select id="genres" v-model="genre">
                    <option value="none">Choose a genre</option>
                    <option value="funk">Funk</option>
                    <option value="grunge">Grunge</option>
                    <option value="metal">Metal</option>
                    <option value="pop">Pop</option>
                    <option value="hiphop">Hip Hop</option>
                    <option value="rock">Rock</option>
                </select>

                <!-- Streaming -->
                <label for="share-link">
                    <h5>Streaming</h5>
                </label>
                <input type="text" id="share-link" placeholder="e.g. Spotify share link" autocomplete="off" v-model="streaming">

                <!-- Album Cover -->
                 <label for="album-cover">
                    <h5>Album Cover</h5>
                 </label>
                 <input type="text" id="album-cover" v-model="cover" placeholder="Image URL">
               
                <button @click="addAlbum">Add</button>
               
            </form>
        </div>  
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'new_album-comp',
    // props: {},
    data: function(){
        return {
            artist:"",
            album:"",
            genre:"none",
            streaming:"",
            cover:"",
            showForm: false
        }
    },
    // computed: {},
    methods: {
        ...mapActions(['addAlbumToState']),
        someoneWantsToAddAlbum(){
            this.showForm = true
        },
        addAlbum(){
            let valid = true

            //validate

            if(valid){
                let newAlbum = {
                    artist: this.artist,
                    album: this.album,
                    genre: this.genre,
                    url: this.streaming,
                    front_image: this.cover
                } 

                console.log(newAlbum)

                //Action imported from vuex
                this.addAlbumToState(newAlbum, this.genre)
                this.redirectToCategory(this.genre)
            }

            // alert(`Album being registered.`)
        },
        redirectToCategory(genre){
            this.$router.push(`/${genre}`)
        }
    }
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
        width: 80%;
        max-width: 1100px;
        margin: 0 auto
    }

    button{
        padding: .5rem 1rem;
        background: #FFFFFF60;
        border: 1px solid transparent;
        box-shadow: 0px 0px 5px #99999940;
        cursor: pointer;
        font-weight: 500;
        transition: border 2s;
    }

   button:hover{
        border: 1px solid #b6b6b6;
    }

    form > button{
        margin-left: 1rem;
    }

    .form_container{
        text-align: start;
        width: 70%;
        max-width: 700px;
        margin: 2rem auto 5rem auto;
    }

    *:focus{
        outline: none;
    }

    input{
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: .5rem 1rem;
        margin-bottom: 2rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h5{
        margin-left: 2rem;
        margin-bottom: .3rem;
    }

    select{
        border: none;
        width: 100%;
        border-radius: 5px;
        max-width: 400px;
        padding: .3rem 1rem;
        margin-bottom: 2rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>