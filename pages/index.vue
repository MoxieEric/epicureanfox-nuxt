<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        epicureanfox
      </h1>
      <div>
        <h2>Articles</h2>
        <ul>
          <li v-for="post of posts" :key="post.slug">
            <NuxtLink :to="'/articles/'+post.slug">{{ post.title }}</NuxtLink>
          </li>
        </ul>
        <h2>Pages</h2>
        <ul>
          <li v-for="page of pages" :key="page.slug">
            <NuxtLink :to="page.slug">{{ page.title }}</NuxtLink>
          </li>
        </ul>
      </div>
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
