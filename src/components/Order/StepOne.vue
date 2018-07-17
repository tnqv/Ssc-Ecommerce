<template>
  <v-form v-model="valid"
    height="200px"
    width="10px">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
  </v-form>
</template>
<script>
import { mapState,mapMutations } from 'vuex';

export default {
    name: 'StepOne',
    data: () => ({
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
    }),
    methods:{
        ...mapMutations([
          'hideModal',
          'nextStep'
        ]),
    },
    computed: {
    ...mapState({
      visible: 'modalVisible',

    }),
    // selectedStep: {
    //       get () {
    //         return this.$store.getters.getStep;
    //       },
    //       set (value) {
    //         this.$store.commit('updateStep', value)
    //       }
    // }
  },
}
</script>