<template>
  <header class="main-header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logogiac.svg" alt="Giac oil & gas" class="logo-img" />
      </router-link>
    </div>

    <nav>
      <router-link to="/nuestra-empresa">Nosotros</router-link>
      <router-link to="">Ingeniería</router-link>
      <router-link to="">Construcción</router-link>
      <router-link to="">Proyectos</router-link>
      <router-link to="">Certificaciones</router-link>
      <router-link to="/oficinas">Oficinas</router-link>
      <router-link to="/contacto">Contacto</router-link>

    </nav>

  </header>
</template>

<script setup>
</script>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff;
}

nav a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
}

nav a:hover {
  color: #5c5c5c;
}

.logo-img {
  width: 6rem;
}

.main-header {
  background:transparent;
}
</style>