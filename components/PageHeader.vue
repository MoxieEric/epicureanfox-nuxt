<template>
    <component class="page-header" :is="isHeader ? 'header' : 'div'" >
      <component class="page-header__title" v-if="post.title" :is="isHeader ? 'h1' : 'h2'">
        {{post.title}}
      </component>
      
      <component 
        :is="isHeader ? 'h2' : 'div'"
        class="page-header__subheader" 
        v-if="post.subheader" v-html="post.subheader"></component>
    </component>
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
        isHeader: {
            type: Boolean,
            default: true
        },
        post: {}
    }
}
</script>