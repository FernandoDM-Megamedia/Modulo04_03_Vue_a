<template>
  <Header />
  <hr />
  <Form />
  <Display />
  <hr />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Form from '@/components/form.vue'
import Display from '@/components/display.vue'

export default defineComponent({
  components: {
    Header,
    Form,
    Display,
  },
})
</script>
