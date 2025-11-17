<template>
  <section class="empresa">

    <!-- TÍTULO -->
    <h2>Sobre Nuestra Empresa</h2>

    <!-- TEXTO SUPERIOR -->
    <p class="intro">
      GIAC OIL & GAS es una empresa Mexicana, socialmente responsable,
      inicio operaciones en el año 2018, desarrollando proyectos de ingeniería en gasoductos para
      el servicio de Gas Natural, e incursionamos en proyectos integrales para el sector energético,
      proponiendo soluciones innovadoras para la medición, regulación y análisis de fluidos.
      Estamos comprometidos con brindar experiencia, infraestructura y tecnología para
      el desarrollo de nuestros proyectos y servicios.
    </p>

    <!-- TARJETAS -->
    <div class="cards">

      <div class="card">
        <img src="@/assets/iconos/mision.svg" alt="Misión" class="icon-img" />
        <h3>Misión</h3>
        <p>
          Ser un grupo de profesionales visionarios y creativos, enfocados en la satisfacción
          de nuestros clientes mediante soluciones técnicas innovadoras, seguras y sustentables,
          colaborando en el desarrollo económico, social, humano y ambiental.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/iconos/vision.svg" alt="Visión" class="icon-img" />
        <h3>Visión</h3>
        <p>
          Consolidarnos como una empresa especializada, líder en el mercado energético nacional,
          que impulse el desarrollo mediante la participación de un capital humano de alto valor.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/iconos/valores.svg" alt="Valores" class="icon-img" />
        <h3>Valores</h3>
        <p>
          Integridad, compromiso, responsabilidad, eficiencia, transparencia, innovación y
          mejora continua. Estos valores rigen nuestra conducta profesional y definen nuestras
          decisiones y estrategias.
        </p>
      </div>

      <div class="card">
        <img src="@/assets/iconos/objetivo.svg" alt="Objetivo" class="icon-img" />
        <h3>Objetivo</h3>
        <p>
          Desarrollar proyectos de ingeniería y energía con los más altos estándares de calidad
          y seguridad, ofreciendo soluciones integrales que contribuyan al crecimiento sostenible
          de nuestros clientes y del país.
        </p>
      </div>

    </div>

  </section>
</template>

<style scoped>
/* ==== SECCIÓN GENERAL ==== */
.empresa {
  background: #ffffff;
  color: #000;
  padding: 3rem 1rem 4rem;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

/* ==== TÍTULO ==== */
.empresa h2 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 1rem;
  font-weight: 700;
}

/* ==== TEXTO SUPERIOR ==== */
.intro {
  max-width: 900px;
  margin: 0 auto 3rem auto;
  text-align: center;
  font-size: 18px;
  line-height: 1.6;
  color: #555;
}

/* ==== TARJETAS ==== */
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: auto;
}

/* Tarjeta */
.card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  text-align: center;
  border: 1px solid #e6e6e6;
}

/* Icono */
.icon {
  font-size: 40px;
  margin-bottom: 1rem;
}

/* Título de cada tarjeta */
.card h3 {
  font-size: 22px;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

/* Texto */
.card p {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
}

/* ==== RESPONSIVE ==== */
@media (max-width: 1100px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .empresa h2 {
    font-size: 32px;
  }

  .intro {
    font-size: 16px;
  }
}
</style>
<script setup lang="ts">
</script>