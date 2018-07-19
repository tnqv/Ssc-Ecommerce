<template>
  <v-dialog :value="visible" height="800px">
  <!-- <v-dialog v-model="visible" persistent> -->
    <v-stepper v-model="selectedStep" persistent>
      <v-stepper-header>
        <v-stepper-step :complete="selectedStep > 1" step="1" editable>Thông tin liên lạc</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="selectedStep > 2" step="2" editable>Thông tin đặt hàng</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Xác nhận đơn hàng</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
                <StepOne/>
                <v-btn
                  color="primary"
                  @click="selectedStep = 2"
                >
                  Tiếp tục
                </v-btn>

                <v-btn @click="hideModal" flat>Quay lại</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <StepTwo/>

          <v-btn
            color="primary"
            @click="selectedStep = 3"
          >
            Tiếp tục
          </v-btn>

          <v-btn @click="hideModal" flat>Quay lại</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">

          <v-subheader>
                Thông tin sản phẩm :
          </v-subheader>

          <StepThree/>
             <v-divider style="margin-top:20px;"></v-divider>
            <v-subheader>
                Địa chỉ giao hàng :
            </v-subheader>
           <v-layout row style="margin-bottom:20px;">
                <v-card>


                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Nguyễn Hữu Thắng</div>
                      <span class="grey--text">Địa chỉ : Phong kham bac si Nguyen Huu Thuong 119 Nguyễn Hữu Thọ ,Quận Gò Vấp</span>
                      <br/>
                      <span class="grey--text">Số điện thoại : 01239123456</span>
                      <br/>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn prepend-icon="edit" flat>Edit</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
            </v-layout>


          <v-btn
            color="primary"
            @click="hideModalWithConfirm"
          >
            ĐẶT hàng
          </v-btn>

          <v-btn  @click="hideModal" flat>Quay lại</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-dialog>
</template>
<script>
import StepOne from './Order/StepOne.vue';
import StepTwo from './Order/StepTwo.vue';
import StepThree from './Order/StepThree.vue';
import { mapMutations } from 'vuex';
import { mapState,mapGetters } from 'vuex';

export default {
      name: 'Order',
      data() {
        return {
            selectedStep: 1,
            dialog: false
        };
      },
      components: {
          StepOne,
          StepTwo,
          StepThree
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
        // hideModalTest(){
        //     this.$store.commit('hideModal');
        //     this.dialog = true;
        // },
        ...mapMutations([
          'hideModal',
          'nextStep',
          'hideModalWithConfirm'
        ]),
      },
}
</script>