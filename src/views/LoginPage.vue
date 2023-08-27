<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '@/stores';

const form = reactive({
  username: '',
  password: '',
});

const doLogin = () => {
  // make api request
  console.log(form);
  const authStore = useAuthStore();
  const { username, password } = form;

  return authStore.login(username, password).catch((error) => {
    console.log(error);
  });
};
</script>

<style lang="scss" scoped></style>

<template>
  <v-container class="fill-height justify-center">
    <v-card width="50%" class="pa-4">
      <legend>Please Logon!</legend>
      <v-text-field v-model="form.username" label="Username" name="username" />
      <v-text-field
        v-model="form.password"
        label="Password"
        name="password"
        type="password"
      />
      <v-btn @click="doLogin">Login</v-btn>
    </v-card>
  </v-container>
</template>
