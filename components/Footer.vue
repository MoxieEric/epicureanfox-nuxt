<template>
    <div class="footer" id="footer">
        <div class="footer__logo">
            <a href="/" title="Home" class="">&copy; 2021 Epicurean Fox</a>
        </div>
        <div class="footer__nav">
            <div class="footer__nav-links">
                <div class="footer__nav-item">
                    <a href="https://instagram.com/klausnowels" class="" target="_blank" rel="noopener">Instagram</a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        width: 100%;
        height: 3rem;
        color: $medium;
        @media (min-width:768px){
            padding: 0 3rem;
        }
        &__logo {
            font-family: $heading-font;
            font-size: $font-size-sm;
            
        }
        &__nav {

        }
        &__nav-links {
            
        }
        &__nav-item {
            display: inline-block;
            padding: .125rem .5rem;
            margin: .125rem;
            font-size: $font-size-sm;
            a {
                color: $medium;
            }
        }

    }
    
</style>