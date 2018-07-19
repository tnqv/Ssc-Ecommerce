<template>
       <v-dialog
          v-model="confirm"
          max-width="500"
        >
          <v-card>
            <v-card-title class="headline">Bạn có chắc chắn muốn đặt hàng không ?</v-card-title>

            <v-card-text>

            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="info darken-1"
                @click="hideConfirmOrder"
              >
                Quay lại
              </v-btn>

              <v-btn
                color="info darken-1"
                @click="hideBothModalAfterConfirm"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>
<script>

import { mapState,mapMutations } from 'vuex';

export default {
    name: 'ConfirmDialog',
    computed: {
    ...mapState({
      visible: 'modalVisible',
      confirm : 'confirm'
    }),
    },
    methods: {
        ...mapMutations([
          'hideModal',
          'nextStep',
          'hideBothModal',
          'hideConfirmOrder'
        ]),
        hideBothModalAfterConfirm(){
            this.$swal({
              title: 'Đặt hàng thành công',
              html: 'Đơn hàng của bạn đã được tạo thành công, chúng tôi sẽ liên lạc với bạn qua điện thoại hoặc email trong thời gian sớm nhất </br> Mã đơn hàng của bạn là <b>AB1993F6D2</b>',
              type: 'success',
              confirmButtonText: 'Xác nhận',
            }).then((result)=>{
              if(result.value){
                  this.$store.commit('hideBothModal');
              }
            });

        }
    }
}
</script>
