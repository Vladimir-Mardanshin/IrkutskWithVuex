<template>
  <nav></nav>
  <v-app style="background-image: url(https://images.wallpapershq.com/wallpapers/160/wallpaper_160_2160x3840.jpg);">
    <MyNavbar />
    <router-view />
    <BottomNavigation />
  </v-app>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue';
import BottomNavigation from './components/BottomNavigation.vue';

export default {
  components: {
    MyNavbar,
    BottomNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}
</style>
