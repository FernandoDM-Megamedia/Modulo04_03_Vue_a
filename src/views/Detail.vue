<template>
  <div class="grid">
    detalle de .-
    <div>
      <!-- <img :src="`https://picsum.photos/id/${id}/600`" alt="" /> -->
    </div>
    <div v-if="members">
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
            <button>
              <router-link :to="`/`">Home</router-link>
            </button>
          </p>
        </div>
        <div class="flex product-container__aside">
          <div class="text-align-end aside__price">
            <!-- {{ members.login }} -->
          </div>
        </div>
      </article>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Members } from '@/types'
import { memberService } from '@/services/members'

export default defineComponent({
  data: () => ({
    members: {} as Members,
  }),
  computed: {
    id(): number {
      return Number(this.$route.params.id)
    },
  },
  created() {
    console.log(this.$route.params.id)
    memberService(String(this.$route.params.id)).then(
      (members: Members | undefined) => {
        if (members) {
          this.members = members
        }
      }
    )
  },
})
</script>
<style lang="scss" scoped>
hr {
  width: 100%;
}

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
