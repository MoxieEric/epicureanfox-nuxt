<template>
<div class="container px-4">
  <article class="article">
    <div class="article__header">
      <h1 class="article__title">{{ post.title }}</h1>
      <h2 v-if="post.description">{{ post.description }}</h2>
    </div>
   
    <nuxt-content :document="post" />
  </article>
</div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("articles", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Article not found" });
    }

    return {
      post
    };
  },
  head() {
    let post = this.post;
    return {
      title: post.title,
      meta: [
        {
					hid: "og:type",
					property: "og:type",
					content: "recipe"
				},
        {
          hid: `description`,
          name: 'description',
          content: post.description || false
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: post.description || false
        },
      ],
      bodyAttrs: {
        class: 'template-article'
      }
    }
  }
};
</script>