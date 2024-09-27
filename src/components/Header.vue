//    がんばれ!  🌻

<template>
    <div class="header">
        <h1 class="title_back">Open Music</h1>
    </div>
</template>

<script>
export default {
    name: 'header-comp',
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

.header{
    height: fit-content;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title_back{
    background-image: url('@/assets/shootsandladders.png');
    background-clip: text;
    color: transparent;
    background-size: 100%;
    background-repeat: no-repeat;
}

h1{
    font-family: "Special Elite", system-ui;
    font-weight: 700;
    padding: 2rem auto;
    font-size: 11.875rem;
    word-spacing: -30px;
    letter-spacing: -10px;
}

</style>