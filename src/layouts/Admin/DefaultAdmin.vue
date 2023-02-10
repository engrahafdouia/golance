
<template>
  <v-app>
<v-row>
<!-- <CardDash/> -->
        <app-bar />
        <v-main>
      <router-view />
    </v-main>
</v-row>





  <!-- <v-footer class="center-text">design By Rahaf Douiar</v-footer> -->
  </v-app>
</template>
<script setup>
// import CardDash from '@/components/CardDash.vue';
import AppBar from './AppBar.vue';

</script>
