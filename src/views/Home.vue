<template>
  <Hero/>
  <Certifications />

  <ServiceCategory
      :title="ingenieria.title"
      :services="ingenieria.items"
  />

  <ServiceCategory2
      :title="construccion.title"
      :services="construccion.items"
  />

</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Certifications from '@/components/Certifications.vue';
import ServiceCategory from '@/components/ui/ServiceCategory.vue';
import ServiceCategory2 from '@/components/ui/ServiceCategory2.vue';


const ingenieria = {
  title: 'Ingeniería',
  items: [
    'Ingeniería conceptual y básica.',
    'Levantamiento físico mediante equipo laser scanner FARO 3D.'
  ]

};

// Se quita el "ref()" aquí también
const construccion = {
  title: 'Construcción',
  items: [
    'Construcción, mantenimiento y fabricación de trenes de medición fiscal para hidrocarburos.',
    'Construcción, mantenimiento y fabricación de trenes de medición fiscal para medición de agua.',
    'Construcción, mantenimiento y fabricación de tanques presurizados.',
    'Construcción, mantenimiento y reparación de Tanques de Almacenamiento.'
  ],
};
</script>