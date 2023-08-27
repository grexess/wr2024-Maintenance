<script setup>
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const drawer = ref(true);
const navItems = computed(() => {
  return router.getRoutes().filter((route)=> route.meta.show).map((route) => {
    return {
      title: route.meta.title,
      // icon: route.meta.icon,
      path: route.path,
    };
  });
});
</script>
<template>
  <v-navigation-drawer permanent v-model="drawer">
    <v-list nav>
      <v-list-item
        v-for="(item, idx) in navItems"
        :key="idx"
        :prepend-icon="item.icon"
        :title="item.title"
        :to="item.path"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
