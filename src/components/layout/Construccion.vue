<template>
  <section class="construccion">

    <div class="right-content">
      <h2>Construcción</h2>

      <ul>
        <li>Construcción, mantenimiento y fabricación de trenes de medición fiscal para hidrocarburos.</li>
        <li>Construcción, mantenimiento y fabricación de trenes de medición fiscal para medición de agua.</li>
        <li>Construcción, mantenimiento y fabricación de tanques presurizados.</li>
        <li>Construcción, mantenimiento y reparación de Tanques de Almacenamiento.</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import videoHeader from "@/assets/header.mp4";
</script>

<style scoped>
/* FULL WIDTH SECTION */
.construccion {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: hidden;
  padding: 80px 0;
}

/* CONTENT ALIGNED TO THE RIGHT */
.right-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px; /* área de contenido */
  margin: 0 auto;
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 🔥 contenido a la derecha */
  text-align: right;      /* 🔥 texto alineado derecha */
}

.right-content h2 {
  font-size: 75px;
  margin-bottom: 20px;
  color: white;
  padding-right: 90px;
}

.right-content ul {
  font-size: 25px;
  color: white;
  max-width: 700px;
  padding-right: 90px;
  text-align: left;
}

.right-content li {
  margin-bottom: 10px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .right-content h2 {
    font-size: 42px;
  }

  .right-content ul {
    font-size: 18px;
  }
}
</style>
