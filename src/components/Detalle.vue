<template>
  <div>
    <p>
      textode la props .- <em>{{ texto }}</em>
    </p>
    <input
      tyope="text"
      :value="texto"
      @input="cambiaTexto($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ChildComponent',
  props: {
    texto: String,
  },
  methods: {
    cambiaTexto(nuevoTexto: string) {
      this.$emit('cambiaTexto', nuevoTexto)
    },
  },
})
</script>
<style scoped></style>
