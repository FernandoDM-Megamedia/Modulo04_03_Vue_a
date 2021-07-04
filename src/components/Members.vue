<template>
  <div class="card text-center m-3">
    <!-- <input type="text" v-model="corporacion" /> -->
    <input type="text" v-model="$store.getters.flavor" />
    <!-- {{ corporacion }} -->
    {{ $store.getters.flavor }}
    <button v-on:click="changeCoportation">cambiamos</button>
    <hr />
    <nav>
      <div>Listado de Miembros en tabla Vuetify (3 alpha)</div>
    </nav>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <hr />
    <nav>
      <div>Listado de Miembros</div>
    </nav>
    <ul class="product-list">
      <li v-for="members in members" :key="members.id">
        <article class="grid product-container card">
          <div class="image">
            <img :src="`${members.avatar_url}`" alt="" />
          </div>
          <div class="product-container__content">
            <h2>
              {{ members.id }}
            </h2>
            <p>
              <span class="grey-text">Login: </span>
              <strong>{{ members.login }}</strong>
            </p>
            <p>
              <span class="grey-text">node_id: </span>
              {{ members.node_id }}
            </p>
            <p><span class="grey-text">type: </span>{{ members.type }}</p>
            <p>
              <!-- <button v-on:click="detalleMiembro(members.id, corporacion)">
                ver Detalle
              </button> -->
              <!-- <router-link :to="`/detail/${members.id}`">
                detalle desde Routerlink
              </router-link> -->
              <button v-on:click="redirectDetalle(members.login)">
                ver Detalle RouterLink
              </button>
            </p>
          </div>
        </article>
      </li>
    </ul>
    <hr />
    <!-- <div class="card-body">Total vue Members: {{ members }}</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Members } from '@/types'
import { memberListService } from '@/services/members'

export default defineComponent({
  name: 'get-request',
  data() {
    return {
      corporacion: 'Lemoncode',
      id: Number,
      filter: {},
      members: [] as Members[],
      search: {},
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
  // computed: {

  // },
  methods: {
    changeCoportation: function () {
      // console.log('corporacion filtro', this.corporacion)
      // fetch('https://api.github.com/orgs/' + this.corporacion + '/members')
      //   .then((response) => response.json())
      //   .then((data) => (this.members = data))
      // console.log(this.members)
      this.corporacion = this.$store.getters.flavor
      memberListService(String(this.corporacion)).then(
        (members: Members[] | undefined) => {
          if (members) {
            this.members = members
          }
        }
      )
    },
    detalleMiembro: function (id: number, corporacion: string) {
      console.log('id de detalle', id)
      console.log('corporacion: ', corporacion)
      const search = this.members.filter((member) => member.id === id)
      this.search = search
      this.members = search
      console.log('he pulsado en ver detalle', id)
      this.$router.push('/detail/' + id)
    },
    redirectDetalle: function (id: number) {
      console.log('id de detalle', id)
      this.$router.push('/detail/' + id)
    },
  },
  // ciclos de vida
  async created() {
    // Simple GET request using fetch
    console.log(
      'inicio del ciclo de vida del componente con.- ' + this.corporacion
    )
  },
})
</script>
<style lang="scss" scoped>
.product-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}
.image {
  width: 200px;
  img {
    width: 100%;
  }
}
</style>
