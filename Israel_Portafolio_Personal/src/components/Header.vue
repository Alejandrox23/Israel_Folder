<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['navbar navbar-expand-lg navbar-dark custom-navbar', { scrolled }]">
    <div class="container">

      <!-- ubicacion del logo para la pagina web -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="/logo.webp" alt="Logo" class="logo">
      </router-link>

      <!-- Boton responsivo -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Main -->
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">

        <!--  Nav menu -->
        <ul class="navbar-nav mx-auto">

          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/portafolio">Portafolio</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/sobre-nosotros">Sobre Nosotros</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contactanos">Contáctanos</router-link>
          </li>

        </ul>

        <!-- Iconos redes sociales -->
        <div class="social-icons d-flex gap-3">

          <a href="https://www.tiktok.com/@israelcambal"><i class="bi bi-tiktok"></i></a>
          <a href="https://www.facebook.com/israel.cambal?locale=es_LA"><i class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/israelcambal/"><i class="bi bi-instagram"></i></a>

        </div>

      </div>
    </div>
  </nav>
</template>

<style scoped>

.custom-navbar {
  padding: 9px 0;

  background: linear-gradient(
    135deg,
    #04171e,
    #203a43,
    #167299
  );
  backdrop-filter: blur(14px);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  transition: background 0.4s ease, padding 0.4s ease;
  will-change: background, padding;

  animation: fadeDown 0.8s ease;
}

/* animación entrada */
@keyframes fadeDown {
  from {
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* scroll state */
.scrolled {
  padding: 6px 0;
  background: rgba(15, 25, 35, 0.75);
  backdrop-filter: blur(18px);
}

/* LOGO */
.logo {
  height: 38px;
  transition: transform 0.35s ease, filter 0.35s ease, height 0.35s ease;
  will-change: transform;
}

.logo:hover {
  transform: scale(1.1) rotate(-2deg);
  filter: brightness(1.2);
}

.scrolled .logo {
  height: 30px;
}

/* LINKS */
.nav-link {
  position: relative;
  color: #eaeaea !important;
  font-size: 0.9rem;
  letter-spacing: 0.1em;

  transition: transform 0.3s ease, color 0.3s ease;
  will-change: transform;
}

/* hover efecto */
.nav-link:hover {
  color: #ffffff !important;
  transform: translateY(-2px);
  text-shadow: 0 0 10px rgba(255,255,255,0.5);
}

/* underline animado */
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;

  width: 100%;
  height: 2px;

  background: linear-gradient(90deg, transparent, white, transparent);

  transform: scaleX(0);
  transform-origin: center;

  transition: transform 0.4s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* activo */
.router-link-exact-active {
  color: #fff !important;
  text-shadow: 0 0 8px rgba(255,255,255,0.4);
}

/* REDES SOCIALES */
.social-icons a {
  color: #bbb;
  font-size: 1.2rem;

  transition: transform 0.3s ease, color 0.3s ease, filter 0.3s ease;
}

.social-icons a:hover {
  color: #fff;
  transform: translateY(-3px) scale(1.15);
  filter: drop-shadow(0 0 6px rgba(255,255,255,0.6));
}

/* 🔹 MENÚ MÓVIL */
@media (max-width: 991px) {

  .navbar-nav {
    text-align: center;
    margin-top: 12px;
  }

  .nav-link {
    padding: 8px 0;
    font-size: 1rem;
  }

  .social-icons {
    justify-content: center;
    margin-top: 10px;
  }

  .custom-navbar {
    backdrop-filter: blur(10px);
  }
}

/* 🔹 menú desplegado (cuando haces click en hamburguesa) */
.navbar-collapse.show {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 12px;
  margin-top: 10px;
}




</style>