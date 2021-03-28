<template>
<div class="container px-4">
   
    <PageHeader :post="category_post" />

<pre>{{posts}}</pre>

    <section class="post-grid">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <Card :post="post" v-for="post of posts" :key="post.slug" />
      </div>
    </section>

</div>
</template>

<style lang="scss">
  .article {
    padding: .125rem 0 2rem;
    &__header {
      padding: 1rem 0;
    }
    &__title {
      font-size: $font-size-display-3;
    }
    &__subheader {
      font-size: $font-size-h5;
      color: $medium;
      margin: .5rem 0;
      
    }
    &__meta {
      border-top: 1px solid $light;
      border-bottom: 1px solid $light;
      padding: .75rem .25rem;
      margin: 1rem 0;
      color: $medium;
      display: flex;
      justify-content: space-between;
      .meta {
        &__date,
        &__faves {
          display: flex;
          align-items: center;
          .icon {
            margin-right: .25rem;
          }
        }
      }
    }
    &__image {
      width: 100%;
      margin: 1rem 0 .5rem;
    }
  &__footer {
    border-top: 1px solid $medium;
    padding: 1rem 0 0;
    margin: 2rem 0 1rem;
  }
  }
</style>


<script>
export default {
  async asyncData({ $content, params, error }) {
    let posts;
    let category_post;
    try {
      category_post = await $content("categories", params.slug).fetch();
      posts = await $content("articles").where({category: params.slug}).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      error({ message: "Category not found" });
    }

    return {
      category_post,
      posts
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