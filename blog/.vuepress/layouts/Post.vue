// layouts/Post.vue
<template>
  <div>
      <Content />
      <!-- <SimplePagination /> -->
      <Comment />
  </div>
</template>

<script>
import { Comment, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    Comment,
  },
}
</script>