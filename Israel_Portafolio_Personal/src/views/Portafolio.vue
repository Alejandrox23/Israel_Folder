<script setup>
import { ref, computed } from 'vue';


import PortafolioCard from '../components/PortafolioCard.vue';
import PortafolioNav from '../components/PortafolioNav.vue';

/* 🔥 GALERÍAS */
const galerias = {

  esculturas: [
    {
      title: "Forma Abstracta",
      category: "Escultura",
      authors: "Alejox",
      description: "Volumen artístico.",
      image: "obra1.jpeg"
    },

    {
      title: "Metal Vivo",
      category: "Escultura",
      authors: "Alejox",
      description: "Estilo industrial.",
      image: "obra1.jpeg"
    },

    {
      title: "Movimiento",
      category: "Escultura",
      authors: "Alejox",
      description: "Dinámica visual.",
      image: "obra1.jpeg"
    }
  ],

  murales: [
    {
      title: "Mural Urbano",
      category: "Mural",
      authors: "Alejox",
      description: "Arte público contemporáneo.",
      image: "obra1.jpeg"
    },

    {
      title: "Historia Visual",
      category: "Mural",
      authors: "Alejox",
      description: "Narrativa gráfica colectiva.",
      image: "obra1.jpeg"
    }
  ],

  pinturas: [
    {
      title: "Horizonte Óleo",
      category: "Pintura",
      authors: "Alejox",
      description: "Paisaje inspirado en Loja.",
      image: "obra1.jpeg"
    },

    {
      title: "Rojo Intenso",
      category: "Pintura",
      authors: "Alejox",
      description: "Expresión cromática moderna.",
      image: "obra1.jpeg"
    },

    {
      title: "Azul Profundo",
      category: "Pintura",
      authors: "Alejox",
      description: "Composición fría minimalista.",
      image: "obra1.jpeg"
    }
  ],

  ilustraciones: [
    {
      title: "Concept Art",
      category: "Ilustración",
      authors: "Alejox",
      description: "Diseño conceptual digital.",
      image: "obra1.jpeg"
    },

    {
      title: "Sketch Urbano",
      category: "Ilustración",
      authors: "Alejox",
      description: "Boceto artístico contemporáneo.",
      image: "obra1.jpeg"
    }
  ],

  comics: [
    {
      title: "Ciudad Oscura",
      category: "Comic",
      authors: "Alejox",
      description: "Narrativa gráfica futurista.",
      image: "obra1.jpeg"
    },

    {
      title: "Héroe Nocturno",
      category: "Comic",
      authors: "Alejox",
      description: "Historia ilustrada de acción.",
      image: "obra1.jpeg"
    }
  ]

};

/* 🔥 ESTADO */
const categoriaActiva = ref('esculturas');

/* 🔥 LISTA GENERAL */
const todasLasObras = Object.entries(galerias).flatMap(
  ([categoria, items]) =>

    items.map(item => ({
      ...item,
      tipo: categoria.toLowerCase()
    }))
);

/* 🔥 FILTRO */
const obrasFiltradas = computed(() => {

  return todasLasObras.filter(

    obra =>
      obra.tipo === categoriaActiva.value.toLowerCase()

  );

});
</script>
<template>

  <div class="portafolio-page text-white">

    <!-- HERO -->
    <header
      class="hero-wrap d-flex align-items-center justify-content-center text-center"
    >

      <div class="hero-overlay"></div>

      <div class="container position-relative z-3 animate-fade-in">

        <h1 class="hero-title">
          PORTAFOLIO
          <span class="text-green">
            DIGITAL
          </span>
        </h1>

        <p class="hero-subtitle text-uppercase letter-spacing-5">
          Creatividad • Arte • Innovación
        </p>

      </div>

    </header>

    <!-- NAV -->
    <div class="filtro-galeria container position-relative">

      <PortafolioNav
        @cambiar="categoriaActiva = $event"
      />

    </div>

    <!-- GALERÍA -->
    <main
      class="container-fluid py-5 px-lg-5 position-relative"
    >

      <!-- HEADER CATEGORÍA -->
      <div class="categoria-header mb-5">

        <h2 class="categoria-title">
          {{ categoriaActiva }}
        </h2>

        <div class="categoria-divider"></div>

      </div>

      <!-- MOSAICO -->
      <div class="mosaico-dinamico">

        <!-- OBRAS -->
        <template v-if="obrasFiltradas.length > 0">

          <PortafolioCard
            v-for="(obra, i) in obrasFiltradas"
            :key="i"

            :title="obra.title"
            :category="obra.category"
            :authors="obra.authors"
            :description="obra.description"
            :image="obra.image"
          />

        </template>

        <!-- VACÍO -->
        <div
          v-else
          class="w-100 text-center py-5"
        >

          <p>
            No hay obras en esta categoría
          </p>

        </div>

      </div>

    </main>

  </div>

</template>
<style scoped>

/* COLOR */
.text-green {
  color: #00ff88;
}

/* LETTER SPACING */
.letter-spacing-5 {
  letter-spacing: 5px;
}

/* PÁGINA */
.portafolio-page {
  background: #0f2027;
  min-height: 100vh;
}

/* HERO */
.hero-wrap {
  height: 75vh;

  position: relative;

  background:
    linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)),
    url('obra1.jpeg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* OVERLAY */
.hero-overlay {
  position: absolute;
  inset: 0;
}

/* HERO TEXTOS */
.hero-title {
  font-size: clamp(2.8rem, 8vw, 5rem);

  font-weight: 900;

  letter-spacing: 3px;

  margin-bottom: 15px;
}

.hero-subtitle {
  opacity: 0.8;

  font-size: 0.9rem;
}

/* ANIMACIÓN */
.animate-fade-in {
  animation: fadeInUp 1.2s ease-out;
}

@keyframes fadeInUp {

  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

}

/* FILTRO */
.filtro-galeria {
  position: relative;

  z-index: 5;

  margin-top: 30px;

  margin-bottom: 40px;

  display: flex;
  justify-content: center;
}

/* HEADER CATEGORÍA */
.categoria-header {
  display: flex;

  align-items: center;

  gap: 20px;
}

/* TÍTULO */
.categoria-title {
  margin: 0;

  text-transform: uppercase;

  font-weight: 800;

  letter-spacing: 4px;

  white-space: nowrap;
}

/* LÍNEA */
.categoria-divider {
  width: 100%;

  height: 1px;

  background: rgba(255,255,255,0.2);
}

/* MOSAICO */
.mosaico-dinamico {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 18px;
}

/* ASEGURA ALTURA */
.mosaico-dinamico > * {
  min-height: 220px;
}

/* TABLET */
@media (max-width: 992px) {

  .mosaico-dinamico {
    grid-template-columns: repeat(3, 1fr);
  }

}

/* MOBILE */
@media (max-width: 768px) {

  .hero-wrap {
    height: 60vh;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
  }

  .filtro-galeria {
    margin-top: 20px;
  }

  .categoria-header {
    gap: 10px;
  }

  .categoria-title {
    font-size: 1.2rem;

    letter-spacing: 2px;
  }

  .mosaico-dinamico {
    grid-template-columns: repeat(2, 1fr);

    gap: 12px;
  }

  .mosaico-dinamico > * {
    min-height: 180px;
  }

}

/* MOBILE PEQUEÑO */
@media (max-width: 576px) {

  .hero-wrap {
    height: 50vh;
  }

  .mosaico-dinamico {
    grid-template-columns: 1fr;
  }

  .mosaico-dinamico > * {
    min-height: 180px;
  }

}

</style>