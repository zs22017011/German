<template>
  <section class="clientes">

    <h2> Clientes</h2>

    <div class="carousel">

      <div class="carousel-track">
        <img src="@/assets/clientes/pemex.png" alt="Cliente 1" />
        <img src="@/assets/clientes/ami.png" alt="Cliente 1" />
        <img src="@/assets/clientes/scribe.png" alt="Cliente 1" />
        <img src="@/assets/clientes/sedena.png" alt="Cliente 1" />
      </div>

      <p>             </p>

    </div>

  </section>
</template>

<style scoped>

.clientes h2 {
  text-align: center;
}

.clientes {
  text-align: right;
  padding: 1rem 1rem;
  margin: 2rem 0;
  color: black;
  background-color: #FFFFFFE6;
  font-size: 35px;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}


.carousel {
  width: 100%;
  overflow: hidden;  /* oculta imágenes fuera del frame */
  margin-top: 20px;
}

.carousel-track {
  display: flex;
  gap: 4rem;
  animation: scroll 5s linear infinite;
}

.carousel img {
  height: 120px;
  width: auto;
  filter: grayscale(0%);
  opacity: 0.9;
  transition: 0.3s ease;
}

/* Hover */
.carousel img:hover {
  opacity: 1;
  transform: scale(1.08);
}

/*************
 * ANIMACIÓN
 *************/
@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

</style>
<script setup lang="ts">
</script>