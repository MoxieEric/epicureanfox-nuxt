<template>
  <div class="container px-4">
    
    <article class="article">
      <PageHeader :post="post" />
      <!-- <ImageTag :image="post.image || false" :class="''"/> -->
    
      <nuxt-content :document="post" class="rte article__body" />
      
      <div class="article__footer">
        <div class="text-center">
          <a href="/articles/" title="Explore all Recipes" class="button button--text"> Explore My Recipes <Icon :icon="'arrow-right'"/> </a>
        </div>
      </div>
    </article>
  </div>
</template>

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