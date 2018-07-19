<template>
 <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Về chúng tôi</div>
                </v-card-title>
                <v-card-text>
                  Goodoo thành lập vào năm 2018, là đối tác dịch vụ order hàng tại nước ngoài uy tín của mọi nhà tại Việt Nam, chúng tôi luôn tận tâm cho mỗi đơn hàng của dịch vụ. Từ đó tạo nên uy tín và đảm bảo của thương hiệu Goodoo chúng tôi.Goodoo chúng tôi luôn làm việc với khẩu hiệu "Không đâu rẻ hơn bằng Goodoo"
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Liên hệ chúng tôi</div>
                </v-card-title>
                <v-card-text>
                  Lầu 2 phòng khám bác sĩ đa khoa Nguyễn Hữu Thưởng
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Thành phố Hồ Chí Minh</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>goodoo@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
</template>
<script>
export default {
    name: 'Info'
}
</script>