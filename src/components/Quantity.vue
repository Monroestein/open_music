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
    margin: 2rem auto
}
</style>