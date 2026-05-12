<script setup>
defineProps({
  image: String,
  title: String,
  category: String,
  authors: String,
  description: String,
  spanRows: Boolean,
  spanCols: Boolean
});
</script>

<template>
  <div class="exposicion-item">

    <div class="marco-obra">

      <!-- IMAGEN -->
      <div class="contenedor-img">
        <img :src="image" :alt="title" class="obra-img" />
        <div class="categoria-tag">{{ category }}</div>
      </div>

      <!-- INFO -->
      <div class="info-expandida">
        <h3>{{ title }}</h3>
        <p class="text-green">Por: {{ authors }}</p>
        <div class="linea-verde"></div>
        <p class="descripcion-texto">{{ description }}</p>
      </div>

    </div>

  </div>
</template>

<style scoped>

/* CARD BASE */
.exposicion-item {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
}

/* MARCO */
.marco-obra {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #000;
  border: 1px solid rgba(255,255,255,0.1);
  transition: 0.3s ease;
}

/* IMAGEN */
.contenedor-img {
  width: 100%;
  height: 100%;
}

.obra-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* TAG */
.categoria-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  color: #00ff88;
  padding: 4px 10px;
  font-size: 0.7rem;
}

/* INFO OCULTA */
.info-expandida {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);

  opacity: 0;
  transform: translateY(100%);
  transition: 0.3s ease;
}

/* LINEA */
.linea-verde {
  height: 2px;
  width: 50px;
  background: #00ff88;
  margin: 10px 0;
}

/* 🔥 HOVER SOLO EN DESKTOP REAL */
@media (hover: hover) and (pointer: fine) {
  .exposicion-item:hover .marco-obra {
    transform: scale(1.2);
    z-index: 10;
  }

  .exposicion-item:hover .info-expandida {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 📱 MÓVIL → SIN ZOOM + INFO VISIBLE + TAMAÑO MÁS CONTROLADO */
@media (max-width: 768px) {

  /* ❌ elimina cualquier scale */
  .exposicion-item:hover .marco-obra {
    transform: none !important;
  }

  /* ✅ info siempre visible */
  .info-expandida {
    opacity: 1;
    transform: translateY(0);
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  }

  /* ✅ reduce un poco el tamaño visual */
  .marco-obra {
    transform: scale(0.98);
  }

  /* opcional: texto más compacto */
  .info-expandida h3 {
    font-size: 0.9rem;
  }

  .descripcion-texto {
    font-size: 0.75rem;
  }
}

</style>