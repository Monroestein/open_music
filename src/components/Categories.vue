//    がんばれ!  🌻

<template>
    <div class="container">
        <h1>Categories</h1>
        <div class="categories">
            <div class="category" @click="redirectPage('funk')">
                <h3>Funk</h3>
            </div>
            <div class="category" @click="redirectPage('grunge')">
                <h3>Grunge</h3>
            </div>
            <div class="category" @click="redirectPage('metal')">
                <h3>Metal</h3>
            </div>
            <div class="category" @click="redirectPage('pop')">
                <h3>Pop</h3>
            </div>
            <div class="category" @click="redirectPage('hip-hop')">
                <h3>Hip Hop</h3>
            </div>
            <div class="category" @click="redirectPage('rock')">
                <h3>Rock</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'categories-comp',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        redirectPage(id){
            this.$router.push(`/${id}`)
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
    margin: 3rem auto;
}

.categories{
    margin: 3rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
}

.category{
    padding: 2rem 1rem;
    box-shadow: 0px 0px 5px #99999960;
    cursor: pointer;
    transition: box-shadow .5s;
}

.category:hover {
    box-shadow: 0px 0px 8px #99999990;
}

</style>