<template>
  <section class="hero">
    <video
        autoplay
        muted
        loop
        playsinline
        class="bg-video"
    >
      <source :src="videoHeader" type="video/mp4" />
    </video>

    <div class="hero-content">
      <h1>Building the future</h1>

      <p>
        GIAC OIL & GAS empresa Mexicana, socialmente responsable.
        Realiza proyectos de ingeniería en gasoductos para el servicio de Gas Natural e incursiona en proyectos
        integrales para el sector energético, proponiendo soluciones innovadoras para la medición,
        regulación, análisis y control de fludos.
      </p>

      <button class="conoce-mas">Conocer más</button>
    </div>
  </section>
</template>

<script setup>
import videoHeader from '@/assets/header.mp4'
</script>

<style scoped>

.hero {

  width: 100%;
  height: 90vh;
  max-height: 900px;
  min-height: 500px;
  color: white;
  overflow: hidden;
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

.hero-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 32px;
}

.hero-content h1 {
  margin: 0 0 24px 0;
  font-size: 96px;
}

.hero-content p {
  max-width: 900px;
  line-height: 1.6;
  font-size: 28px;
}

.conoce-mas {
  margin-top: 32px;
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
}

.conoce-mas:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.03);
}

@media (max-width: 992px) {
  .hero-content h1 {
    font-size: 64px;
  }
  .hero-content p {
    font-size: 22px;
  }
}

@media (max-width: 600px) {
  .hero {
    height: 80vh;
    min-height: 450px;
  }

  .hero-content h1 {
    font-size: 42px;
    text-align: center;
  }

  .hero-content p {
    font-size: 18px;
    text-align: center;
  }

  .hero-content {
    padding: 0 20px;
    align-items: center;
  }

  .conoce-mas {
    font-size: 16px;
  }
}

</style>
