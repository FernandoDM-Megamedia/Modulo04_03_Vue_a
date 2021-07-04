<template>
  <div>
    <hr />
    <!-- <label for="flavor">Empresa a buscar ( pasamos al contexto )</label>
    <input @input="changed" name="flavor"> -->
    <hr />
    <label for="flavor"
      >Empresa a buscar ( pasamos al contexto ) con boton ??
    </label>
    <input name="flavor" v-model="corporacion" />
    - {{ $store.getters.flavor }} -
    <button v-on:click="changed" name="flavor">cambiamos</button>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      corporacion: '',
    }
  },
  methods: {
    changed: function(event) {
      console.log('funcion change')
      console.log(event.target.value)
      console.log(this.corporacion)
      // this.$store.commit('change', event.target.value)
      this.$store.commit('change', this.corporacion)
    },
  },
}
</script>
