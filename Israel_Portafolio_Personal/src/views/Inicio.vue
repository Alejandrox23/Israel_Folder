<script setup>
import { onMounted } from 'vue'

// 🔹 IMÁGENES
import fondo from '../assets/obra1.jpeg' // HERO
import obra1 from '../assets/obra1.jpeg' // GALERÍA

// 🔹 DATA
const obras = [
  { id: 1, imagen: obra1, titulo: 'Escultura', autor: 'Autor' },
  { id: 2, imagen: obra1, titulo: 'Mural', autor: 'Autor' },
  { id: 3, imagen: obra1, titulo: 'Cuadro', autor: 'Autor' },
  { id: 4, imagen: obra1, titulo: 'Arte', autor: 'Autor' },
  { id: 5, imagen: obra1, titulo: 'Literatura', autor: 'Autor' },
  { id: 6, imagen: obra1, titulo: 'Busto', autor: 'Autor' }
]

// 🔹 ANIMACIÓN SCROLL
onMounted(() => {
  const elements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    {
      threshold: 0.2
    }
  )

  elements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="inicio">

    <!-- 🔹 HERO DINÁMICO -->
    <section class="hero" :style="{ backgroundImage: `url(${fondo})` }">
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <h1>Portafolio Artístico</h1>
        <p>Creatividad • Expresión • Identidad</p>

        <div class="hero-actions">
          <router-link to="/galeria" class="btn-main">
            Explorar Galería
          </router-link>

          <router-link to="/contactanos" class="btn-ghost">
            Contacto
          </router-link>
        </div>
      </div>
    </section>

    <!-- 🔹 GALERÍA (MASONRY REAL) -->
    <section class="section-full">

      <div class="section-header">
        <h2>Galería</h2>
        <router-link to="/galeria" class="link-line">
          Ver todo
        </router-link>
      </div>

      <div class="gallery-masonry">

        <div 
          class="gallery-card reveal"
          v-for="item in obras"
          :key="item.id"
        >
          <img :src="item.imagen" />

          <div class="card-overlay">
            <h5>{{ item.titulo }}</h5>
            <span>{{ item.autor }}</span>
          </div>
        </div>

      </div>

    </section>

    <!-- 🔹 SOBRE (INTEGRADO, NO CAJAS SUELTAS) -->
    <section class="section-dark">

      <div class="about-grid">

        <div class="about-text reveal">
          <h2>Sobre Nosotros</h2>
          <p>
            Somos un espacio creativo donde el arte toma forma en múltiples
            disciplinas: escultura, pintura, literatura y más.
          </p>

          <router-link to="/sobre-nosotros" class="btn-main">
  Conocer más
</router-link>
        </div>

        <div class="about-cards">

          <div class="about-card reveal">
            <h4>Misión</h4>
            <p>Transmitir emociones reales a través del arte.</p>
          </div>

          <div class="about-card reveal">
            <h4>Visión</h4>
            <p>Inspirar y conectar mediante obras únicas.</p>
          </div>

        </div>

      </div>

    </section>

    <!-- 🔹 CONTACTO (CALL TO ACTION FUERTE) -->
    <section class="contact-cta">

      <div class="cta-content reveal">
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Colaboremos y llevemos tu idea al siguiente nivel</p>

        <router-link to="/contactanos" class="btn-main">
          Contactar ahora
        </router-link>
      </div>

    </section>

  </div>
</template>
<style scoped>

/* 🔹 RESET BASE */
.inicio {
  width: 100%;
  overflow-x: hidden;
  background: #000;
  color: #fff;
}

/* ================= HERO ================= */

.hero {
  height: 85vh;
  min-height: 550px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

/* overlay moderno */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0,0,0,0.7),
    rgba(0,0,0,0.5),
    rgba(0,0,0,0.9)
  );
}

/* contenido */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  padding: 20px;
  animation: fadeHero 1.2s ease;
}

/* texto */
.hero-content h1 {
  font-size: 3.2rem;
  color: #00ff9c;
  margin-bottom: 10px;
}

.hero-content p {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 25px;
}

/* botones */
.hero-actions {
  display: flex;
  gap: 15px;
  justify-content: center;
}

/* botón principal */
.btn-main {
  background: #00ff9c;
  color: #000;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
}

.btn-main:hover {
  background: #00cc7a;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px #00ff9c55;
}

/* botón ghost */
.btn-ghost {
  border: 1px solid #00ff9c;
  color: #00ff9c;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;
}

.btn-ghost:hover {
  background: #00ff9c;
  color: #000;
}

/* animación hero */
@keyframes fadeHero {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* zoom cinematic */
.hero {
  animation: zoomHero 12s ease infinite alternate;
}

@keyframes zoomHero {
  from { background-size: 100%; }
  to { background-size: 115%; }
}

/* ================= SECCIONES ================= */

.section-full {
  padding: 80px 8%;
}

.section-dark {
  padding: 80px 8%;
  background: #050505;
}

/* encabezado */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-header h2 {
  color: #00ff9c;
}

/* link elegante */
.link-line {
  color: #fff;
  text-decoration: none;
  position: relative;
}

.link-line::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background: #00ff9c;
  left: 0;
  bottom: -4px;
  transition: 0.3s;
}

.link-line:hover::after {
  width: 100%;
}

/* ================= GALERÍA MASONRY ================= */

.gallery-masonry {
  column-count: 3;
  column-gap: 15px;
}

.gallery-card {
  break-inside: avoid;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

/* imágenes dinámicas */
.gallery-card img {
  width: 100%;
  display: block;
  transition: 0.4s;
}

/* hover */
.gallery-card:hover img {
  transform: scale(1.08);
  filter: brightness(1.1);
}

/* overlay */
.card-overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(transparent, black);
  opacity: 0;
  transition: 0.3s;
}

.gallery-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay h5 {
  margin: 0;
  color: #00ff9c;
}

.card-overlay span {
  font-size: 0.9rem;
  color: #ccc;
}

/* ================= SOBRE ================= */

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.about-text h2 {
  color: #00ff9c;
}

.about-text p {
  margin: 20px 0;
}

.about-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card {
  background: rgba(20,20,20,0.7);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #222;
  transition: 0.3s;
}

.about-card:hover {
  border-color: #00ff9c;
  box-shadow: 0 0 15px #00ff9c55;
}

/* ================= CONTACTO ================= */

.contact-cta {
  padding: 100px 20px;
  text-align: center;
  background: linear-gradient(#000, #050505);
}

.cta-content h2 {
  font-size: 2.2rem;
  margin-bottom: 10px;
}

.cta-content p {
  margin-bottom: 20px;
  color: #ccc;
}

/* ================= ANIMACIÓN SCROLL ================= */

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.6s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 900px) {
  .gallery-masonry {
    column-count: 2;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .gallery-masonry {
    column-count: 1;
  }

  .hero-content h1 {
    font-size: 2.2rem;
  }
}

</style>