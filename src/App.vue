<script setup>
import NavigationDrawer from './components/NavigationDrawer.vue';
import { useAuthStore } from '@/stores';
const auth = useAuthStore();
</script>

<template>
  <v-app>
    <NavigationDrawer v-if="auth.user" />
    <v-app-bar v-if="auth.user" title="WeRace - Maintenance Application"
      ><a @click="auth.logout()" class="nav-item nav-link mx-4"
        >Logout</a
      ></v-app-bar
    >
    <v-main><router-view></router-view> </v-main>
  </v-app>
</template>
