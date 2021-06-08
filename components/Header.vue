<template>
    <nav class="header" id="header" >
        <div class="header__logo">
            <a href="/" title="Homepage" class="">Epicurean Fox</a>
        </div>
        <div class="header__nav">
            <div class="header__nav-links">
                <div class="header__nav-item">
                    <a href="/articles/" class="">Recipes</a>
                </div>
                <div class="header__nav-item">
                    <a href="/about/" class="">About</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        width: 100%;
        height: 3rem;
        color: #000;
        background: $pink;
        @media (min-width:768px){
            padding: 0 3rem;
        }
        &__logo {
            font-family: $heading-font;
            font-size: $font-size-h4;
            font-weight: 700;
            a {
                color: $black;
            }
        }
        &__nav {

        }
        &__nav-links {
            
        }
        &__nav-item {
            display: inline-block;
            padding: .125rem .5rem;
            margin: .125rem;
            font-size: $font-size-h5;
            a {
                color: $dark;
            }
        }

    }
    
</style>

<script>
// import Vue from 'vue';

// export default{
//     data: function () {
//         return {
//             isFBReady: false
//         }
//     },
//     mounted: function () {
//         this.isFBReady = Vue.FB != undefined
//         window.addEventListener('fb-sdk-ready', this.onFBReady)
//     },
//     beforeDestroy: function () {
//         window.removeEventListener('fb-sdk-ready', this.onFBReady)
//     },
//     methods: {
//         onFBReady() {
//           this.isFBReady = true
//         },
//         login() {

//         }
//     }
// }
</script>