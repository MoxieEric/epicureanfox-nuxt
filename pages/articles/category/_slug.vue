<template>
  <div class="container px-4">
   
    <PageHeader :post="category_post" />

    <section class="post-grid">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <Card :post="post" v-for="post of posts" :key="post.slug" />
        <div v-if="posts.length < 1">
          <h2 class="post-grid__no-results">This category is empty.</h2>
        </div>
      </div>
    </section>
    <section class="more">
      <div class="link-list">
        <h3>Other Categories</h3>
        <div class="grid grid-cols-2">
          <Card :post="category" v-for="category of categories" :key="category.slug" />
        </div>
      </div>
    </section>
  </div>
  
</template>

<style lang="scss">
  
</style>


<script>
export default {
  async asyncData({ $content, params, error }) {
    let posts;
    let category_post;
    let categories;
    try {
      category_post = await $content("categories", params.slug).fetch();
      categories = await $content("categories").fetch();
      posts = await $content("articles").where({category: category_post.title}).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Category not found" });
    }

    return {
      category_post,
      posts,
      categories
    };
  },
  head() {
    let post = this.category_post;
    return {
      title: post.title,
      meta: [
        {
            hid: "og:title",
            property: "og:title",
            content: post.title
        },
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
        {
            hid: "og:image",
            property: "og:image",
            content: post.image || false
        },
      ],
      bodyAttrs: {
        class: 'template-category'
      }
    }
  }
};
</script>