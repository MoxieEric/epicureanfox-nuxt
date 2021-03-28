<template>
  <div class="container mx-auto">
    <section class="text-center mx-2 my-6">
      <h1 class="text-3xl">
        Recipes &amp; Articles
      </h1>
      <h2 class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque ultricies pulvinar.</h2>
    </section>

    <section class="my-4">
      <div>
        <div v-for="post of posts" :key="post.slug" class="">
            <Card :post="post"/>
        </div>
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
    const posts = await $content("articles").fetch()
    const pages = await $content("pages").fetch()

    return {
      posts
    };
  },
};
</script>

<style lang="scss">


</style>
