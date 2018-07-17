<template>
   <v-toolbar class="white">

      <v-card>
        <v-avatar
        :tile="true">
          <img src="@/assets/travel.png" alt="avatar">
        </v-avatar>
      </v-card>
      <v-toolbar-title v-html="title"></v-toolbar-title>
   </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
      return {
        title: '<font color="#4297D1">Goo</font><font color="#CFCFCF">doo</font>'
      }
  }
}
</script>