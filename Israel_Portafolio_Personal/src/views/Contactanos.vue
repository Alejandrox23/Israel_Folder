<script setup>
import { ref } from 'vue';
import fondo from '../assets/obra1.jpeg' // HERO

/* 🔥 DATOS */
const nombre = ref('');
const email = ref('');
const telefono = ref('');
const interes = ref('');
const mensaje = ref('');

/* 🔥 WHATSAPP (Ecuador sin 0 → 593) */
const numero = '593986480713';

/* 🔥 ENVIAR */
const enviarWhatsApp = () => {

  // ✅ VALIDACIÓN
  if (!nombre.value || !email.value || !interes.value || !mensaje.value) {
    alert("Completa los campos obligatorios");
    return;
  }

  // 🔥 MENSAJE FORMATEADO
  const texto = 
`Hola, muy buenas 

Soy ${nombre.value}.

Estoy interesado en ${interes.value} y me gustaría recibir más información.

Mi contacto víaa Email es: ${email.value}

Mi contacto vía Teléfono: ${telefono.value || 'No especificado'}

Mensaje:
${mensaje.value}

Quedo atento, gracias.`;

  // 🔥 URL WHATSAPP
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // 🔥 ABRIR
  window.open(url, '_blank');
};
</script>

<template>
  <div class="contacto-page text-white">

    <!-- HERO -->
    <section class="hero d-flex align-items-center justify-content-center text-center">

      <div class="overlay"></div>

      <div class="container position-relative contenido-hero">
        <h1 class="titulo">
          CONTÁCTA<span class="text-green">NOS</span>
        </h1>

        <p class="subtitulo">
          Conecta • Colabora • Crea
        </p>
      </div>

    </section>

    <!-- FORMULARIO -->
    <section class="container py-5">

      <div class="formulario-box mx-auto">

        <h3 class="text-center mb-4">
          Envíanos un mensaje
        </h3>

        <form @submit.prevent="enviarWhatsApp">

          <!-- NOMBRE -->
          <div class="mb-3">
            <label class="form-label">Nombre *</label>

            <input
              v-model="nombre"
              type="text"
              class="form-control"
              placeholder="Ingresa tu nombre"
            >
          </div>

          <!-- EMAIL -->
          <div class="mb-3">
            <label class="form-label">Email *</label>

            <input
              v-model="email"
              type="email"
              class="form-control"
              placeholder="correo@email.com"
            >
          </div>

          <!-- TELÉFONO -->
          <div class="mb-3">
            <label class="form-label">Teléfono</label>

            <input
              v-model="telefono"
              type="text"
              class="form-control"
              placeholder="098..."
            >
          </div>

          <!-- INTERÉS -->
          <div class="mb-3">
            <label class="form-label">Interés *</label>

            <select
              v-model="interes"
              class="form-select"
            >
              <option disabled value="">
                Seleccione una opción
              </option>

              <option>Esculturas</option>
              <option>Murales</option>
              <option>Pinturas</option>
              <option>Ilustraciones</option>
              <option>Comics</option>
            </select>
          </div>

          <!-- MENSAJE -->
          <div class="mb-4">
            <label class="form-label">Mensaje *</label>

            <textarea
              v-model="mensaje"
              rows="5"
              class="form-control"
              placeholder="Escribe tu mensaje describiendo el trabajo que deseas realizar..."
            ></textarea>
          </div>

          <!-- BOTÓN -->
          <button
            type="submit"
            class="btn btn-green w-100"
          >
            Enviar a WhatsApp
          </button>

        </form>

      </div>

    </section>

  </div>
</template>

<style scoped>

/* HERO */
.hero {
  height: 50vh;
  position: relative;

  background:
    linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),
    url('../assets/obra1.jpeg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
}

/* CONTENIDO HERO */
.contenido-hero {
  z-index: 2;
}

/* TEXTOS */
.titulo {
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 900;
  letter-spacing: 2px;
}

.subtitulo {
  opacity: 0.8;
  letter-spacing: 3px;
  font-size: 1.1rem;
}

.text-green {
  color: #00ff88;
}

/* FORMULARIO */
.formulario-box {
  max-width: 600px;

  background: rgba(255,255,255,0.03);

  padding: 30px;

  border-radius: 15px;

  border: 1px solid rgba(255,255,255,0.1);

  backdrop-filter: blur(8px);
}

/* LABELS */
.form-label {
  margin-bottom: 8px;
  font-weight: 500;
}

/* INPUTS */
.form-control,
.form-select {
  background: rgba(0,0,0,0.6);

  border: 1px solid rgba(255,255,255,0.2);

  color: white;
}

/* PLACEHOLDER */
.form-control::placeholder {
  color: rgba(255,255,255,0.5);
}

/* FOCUS */
.form-control:focus,
.form-select:focus {
  border-color: #00ff88;

  box-shadow: 0 0 10px #00ff88;

  background: rgba(0,0,0,0.8);

  color: white;
}

/* OPTIONS */
.form-select option {
  background: #111;
  color: white;
}

/* BOTÓN */
.btn-green {
  background: #00ff88;

  color: black;

  font-weight: bold;

  padding: 12px;

  border: none;

  transition: 0.3s ease;
}

.btn-green:hover {
  background: black;

  color: #00ff88;

  border: 1px solid #00ff88;

  box-shadow: 0 0 10px #00ff88;
}

/* MOBILE */
@media (max-width: 768px) {

  .hero {
    height: 35vh;
  }

  .titulo {
    font-size: 2.5rem;
  }

  .subtitulo {
    font-size: 0.9rem;
  }

  .formulario-box {
    padding: 20px;
  }

}

</style>