<template>
   <section>
        <v-parallax :src="require('@/assets/bannerBG.jpg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="@/assets/travel.png" alt="Vuetify.js" height="200">
            <h1 class="mb-2 display-3 text-xs-center" style="text-shadow:2px 2px 3px #4297D1;"><font color="#4297D1">Goo</font><font color="#CFCFCF">doo</font></h1>
            <div class="title thin mb-3 text-xs-center" style="color:#747474;">Order hàng xuyên lục địa</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              @click.stop="showModal('Order')"
            >
              Nhập link order ngay >
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Banner',
  methods: {
    ...mapMutations(['showModal']),
  },
}
</script>
</script>