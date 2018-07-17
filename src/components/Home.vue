<template>

  <v-app light>
      <Toolbar/>
      <v-content>
          <Banner/>
          <Intro/>
          <Kickstart/>
          <Info/>
          <Footer/>
      </v-content>
      <Order v-if="visible"/>
  </v-app>
</template>
<script>
import Toolbar from './Home/Toolbar.vue';
import Banner from './Home/Banner.vue';
import Intro from './Home/Intro.vue';
import Kickstart from './Home/Kickstart.vue';
import Info from './Home/Info.vue';
import Footer from './Home/Footer.vue';
import Order from './Order.vue';
import { mapState,mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    Toolbar,
    Banner,
    Intro,
    Kickstart,
    Info,
    Footer,
    Order
  },
  computed: {
    ...mapState({
      visible: 'modalVisible',
    }),
  },
  methods: {
        ...mapMutations([
          'hideModal',
          'nextStep'
        ]),
  },
  created() {
        const escapeHandler = (e) => {
          if (e.key === `Escape` && this.visible) {
            this.hideModal();
          }
        };
        document.addEventListener(`keydown`, escapeHandler);
        this.$once(`hook:destroyed`, () => {
          document.removeEventListener(`keydown`, escapeHandler);
        });
    },
}
</script>