<template>
  <div class="container mx-auto">
    <section class="text-center mx-2 my-6">
      <h1 class="text-3xl">
        A tagline or something
      </h1>
      <h2 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque ultricies pulvinar.</h2>
    </section>

    <section class="text-center my-4">
      <div>
        <h2 class="text-3xl mt-4 mb-2">Articles</h2>
        <div v-for="post of posts" :key="post.slug" class="card">
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
      </div>
    </section>
    <div class="text-center my-8">
      <h2>Pages</h2>
        <ul>
          <li v-for="page of pages" :key="page.slug">
            <NuxtLink :to="page.slug">{{ page.title }}</NuxtLink>
          </li>
        </ul>
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
