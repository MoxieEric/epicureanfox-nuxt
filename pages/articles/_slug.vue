<template>
<div class="container px-4">
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">{{ post.title }}</h1>
      <p class="article__subheader" v-if="post.description">{{ post.description }}</p>
      <div class="article__meta meta">
        <span class="meta__item">
          <Icon :icon="'calendar'" />
          6 days ago 
        </span>
        <span class="meta__item"> 
          <Icon :icon="'heart'" />
          17
        </span>
      </div>
      <div class="article__image">
        <ImageTag :image="post.image || false" :class="''"/>
      </div>
    </header>
   
    <nuxt-content :document="post" class="rte article__body" />
    
    <div class="article__footer">
      <div class="article__meta meta">
        <div class="meta__item">
          <ol class="breadcrubms" itemscope itemtype="https://schema.org/BreadcrumbList">
            <li class="breadcrubms__item" itemprop="itemListElement" itemscope
          itemtype="https://schema.org/ListItem">
              <a href="/articles/" itemprop="item">
                <span itemprop="name">Recipes</span>
                <meta itemprop="position" content="1" />
              </a>
            </li>
            <li class="breadcrubms__item" itemprop="itemListElement" itemscope
          itemtype="https://schema.org/ListItem">
              <a :href="'/articles/category/'+taxonomy.slug" itemprop="item">
                <span itemprop="name">{{taxonomy.title}}</span>
                <meta itemprop="position" content="2" />
              </a>
            </li>
            <li class="breadcrubms__item" itemprop="itemListElement" itemscope
          itemtype="https://schema.org/ListItem">
              <span itemprop="name">{{post.title}}</span>
              <meta itemprop="position" content="3" />
            </li>
          </ol>
          
        </div>
      </div>
    </div>
  </article>

  <section class="more">
    <PageHeader :post='{title: "More "+taxonomy.title + " recipes", subheader: "\<a href=\"/articles/category/"+taxonomy.slug+"\">View All</a>"}' />
    <div class="post-grid post-grid--list">
      <CardHorizontal :post="post" v-for="post of taxonomy.posts" :key="post.slug" />
    </div>
    <div class="post-grid">
      <h3>Other Categories</h3>
      <div class="grid grid-cols-2 ">
        <Card :post="category" v-for="category of categories" :key="category.slug" />
      </div>
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
        &__item {
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
      //border-top: 1px solid $medium;
      padding: 1rem 0 0;
      margin: 2rem 0 1rem;
    }
  }
</style>


<script>
export default {
  async asyncData({ $content, params, error }) {
    let post;
    let taxonomy;
    let categories;
    try {
      post = await $content("articles", params.slug).fetch();
      categories = await $content("categories").fetch();
      taxonomy = await $content("categories", post.category.toLowerCase() ).fetch();
      taxonomy.posts = await $content("articles")
        .limit(3)
        //.where({category: taxonomy.title, title: {$ne:post.title} })
        .fetch();
    } catch (e) {
      error({ message: "Article not found" });
    }
    return {
      post,
      taxonomy,
      categories
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