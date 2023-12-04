<template>
    <v-layout class="overflow-visible">
      <v-bottom-navigation v-model="value" color="primary" horizontal>

        <v-btn>
            <a href="https://github.com/Vladimir-Mardanshin" target="_blank" class="forbn">
              GitHub
            </a>
          </v-btn>
          
          <v-btn>
            <a href="https://vk.com/vm_mardanshin" target="_blank" class="forbn">
              ВКонтакте
            </a>
          </v-btn>

          <button class="btn" @click="changeIcon"><i :class="icon"></i></button>

      </v-bottom-navigation>
    </v-layout>
  </template>
  
  <script>
  export default {
    name: 'BottomNavigation',
    data() {
      return {
        icon: 'fa fa-thumbs-o-up',
        check: true
      }
    },
    methods: {
      changeIcon() {
        if (this.check) {
          this.icon = 'fa fa-thumbs-up';
          this.check = false;
          alert('Мы рады, что нравимся вам)');
        } else {
          this.icon = 'fa fa-thumbs-o-up';
          this.check = true;
          alert('Очень жаль(');
        }
      }
    }
  }
  </script>

<style>

.btn {
    border: none; /* Remove borders */
    color: black; /* White text */
    padding: 12px 16px; /* Some padding */
    font-size: 16px; /* Set a font size */
    cursor: pointer; /* Mouse pointer on hover */
}

.forbn {
    text-decoration: none; 
    color: black; 
    font-family: 'Comic Sans MS';
}

</style>
  
  