//    がんばれ!  🌻

<template>
    <div class="header">

        <div class="header-item" id="header-letters">
            <h1>Open Music</h1>
        </div>

        <!-- <div class="header-item" id="header-video">
            <video autoplay muted loop>
                <source src="@/assets/freakonaleash.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div> -->

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
    /* min-height: 40vh; */
    margin: 2rem auto 0 auto;
    margin-top: 2rem;
    width: 100%;
    max-width: 1420px;
    overflow: hidden;
    /* border: 1px solid #cf2828; */
    position: relative;
}

#header-letters{
    font-family: "Special Elite", system-ui;
    font-weight: 700;
    
    background-image: url('@/assets/shootsandladders.png');
    background-clip: text;
    color: transparent;
    background-size: 100%;
    background-repeat: no-repeat;

    font-size: 7vw;
    word-spacing: -30px;
    letter-spacing: -10px;
}

/* #header-video{
    width: 100%;
    z-index: -99;
} */



/* RESPONSIVE */

@media (max-width:1422px){
    #header-letters{
        font-size: 9vw;
    }
}

@media (max-width:1200px){
    #header-letters{
        font-size: 12vw;
    }
}

@media (max-width:629px){
    #header-letters{
        font-size: 14vw;
    }
}

</style>