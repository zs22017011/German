<template>

  <TheHeader />

  <main>
    <router-view />
  </main>

</template>

<script setup>
import TheHeader from '@/components/layout/TheHeader.vue';
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  background: #000000;
}
main {
  padding: 20px;
}
</style>