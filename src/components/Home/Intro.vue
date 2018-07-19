<template>
<section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Bạn đang có nhu cầu đặt mua các sản phẩm chính hãng nước ngoài </h2>
              <span class="subheading">
                    Goodoo sẽ giúp bạn chỉ bằng các bước đơn giản dưới đây :
              </span>
            </div>
          </v-flex>
          <v-flex xs12 md12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>

                <v-flex xs12 md3>
                  <v-card class="transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">search</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Bước 1 : Tìm kiếm</div>
                    </v-card-title>
                    <v-card-text>
                      Hiện nay, hơn 90% sản phẩm ở Mỹ không được hỗ trợ ship hàng về Việt Nam. Vì thế Goodoo ở đây, mọi thứ sẽ trở nên thật đơn giản và thuận tiện.
                      <br/>
                      Bạn chỉ cần tìm kiếm link sản phẩm, mọi thứ hãy đề Gooodoo lo !


                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3>
                  <v-card class="transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">info</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Bước 2 : Nhập link order</div>
                    </v-card-title>
                    <v-card-text>
                      Bạn nhập link và điền 1 ít thông tin căn bản để Goodoo có thể liên hệ và ship hàng về cho bạn, đồng thời bạn cũng có thể nhận được mã khuyến mãi từ những chương trình giảm giá khi order của Goodoo bạn nhé ^^.
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3>
                  <v-card class=" transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">chat</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Bước 3 : Báo giá
                      </div>
                    </v-card-title>
                    <v-card-text>
                      Goodoo sẽ căn cứ vào bảng phí dịch vụ và tính toán các chi phi phát sinh. Sau đó Goodoo sẽ liên hệ báo giá với bạn trong thời gian sớm nhất về món hàng này qua số điện thoại hoặc email của bạn
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md3>

                  <v-card class="transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">check_circle</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Bước 4 : Nhận hàng</div>
                    </v-card-title>
                    <v-card-text>
                        Sau khi bạn thanh toán hết phí dịch vụ mọi thứ con lại để Goodoo quán xuyến
                        . Goodoo sẽ tiến hành đặt hàng và vận chuyển trực tiếp tới tay của bạn. Nếu vấn đề, Goodoo cam đoan sẽ hoàn tiền dịch vụ.

                    </v-card-text>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>
