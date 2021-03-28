<template>
  <div class="article container mx-4 my-6">
    <h1>{{ post.title }}</h1>
    <h2>{{post.description}}</h2>
    <nuxt-content :document="post" />
  </div>
</template>

<script>
export default {
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