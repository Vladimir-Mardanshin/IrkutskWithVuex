<template>
    <v-col md="4">
    <v-card>
      <v-img height="250" :src="place.photo"></v-img> 
      <v-card-title> 
        <h3 class="text-h4">{{ place.name }}</h3>
      </v-card-title>
      <v-card-text>
        <p class="text-body-1">{{ place.info }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>
  
  <script>
  export default {
    name: 'MapPlace',
    props: {
            place: Object
          }
  }
  </script>
  
  <style>
  </style>
  