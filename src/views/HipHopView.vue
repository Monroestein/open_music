//    がんばれ!  🌻

<template>
    <div>
        <h1>{{ genre }}</h1>
        <h2>{{ totalHiphop }} Albums</h2>
        <Albums :albums="hiphop"/>
        <BackButton/>
    </div>
</template>

<script>
import Albums from '@/components/Albums.vue';
import BackButton from '@/components/BackButton.vue';

import { mapGetters, mapState } from 'vuex';
export default {
    name: 'hiphop-view',
    // props: {},
    data: function(){
        return {
            genre: 'Hip-Hop'
        }
    },
    computed: {
        ...mapState(['hiphop']),
        ...mapGetters(['totalHiphop'])
    },
    // methods: {}
    // watch: {},
    components: {
        Albums,
        BackButton
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

h1{
    margin: 2rem auto;
    font-family: "Special Elite", system-ui;
    font-weight: 500;
    font-size: 80px;
    word-spacing: -30px;
    letter-spacing: -10px;
}

</style>