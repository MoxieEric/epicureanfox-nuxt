<template>
<div class="container px-4">
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">{{ post.title }}</h1>
      <p class="article__subheader" v-if="post.description">{{ post.description }}</p>
      <div class="article__meta meta">
        <span class="meta__date">
          <Icon :icon="'calendar'" />
          6 days ago 
        </span>
        <span class="meta__faves"> 
          <Icon :icon="'heart'" />
          17
        </span>
      </div>
      <div class="article__image">
        <!-- <pre>{{post}}</pre> -->
        <ImageTag :image="post.image || false" :class="''"/>
      </div>
    </header>
   
    <nuxt-content :document="post" class="rte article__body" />
    
    <div class="article__footer">
      <div class="text-center">
        <a :href="'/articles/'+(post.category ? 'category/'+post.category.toLowerCase() : '')" title="Explore all Recipes" class="button button--text"> More {{ post.category }} Recipes <Icon :icon="'arrow-right'"/> </a>
      </div>
    </div>
  

  </article>
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
        class: 'template-article'
      }
    }
  }
};
</script>