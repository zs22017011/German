<template>
  <section class="ingenieria">
    <video
        autoplay
        muted
        loop
        playsinline
        class="bg-video"
    >
      <source :src="videoHeader" type="video/mp4" />
    </video>

    <h2>Ingeniería</h2>

    <ul>
      <li>Ingeniería conceptual y básica.</li>
      <li>Levantamiento físico mediante equipo laser scanner FARO 3D.</li>
    </ul>
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


</style>
