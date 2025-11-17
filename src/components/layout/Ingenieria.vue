<template>
  <section class="ingenieria">
    <!-- <video
        autoplay
        muted
        loop
        playsinline
        class="bg-video"
    >
      <source :src="videoHeader" type="video/mp4" />
    </video>
    -->

    <h2>Ingeniería</h2>

    <ul>
      <li>Ingeniería conceptual y básica.</li>
      <li>Levantamiento físico mediante equipo laser scanner FARO 3D.</li>
    </ul>

    <button class="conoce-mas">Ver más servicios</button>
  </section>
</template>

<script setup>
import videoHeader from "@/assets/header.mp4";
</script>

<style scoped>

.ingenieria {
  position: relative;
  overflow: hidden;
  min-height: 500px;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 0;
}


.ingenieria h2 {
  font-size: 75px;
  margin-bottom: 20px;
  color:white;
  margin-left:70px;
  position: relative;
  z-index: 1;
}

.ingenieria ul {
  color:white;

  font-size: 25px;
  position: relative;
  margin-left:55px;
  z-index: 1;
}

.ingenieria li {
  margin-bottom: 10px;
}

.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
  z-index: 0;
}

.conoce-mas {
  margin-top: 32px;
  margin-left: 72px;
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 500;
  color: white;
  background: transparent;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  width: 390px;
  position: relative;
  z-index: 1;
}

.conoce-mas:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.03);
}

.ingenieria {
  position: relative;
  overflow: hidden;
  min-height: 500px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);

  background-image: url('@/assets/ing.png'); /* 🔥 aquí va tu imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
