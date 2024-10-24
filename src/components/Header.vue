//    がんばれ!  🌻

<template>
    <div class="header">

        <div class="header-item" id="header-letters">
            <h1>Open Music</h1>
        </div>

        <div class="header-item" id="header-video">
            <video autoplay muted loop>
                <source src="@/assets/freakonaleash.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

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
    height: 30vh;
    min-height: 300px;
    margin: 2rem auto 0 auto;
    max-width: 90vw;
    overflow: hidden;
    /* border: 1px solid #cf2828; */
    position: relative;
}

/* .title_back{
    background: transparent;
    background-clip: text;
    color: transparent;
    background-size: 100%;
    background-repeat: no-repeat;
} */

.header-item{
    background: #eeeeee;
}

#header-letters{
    font-family: "Special Elite", system-ui;
    font-weight: 700;
    background: #000000;
    color: #ffffff;
    font-size: 8rem;
    word-spacing: -30px;
    letter-spacing: -10px;

    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    mix-blend-mode: multiply;
}

#header-video{
    width: 100%;
    z-index: -99;
}



/* RESPONSIVE */

@media (max-width:px){

}

</style>