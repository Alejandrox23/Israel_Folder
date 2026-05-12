<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

/* OBSERVER */
let observer;

/* ANIMACIÓN SCROLL */
onMounted(() => {

  const elements = document.querySelectorAll('.reveal');

  observer = new IntersectionObserver(

    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add('active');

        }

      });

    },

    {
      threshold: 0.15
    }

  );

  elements.forEach(el => observer.observe(el));

});

/* LIMPIEZA */
onBeforeUnmount(() => {

  if (observer) {
    observer.disconnect();
  }

});
</script>

<template>

  <div class="sobre-page text-white">

    <!-- HERO -->
    <section
      class="hero d-flex align-items-center justify-content-center text-center"
    >

      <div class="overlay"></div>

      <div class="container position-relative z-2">

        <h1 class="titulo">
          SOBRE
          <span class="text-green">
            NOSOTROS
          </span>
        </h1>

        <p class="subtitulo">
          Arte • Identidad • Expresión
        </p>

      </div>

    </section>

    <!-- ARTISTA -->
    <section class="container py-5 reveal">

      <div class="row align-items-center g-5">

        <!-- FOTO -->
        <div class="col-md-5 text-center">

          <div class="foto-wrapper">

            <img
              src="/obra1.jpeg"
              class="foto-artista"
              alt="Artista"
            />

          </div>

        </div>

        <!-- INFO -->
        <div class="col-md-7">

          <h2 class="nombre">
            Israel Canbal
          </h2>

          <p class="rol text-green">
            Artista Visual • Fundador
          </p>

          <div class="linea-verde"></div>

          <p class="bio">
            Israel Canbal es un artista visual enfocado en la exploración
            del arte contemporáneo mediante pintura, escultura
            y medios digitales.
          </p>

          <p class="bio">
            Su trabajo refleja identidad, innovación y expresión,
            integrando conceptos modernos con una visión cultural.
          </p>

          <p class="bio">
            Su objetivo es crear experiencias visuales que conecten
            emocionalmente con el espectador.
          </p>

          <!-- MISIÓN Y VISIÓN -->
          <div class="row mt-4 g-3">

            <!-- MISIÓN -->
            <div class="col-md-6">

              <div class="card-custom h-100">

                <i class="bi bi-bullseye icono"></i>

                <h5>
                  Misión
                </h5>

                <p>
                  Crear obras que transmitan identidad y pensamiento,
                  usando el arte como medio de expresión contemporánea.
                </p>

              </div>

            </div>

            <!-- VISIÓN -->
            <div class="col-md-6">

              <div class="card-custom h-100">

                <i class="bi bi-eye icono"></i>

                <h5>
                  Visión
                </h5>

                <p>
                  Consolidarse como un referente independiente
                  en innovación visual y conceptual.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- COLECTIVO -->
    <section class="seccion-dark py-5 reveal">

      <div class="container">

        <!-- HEADER -->
        <div class="text-center mb-5">

          <h2 class="titulo-seccion">
            COLECTIVO
            <span class="text-green">
              HOJA
            </span>
          </h2>

          <div class="linea-centro"></div>

        </div>

        <!-- CARDS -->
        <div class="row g-4">

          <!-- CARD -->
          <div class="col-md-6">

            <div class="card-custom h-100">

              <i class="bi bi-people icono"></i>

              <h4>
                ¿Qué es HOJA?
              </h4>

              <p>
                HOJA es un colectivo artístico enfocado
                en impulsar la creación y difusión
                del arte contemporáneo.
              </p>

            </div>

          </div>

          <!-- CARD -->
          <div class="col-md-6">

            <div class="card-custom h-100">

              <i class="bi bi-lightbulb icono"></i>

              <h4>
                Propósito
              </h4>

              <p>
                Apoyar el talento emergente y generar espacios
                para el desarrollo artístico multidisciplinario.
              </p>

            </div>

          </div>

          <!-- CARD -->
          <div class="col-md-6">

            <div class="card-custom h-100">

              <i class="bi bi-eye icono"></i>

              <h4>
                Visión
              </h4>

              <p>
                Ser un referente creativo que conecte
                arte, cultura y tecnología.
              </p>

            </div>

          </div>

          <!-- CARD -->
          <div class="col-md-6">

            <div class="card-custom h-100">

              <i class="bi bi-brush icono"></i>

              <h4>
                Enfoque
              </h4>

              <p>
                Integrar pintura, escultura, literatura
                y arte digital en una sola identidad artística.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  </div>

</template>

<style scoped>

/* HERO */
.hero {
  height: 60vh;

  position: relative;

  background:
    linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)),
    url('/obra1.jpeg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* OVERLAY */
.overlay {
  position: absolute;
  inset: 0;
}

/* TEXTOS */
.titulo {
  font-size: clamp(2.5rem, 8vw, 4rem);

  font-weight: 900;

  letter-spacing: 2px;
}

.subtitulo {
  opacity: 0.8;

  letter-spacing: 2px;
}

.text-green {
  color: #00ff88;
}

/* FOTO */
.foto-wrapper {
  border: 2px solid #00ff88;

  padding: 10px;

  border-radius: 20px;

  display: inline-block;

  box-shadow: 0 0 25px rgba(0,255,136,0.2);
}

.foto-artista {
  width: 100%;

  max-width: 350px;

  border-radius: 15px;

  object-fit: cover;
}

/* INFO */
.nombre {
  font-size: 2rem;

  font-weight: 800;
}

.rol {
  margin-bottom: 10px;
}

.linea-verde {
  width: 60px;

  height: 3px;

  background: #00ff88;

  margin: 15px 0;
}

.bio {
  opacity: 0.85;

  line-height: 1.7;
}

/* SECCIÓN HOJA */
.seccion-dark {
  background: rgba(0,0,0,0.6);

  backdrop-filter: blur(6px);
}

/* TÍTULO */
.titulo-seccion {
  text-align: center;

  font-weight: 800;

  letter-spacing: 2px;
}

.linea-centro {
  width: 80px;

  height: 3px;

  background: #00ff88;

  margin: 10px auto 30px;
}

/* CARDS */
.card-custom {
  background: rgba(255,255,255,0.03);

  border: 1px solid rgba(255,255,255,0.1);

  padding: 25px;

  border-radius: 15px;

  transition: 0.3s ease;

  backdrop-filter: blur(8px);
}

/* HOVER */
.card-custom:hover {
  transform: translateY(-8px);

  border-color: #00ff88;

  box-shadow: 0 0 20px rgba(0,255,136,0.2);
}

/* ICONOS */
.icono {
  font-size: 2rem;

  color: #00ff88;

  margin-bottom: 10px;
}

/* SCROLL ANIMATION */
.reveal {
  opacity: 0;

  transform: translateY(40px);

  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;

  transform: translateY(0);
}

/* RESPONSIVE */
@media (max-width: 768px) {

  .hero {
    height: 40vh;
  }

  .titulo {
    font-size: 2.3rem;
  }

  .subtitulo {
    font-size: 0.9rem;
  }

  .nombre {
    font-size: 1.7rem;
  }

  .card-custom {
    padding: 20px;
  }

}

</style>