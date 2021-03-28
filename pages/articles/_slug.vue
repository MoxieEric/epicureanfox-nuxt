<template>
  <article class="article-single">
    <h1>{{ post.title }}</h1>
    <h2 v-if="post.description">{{ post.description }}</h2>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("articles", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" });
    }

    return {
      post
    };
  },
};
</script>