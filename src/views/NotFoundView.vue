//    がんばれ!  🌻

<template>
    <div class="container">
        <h1>ಥ_ಥ</h1>
        <h2>Page Not Found</h2>
        <BackButton/>
    </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';

export default {
    name: 'notfound-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {}
    // watch: {},
    components: {
        BackButton
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        margin-top: 20vh;
    }
    h1{
        font-size: 5rem;
        margin-bottom: 1.5rem;
    }
</style>