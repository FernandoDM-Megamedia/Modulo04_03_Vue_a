<template>
  <div class="home">
    <Members />
    <!-- <ProductList /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Members from '@/components/Members.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Members,
  },
})
</script>
