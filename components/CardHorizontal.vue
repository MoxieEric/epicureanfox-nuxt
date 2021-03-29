<template>
    <div class="card card--horizontal grid grid-cols-4">
        <!-- <pre>{{post}}</pre> -->
        <div class="card__header">
            <NuxtLink :to="post.path.includes('article') ? post.path : post.slug">
                <ImageTag :image="post.image || false" :class="'card__image'"/>
            </NuxtLink>
        </div>
        <div class="card__body col-span-3">
            <h3 class="card__title">{{ post.title }}</h3>
            <p>{{post.description}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "CardHorizontal",
    props: {
        post: {}
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    .card--horizontal {
        width: 100%;
        //padding: 1rem;
        .card-title {
            
        }
        .card__body {
            padding: 0 0 2rem 2rem;
            border-bottom: none;
        }
        
        // &__image {
        //     display: inline-block;
        //     width: 100%;
        //     margin-bottom: .25rem;
        // }
    }
</style>