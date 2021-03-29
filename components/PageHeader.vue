<template>
    <header class="page-header">
      <h1 class="page-header__title" v-if="post.title">
        {{post.title}}
      </h1>
      <h2 class="page-header__subheader" v-if="post.subheader" v-html="post.subheader"></h2>
    </header>
</template>

<style lang="scss">
    .page-header {
        padding: 1rem 1rem;
        &__title {
            font-size: $font-size-display-3;
        }
        &__subheader {
            font-size: $font-size-h5;
            color: $medium;
            margin: .5rem 0;
            font-family: $body-font;
            font-weight: 400;
        }
    }
</style>

<script>
export default {
    name: "PageHeader",
    props: {
        post: {}
    }
}
</script>