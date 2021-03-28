<template>
  <article class="container">
    <PageHeader :post="post" />
    <div class="article px-4">
      
      <!-- <ImageTag :image="post.image || false" :class="''"/> -->

      <nuxt-content :document="post" class="rte article__body" />
      
      <div class="article__footer">
        <div class="text-center">
          <a href="/articles/" title="Explore all Recipes" class="button button--text"> Explore My Recipes <Icon :icon="'arrow-right'"/> </a>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
  .article {
    padding: .125rem 1rem 2rem;
    &__header {
      padding: 1rem 0;
    }
    &__title {
      font-size: $font-size-display-3;
    }
    &__subheader {
      font-size: $font-size-h5;
      color: $medium;
      margin: .5rem 0;
      
    }
    &__meta {
      border-top: 1px solid $light;
      border-bottom: 1px solid $light;
      padding: .75rem .25rem;
      margin: 1rem 0;
      color: $medium;
      display: flex;
      justify-content: space-between;
      .meta {
        &__date,
        &__faves {
          display: flex;
          align-items: center;
          .icon {
            margin-right: .25rem;
          }
        }
      }
    }
    &__image {
      width: 100%;
      margin: 1rem 0 .5rem;
    }
  &__footer {
    border-top: 1px solid $medium;
    padding: 1rem 0 0;
    margin: 2rem 0 1rem;
  }
  }
</style>

<script>
export default {
  data() {
    return{
      post: {}
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("pages", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Page not found" });
    }
    return {
      post,
    };
  },
};
</script>