<template>
  <v-dialog :value="visible">
  <!-- <v-dialog v-model="visible" persistent> -->
    <v-stepper v-model="selectedStep" persistent>
      <v-stepper-header>
        <v-stepper-step :complete="selectedStep > 1" step="1" editable>Input your phone</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="selectedStep > 2" step="2" editable>Input your order</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Verify order</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
                <StepOne/>
                <v-btn
                  color="primary"
                  @click="selectedStep = 2"
                >
                  Continue
                </v-btn>

                <v-btn @click="hideModal" flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="selectedStep = 3"
          >
            Continue
          </v-btn>

          <v-btn @click="hideModal" flat>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-5"
            color="grey lighten-1"
            height="200px"
          ></v-card>

          <v-btn
            color="primary"
            @click="selectedStep = 1"
          >

            Continue
          </v-btn>

          <v-btn  @click="hideModal" flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>
<script>
import StepOne from './Order/StepOne.vue';
import { mapMutations } from 'vuex';
import { mapState,mapGetters } from 'vuex';

export default {
      name: 'Order',
      data() {
        return {
            selectedStep: 1,
        };
      },
      components: {
          StepOne
      },
      computed: {
        ...mapState({
          visible: 'modalVisible',
        }),
        // ...mapGetters({
        //     selectedStep: 'getStep'
        // }),
        // step(){
        //   return this.$store.getters.getStep
        // }
        // selectedStep: {
        //   get () {
        //     return this.$store.getters.getStep;
        //   },
        //   set (value) {
        //     this.$store.commit('updateStep', value)
        //   }
        // },
      },
      methods: {
        ...mapMutations([
          'hideModal',
          'nextStep'
        ]),
      },
}
</script>