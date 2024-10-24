//    がんばれ!  🌻

<template>
    <div class="container"> 

            <h2>{{ totalAlbums }} Albums registered so far.</h2>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'quantity-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['totalAlbums'])
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
    width: 80%;
    max-width: 1100px;
    margin: 2rem auto;
    padding: 2rem 1rem;
    box-shadow: 0px 0px 5px #99999960;
    transition: box-shadow .5s;
}
</style>