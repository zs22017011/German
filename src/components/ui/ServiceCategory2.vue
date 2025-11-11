<template>
  <section class="service-category" :style="{ textAlign: align }">

    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(service, index) in services" :key="index">
        {{ service }}
      </li>
    </ul>
    <h3>Clientes y proyectos</h3>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  services: {
    type: Array,
    required: true
  },
  align: {
    type: String,
    default: 'left'
  }
});
</script>

<style scoped>

.service-category {
  padding: 128px 16px;
  color: #f0f0f0;
  text-align: left;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent 40%, rgba(0, 0, 0, 1)),
  url('../../assets/Arqui.mov') center/cover no-repeat;


}

h1 {
  font-size: 64px;
  padding-bottom: 0.5rem;
  color: #ffffff;
}

h3 {
  font-size: 24px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 0.75rem;
  line-height: 1.5;
}
</style>