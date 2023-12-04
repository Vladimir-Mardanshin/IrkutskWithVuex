<template>
  <v-container fluid>
      <v-app-bar color="teal-darken-4">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>
      <v-btn>
        <router-link to="/" class="forb">Главная</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/first" class="forb">Достопримечательности</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/second" class="forb">Интересные факты</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/three" class="forb">Еда</router-link>
      </v-btn>
      
    </v-app-bar>
    </v-container>
</template>

<script>
export default {
  name: 'MyNavbar'
}
</script>

<style>

.forb {
  text-decoration: none;
  color: white;
  font-family: 'Comic Sans MS';
}

</style>
