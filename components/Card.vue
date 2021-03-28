<template>
    <div class="card">
        <div class="card__image">
            <img src="/img/fpo.jpg" alt="" class="">
        </div>
        <div class="card__header">
            <NuxtLink :to="'/articles/'+post.slug">{{ post.title }}</NuxtLink>
        </div>
        
        <div class="card__body">
            <p>{{post.description}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        post: {}
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    .card {
        border: 2px solid $light;
        padding: 1rem;
        margin: 1rem;
        &__header {
            font-size: $font-size-h5;
            font-family: $heading-font;
            font-weight: 600;
        }
    }
</style>