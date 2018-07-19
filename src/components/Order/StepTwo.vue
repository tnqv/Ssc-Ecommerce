<template>
        <v-data-table
            :headers="headers"
            :items="desserts"
              hide-actions
              class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>
                   <v-text-field
                    label="Link sản phẩm"
                     prepend-icon="link"
                     v-model="order.link"
                    required
                  ></v-text-field>

                  <v-layout row>
                    <v-text-field
                    label="Loại sản phẩm"
                     prepend-icon="category"
                     v-model="order.category"
                    required
                  ></v-text-field>
                  <v-text-field
                    label="Số lượng"
                    prepend-icon="number"
                    v-model="order.quantity"
                    required
                  ></v-text-field>
                  </v-layout>
                  <v-textarea
                    name="input-7-1"
                    label="Ghi chú"
                    prepend-icon="edit"
                    hint="Ghi chú cho sản phẩm của bạn"
                    v-model="order.description"
                  ></v-textarea>
                   <v-subheader
                    >
                      Khu vực bổ sung*
                    </v-subheader>

                    <v-divider></v-divider>
                    <v-text-field
                    label="Mã giảm giá"
                    hint="Nhập mã giảm giá"
                    prepend-icon="promo"
                    v-model="order.discount"
                     ></v-text-field>

              </td>

              <td class="text-xs-right" style="vertical-align:top;">

                <v-layout row>
                    <v-text-field
                    label="Họ"
                    hint="Họ"
                    prepend-icon="person"
                    v-model="order.firstname"
                  ></v-text-field>
                  <v-text-field
                    label="Tên"
                    hint="Tên"
                    v-model="order.lastname"
                  ></v-text-field>
                </v-layout>
                <v-text-field
                    label="Địa chỉ"
                    hint="Địa chỉ"
                    prepend-icon="location_on"
                    v-model="order.address"
                  ></v-text-field>
                  <v-select
                    :items="city"
                    label="Thành phố"
                    v-model="order.city"
                  ></v-select>
                  <v-select
                    :items="district"
                    label="Quận/Huyện"
                    v-model="order.district"
                  ></v-select>
                  <v-select
                    :items="ward"
                    v-model="order.ward"
                    label="Phường/Xã"
                  ></v-select>
                  <v-textarea
                    name="input-7-1"
                    label="Ghi chú ship hàng"
                    hint="Ghi chú khi ship hàng"
                    v-model="order.note"
                  ></v-textarea>


              </td>
            </template>
          </v-data-table>
</template>
<script>
export default {
    name: 'StepTwo',
    computed:{

    },
    data () {
      return {
        order: {
            link: "",
            category: "",
            quantity: "",
            description: "",
            discount: "",
            firstname: "",
            lastname: "",
            address:"",
            city:"",
            district:"",
            ward:"",
            note: ""
        },
        city: ["Bà Rịa","Bạc Liêu","Bảo Lộc","Bắc Giang",
            "Bắc Kạn","Bắc Ninh","Bến Tre","Biên Hòa","Buôn Ma Thuột",
            "Cà Mau","CamRanh","Cao Bằng","Cao Lãnh","Cẩm Phả","Châu Đốc",
            "Đà Lạt","Điện Biên Phủ","Đông Hà","Đồng Hới","Hà Nội","Hà Giang",
            "Hạ Long","Hà Tĩnh","Hải Dương","Hồ Chí Minh","Hòa Bình","Hội An","Huế",
            "Hưng Yên","Kon Tum","Lai Châu","Lạng Sơn","Lào Cai","Long Xuyên","Móng Cái",
            "Mỹ Tho","Nam Định","Nha Trang","Ninh Bình","Phan Rang Tháp Chàm","Phan Thiết",
            "Phủ Lý","Phúc Yên","Pleiku","Quảng Ngãi","Quy Nhơn","Rạch Giá","Sa Đéc","Sầm Sơn",
            "Sóc Trăng","Sơn La","Sông Công","Tam Điệp","Tam Kỳ",
            "Tân An","Tây Ninh","Thái Bình","Thái Nguyên","Thanh Hóa","Thủ Dầu Một",
            "Trà Vinh","Tuy Hòa","Tuyên Quang","Uông Bí","Vị Thanh","Việt Trì",
            "Vinh","Vĩnh Long","Vĩnh Yên","Vũng Tàu","Yên Bái"],
        district : ["Quận 1","Quận 2","Quận 3","Quận 4"],
        ward: ["Phường 1","Phường 2","Phường 3"],
        headers: [
          {
            text: 'Order Information',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          {  text: 'Personal Information',
            align: 'left',
            sortable: false,
            value: 'name' },
        ],
        desserts: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
        ]
      }
    }
}
</script>