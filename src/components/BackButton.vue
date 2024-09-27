//    がんばれ!  🌻

<template>
    <div class="container"> 
        <router-link :to="{ path: '/' }">
            <button><i class="fa-solid fa-backward-step"></i> Back</button>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'backbutton-comp',
    // props: {},
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
    margin: 3rem auto;
}

button{
    padding: .5rem 1rem;
    background: transparent;
    border: none;
    box-shadow: 0px 0px 5px #99999940;
    cursor: pointer;
    font-weight: 500;
}

</style>