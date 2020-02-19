<template>
  <div id="app">
    <show-blogs></show-blogs>
  </div>
</template>

<script>
// import AddBlog from './components/AddBlog.vue'
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  name: 'App',
  components: {
    // 'add-blog':AddBlog,
    'show-blogs':ShowBlogs
  }
}
</script>

<style>

</style>
