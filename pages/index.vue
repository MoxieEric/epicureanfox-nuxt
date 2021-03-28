<template>
  <div class="container mx-auto">
    <section class="hero">
      <h1 class="hero__title">
        A tagline or something
      </h1>
      <p class="hero__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque ultricies pulvinar.</p>
    </section>

    <section class="post-grid">
      <h2 class="post-grid__title display-3 mt-4 mb-2 px-4">Articles</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <Card :post="post" v-for="post of posts" :key="post.slug" />
      </div>
    </section>

    <div class="text-center my-8">
      <h2>Pages</h2>
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
  .post-grid {
    margin: 1rem 0 2rem;
    padding-bottom: 1rem;
    &__title {
      font-size: $font-size-h4;
      color:$medium;
    }
    &__body {
      margin: 1rem 1.5rem;
      font-size: $font-size-lg; 
    }
  }

  .hero {
    margin: 1.5rem .5rem;
    &__title {
      font-size: $font-size-display-1;
      line-height: 4rem;
    }
  }

</style>
