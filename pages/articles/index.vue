<template>
  <div class="container">
   <PageHeader :post="{title:'Recipes',subheader:'Celebrate good food.'}" />

    <section class="post-grid">
      <!-- <h2 class="post-grid__title">Featured</h2> -->
      <div class="grid grid-cols-1">
        <Card :post="post" v-for="post of posts.slice(0,1)" :key="post.slug" />
      </div>
    </section>

    <section class="post-grid">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <Card :post="post" v-for="post of posts" :key="post.slug" />
      </div>
    </section>


  </div>
</template>

<script>
export default {
  head() {
    return {
    };
  },
  async asyncData({ $content }) {
    const posts = await $content("articles").sortBy('order').fetch()
    const pages = await $content("pages").fetch()

    return {
      posts
    };
  },
};
</script>

<style lang="scss">


</style>
