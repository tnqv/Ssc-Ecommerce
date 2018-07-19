<template>
      <v-data-table
        :headers="headers"
        :items="desserts"
        hide-actions
        class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.calories }}</td>
          <td >{{ props.item.fat }}</td>
          <td >{{ props.item.carbs }}</td>
        </template>
      </v-data-table>
</template>
<script>
export default {
   name: 'StepThree',
   data () {
      return {
        headers: [
          {
            text: 'Link sản phẩm',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Loại', value: 'calories', sortable: false},
          { text: 'Số lượng', value: 'calories', sortable: false},
          { text: 'Mã giảm giá', value: 'calories', sortable: false},
        ],
        desserts: [
          {
            value: false,
            name: 'https://www.amazon.com/dp/0128042915/?coliid=I2L9RDENU0AR5U&colid=SGJLSM1KT52K&psc=0&ref_=lv_ov_lig_dp_it',
            calories: 'Book',
            fat: '1',
            carbs: 'Bạn anh Thắng',
          },
        ]
      }
    }
}
</script>
