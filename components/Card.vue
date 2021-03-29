<template>
    <div class="card">
        <!-- <pre>{{post}}</pre> -->
        <div class="card__header">
            <NuxtLink :to="post.base_url + post.slug">
                <ImageTag :image="post.image || false" :class="'card__image'" :alt="'Photo of '+post.title"/>
                <h3 class="card__title">{{ post.title }}</h3>
            </NuxtLink>
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
        let post = this.post;
        let base = '';
        switch(true) {
            case post.path.includes('article'):
                base = '/articles/';
                break;
            case post.path.includes('categories'):
                base = '/articles/category/';
                break;
            default:
                base = '/';
        }
        post.base_url = base;
        return {}
    }
}
</script>

<style lang="scss">
    .card {
        padding: 1rem;
        &__title {
            font-size: $font-size-h3;
            font-family: $heading-font;
            font-weight: 600;
        }
        &__body {
            padding-bottom: 2rem;
            border-bottom: 1.5px solid $light;
        }
        &__image {
            display: inline-block;
            width: 100%;
            margin-bottom: .25rem;
        }
    }
</style>