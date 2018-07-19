<template>
 <section>
        <v-parallax :src="require('@/assets/service.jpg')" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Các thông tin liên quan về cách tính phí dịch vụ</div>
            <em>Xem cách tích phí dịch vụ</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              @click="info = true"

            >
              Phí dịch vụ
            </v-btn>
          </v-layout>
        </v-parallax>
        <v-dialog
            v-model="info"
            width="500"
          >

            <v-card>
              <v-card-title
                class="headline grey lighten-2"
                primary-title
              >
                Bảng phí dịch vụ
              </v-card-title>

              <v-card-text>
                  Kính gửi: Quý khách hàng
                  <br/>
                  <br/>

                  Lời đầu tiên trân trọng cảm ơn Quý khách hàng đã quan tâm tìm hiểu Goodoo –
                  Giao hàng Mỹ đến 11.000 xã phường.
                  <br/>
                  Goodoo xin gửi đến quý khách hàng bảng giá dịch vụ cụ thể như sau:<br/>
                  * Giá trị đơn hàng = giá sản phẩm + thuế Mỹ + phí vận chuyển nội địa Mỹ (do nhà cung cấp/người bán hàng/website quy định)
                <br/>
                  Ví dụ:
                  <p>
                  Sản phẩm bạn muốn mua là một đôi giày Nike có giá trị 100$ và nặng 0.4kg (phụ phí Goodoo với sản phẩm giày là 5%.) nhờ Gido mua hộ và vận chuyển sẽ tính như sau:
                  <br/>
                  – Phí vận chuyển Mỹ (giả sử) = 5$
                  <br/>
                  – Thuế Mỹ 7% (giả sử) = 7% x 100$ = 7$
                  <br/>
                  ➤ Giá trị đơn hàng = 100$ + 5$ + 7$ = 112 $
                  <br/>
                  – Phí mua hộ = 5% x 112 $ = 5.6$
                  <br/>
                  – Phí vận chuyển = 0.5kg x 7$/kg = 3.5$
                  <br/>
                  – Phụ phí Gido = 5$
                  <br/>
                  ➤ Tổng giá trị mà KH thanh toán cho Gido = 112$ + 5.6$ + 3.5$ + 5$= 126.1$
                  </p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  flat
                  @click="info = false"
                >
                  Tôi đồng ý
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </section>
</template>
<script>
export default {
    name: 'Kickstart',
    data(){
      return {
         info: false,
      }
    }
}
</script>