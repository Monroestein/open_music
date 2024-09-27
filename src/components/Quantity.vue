//    がんばれ!  🌻

<template>
    <div class="container"> 
            <h2>{{ music }} Albums registered so far.</h2>
    </div>
</template>

<script>
export default {
    name: 'quantity-comp',
    props: {
        music:{
            funk: {
                id: {
                    type: Number,
                    required: true
                }
            }
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
    
</style>