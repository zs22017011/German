<template>
  <section class="contacto">

    <div class="contacto-header">
      <h2>Hablanos de tu proyecto</h2>
      <p>Estamos listos para ayudarte con tu próximo desafío</p>
    </div>

    <div class="contacto-grid">

      <div class="info">

        <div class="info-item">
          <span class="icon">📞</span>
          <div>
            <h4>Teléfono</h4>
            <p>+52 921 234 89 34</p>
          </div>
        </div>

        <div class="info-item">
          <span class="icon">✉️</span>
          <div>
            <h4>Email</h4>
            <p>example@gmail.com</p>
          </div>
        </div>

        <div class="info-item">
          <span class="icon">📍</span>
          <div>
            <h4>Ubicación</h4>
            <p>
              Francisco Villa #101<br>
              Col. Luis Echeverría<br>
              C.P. 96440<br>
              Coatzacoalcos, Veracruz
            </p>
          </div>
        </div>

        <img src="@/assets/mapa.png" class="mapa" alt="Mapa" />

      </div>

      <form class="formulario">

        <h3>Solicitar cotización</h3>
        <p class="form-desc">Cuéntanos de tu proyecto y te contactaremos pronto</p>

        <div class="form-row">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
          <label>Empresa</label>
          <input type="text" placeholder="Nombre de la empresa" />
        </div>

        <label>Email</label>
        <input type="email" placeholder="Correo electrónico" />

        <label>Descripción</label>
        <textarea placeholder="Describe tu proyecto..."></textarea>

        <button type="submit" class="btn-enviar">Enviar solicitud</button>
      </form>

    </div>

  </section>
</template>

<style scoped>

.contacto {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background-color: #ffffff;
  padding: 4rem 1rem;
}

.contacto-header {
  text-align: center;
  margin-bottom: 3rem;
}

.contacto-header h2 {
  font-size: 48px;
  margin: 0;
}

.contacto-header p {
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  color: black;
}

.contacto-grid {
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}


.info-item {
  display: flex;
  align-items: CENTER;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.icon {
  font-size: 28px;
}

.info-item h4, .info-item p {
  color: #000 !important;
  margin: 0;
  padding: 5px;
}

.mapa {
  margin-top: 2rem;
  border-radius: 8px;
  width: 100%;
}

.formulario {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 5px 18px rgba(0,0,0,0.1);
}

.formulario h3 {
  margin-top: 0;
  font-size: 28px;
  text-align: center;
}

.form-desc {
  margin-top: -10px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
  text-align: center;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-direction: column;
  width: 100%;
}


.form-group label {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #000;
}
input, textarea {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  margin-bottom: 1rem;
  outline: none;
}

textarea {
  height: 120px;
  resize: none;
}

.btn-enviar {
  margin-top: 0.5rem;
  width: 100%;
  padding: 14px;
  background: #042C62;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-enviar:hover {
  background: #063a85;
}

/* === RESPONSIVE === */
@media (max-width: 900px) {
  .contacto-grid {
    grid-template-columns: 1fr;
  }
}
</style>
<script setup lang="ts">
</script>