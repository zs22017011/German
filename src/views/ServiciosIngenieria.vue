<template>
  <section class="ingenieria">

    <!-- TÍTULO -->
    <h2>Servicios de Ingeniería</h2>

    <!-- INTRO -->
    <p class="intro">
      Ofrecemos soluciones de ingeniería integral para el desarrollo de proyectos en el sector
      energético, petroquímico y de transporte de fluidos. Nuestro enfoque combina
      innovación tecnológica con rigurosos estándares de diseño y normatividad nacional e
      internacional.
    </p>

    <!-- GRID DE TARJETAS -->
    <div class="cards">

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio1.png" alt="" />
        <h3>Estaciones de regulación, medición y control (ERMyC)</h3>
        <p>
          Ingeniería, diseño y construcción de estaciones para gas natural,
          asegurando precisión en la medición, control de presión y flujo.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio2.png" alt="" />
        <h3>Gasoductos, oleoductos y poliductos</h3>
        <p>
          Diseño, ingeniería y construcción de ductos para el transporte seguro y
          eficiente de gas natural, petróleo y derivados.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio3.png" alt="" />
        <h3>Trampas de diablos</h3>
        <p>
          Diseño y fabricación de trampas de diablos para operaciones de limpieza,
          inspección y mantenimiento en ductos.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio4.png" alt="" />
        <h3>Tanques de almacenamiento API 650</h3>
        <p>
          Diseño, fabricación y montaje de tanques de almacenamiento conforme a la
          norma API 650, asegurando calidad estructural.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio5.png" alt="" />
        <h3>Sistemas de tierras y protección atmosférica</h3>
        <p>
          Diseño e instalación de sistemas de puesta a tierra y protección contra
          descargas atmosféricas.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio6.png" alt="" />
        <h3>Sistemas de control automatizados</h3>
        <p>
          Diseño e integración de sistemas de control automatizados que optimizan
          procesos industriales.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio7.png" alt="" />
        <h3>Sistemas de paro por emergencia</h3>
        <p>
          Ingeniería e implementación de sistemas de paro por emergencia (ESD),
          que aseguran la protección de personal, equipo e instalaciones.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio8.png" alt="" />
        <h3>Sistemas de gas y fuego</h3>
        <p>
          Diseño e instalación de sistemas de detección y supresión de gas y fuego,
          garantizando una respuesta rápida y segura ante emergencias.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/imagenes-servicios/servicio9.png" alt="" />
        <h3>Sistemas de telemetría y telecomunicaciones</h3>
        <p>
          Desarrollo e implementación de sistemas de telemetría y telecomunicaciones
          industriales para la supervisión remota.
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.ingenieria {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: #ffffff;
  padding: 3rem 1rem;
  color: black;
}

/* TÍTULO */
.ingenieria h2 {
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 1rem;
}

/* INTRO */
.intro {
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

/* GRID */
.cards {
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* TARJETAS */
.card {
  background: white;
  border-radius: 14px;
  box-shadow: 0 5px 18px rgba(0,0,0,0.08);
  padding: 1rem;
  transition: 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 22px rgba(0,0,0,0.12);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 20px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.card p {
  font-size: 15px;
  color: #555;
  line-height: 1.4;
}

/* RESPONSIVE */
@media (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
<script setup lang="ts">
</script>