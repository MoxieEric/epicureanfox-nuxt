<template>
  <div class="container">
    
    <PageHeader :post="{title:'Be curious.',subheader:'Recipes from my own kitchen and around the web.'}" />

    <section class="post-grid">
      <h2 class="post-grid__title">Latest Recipes</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <Card :post="post" v-for="post of posts" :key="post.slug" />
      </div>
    </section>

    <div class="text-center my-8">
        <Card :post="post" v-for="post of pages" :key="post.slug" />
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    };
  },
  async asyncData({ $content }) {
    const posts = await $content("articles").fetch()
    const pages = await $content("pages").fetch()

    return {
      posts,
      pages
    };
  },
};
</script>

<style lang="scss">
  

</style>
