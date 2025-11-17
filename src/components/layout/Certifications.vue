<template>
  <section class="certifications">

    <h2> Sistema de gestión integral certificado</h2>

    <p>
      Cuenta con un sistema de gestión integral certificado
      (ISO 9001:2015, ISO 45001:2018, e ISO 14001:2015).
    </p>

    <div class="logos">

      <img src="../../assets/atc.png" height="185"
           width="170" alt="ISO 1"/>
      <img src="../../assets/atc.png" height="185"
           width="170" alt="ISO 2"/>
      <img src="../../assets/atc.png" height="185"
           width="170" alt="ISO 3"/>

    </div>

    <button class="conoce-mas">Ver más certificaciones</button>
  </section>
</template>

<style scoped>

.certifications h2 {
  text-align: center;
}
.certifications {
  text-align: right;
  padding: 2rem 1rem;
  margin: 2rem 0;
  color: white;
  background-color: #2D2D2D;
  font-size: 35px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

.certifications p {
  text-align: center;
  font-size: 25px;
  font-weight: 100;

}

.logos {
  display: flex;
  gap: 8rem;
  margin-bottom: 1rem;
  text-align: center;
  padding-top: 40px;
  justify-content: center;
  padding-bottom: 30px;
}

.logo-placeholder {
  padding: 1rem;
  background: #f0f0f0;
  border-radius: 4px;
  font-weight: bold;
  color: #777;
}

.conoce-mas {
  margin-top: 32px;
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 500;
  color: black;
  background: white;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  width: 390px;
  position: relative;
  z-index: 1;
  display: block;
  margin: 32px auto 0 auto;
}

.conoce-mas:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.03);
}

</style>
<script setup lang="ts">
</script>