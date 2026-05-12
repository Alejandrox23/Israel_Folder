<script setup>
import { ref } from 'vue';

const emit = defineEmits(['cambiar']);

/* ITEMS */
const items = [
  { id: 'esculturas', label: 'Esculturas', icon: 'bi-box' },
  { id: 'murales', label: 'Murales', icon: 'bi-brush' },
  { id: 'pinturas', label: 'Pinturas', icon: 'bi-palette' },
  { id: 'ilustraciones', label: 'Ilustraciones', icon: 'bi-pencil' },
  { id: 'comics', label: 'Comics', icon: 'bi-book' }
];

/* ACTIVO */
const activeSection = ref('esculturas');

/* CAMBIAR */
const select = (id) => {

  activeSection.value = id;

  emit('cambiar', id);

};
</script>

<template>

  <nav class="subnav">

    <div class="subnav-container">

      <button
        v-for="item in items"
        :key="item.id"
        class="subnav-chip d-flex align-items-center gap-2"
        :class="{ active: activeSection === item.id }"
        @click="select(item.id)"
      >

        <!-- ICONO -->
        <i :class="['bi', item.icon]"></i>

        <!-- TEXTO -->
        <span>
          {{ item.label }}
        </span>

      </button>

    </div>

  </nav>

</template>

<style scoped>

/* CONTENEDOR */
.subnav {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

/* WRAPPER */
.subnav-container {
  display: flex;
  gap: 8px;

  border-bottom: 2px solid rgba(255,255,255,0.1);
}

/* BOTÓN */
.subnav-chip {
  position: relative;

  background: rgba(255,255,255,0.05);

  color: rgba(255,255,255,0.7);

  border: 1px solid rgba(255,255,255,0.1);

  border-bottom: none;

  padding: 10px 18px;

  border-radius: 12px 12px 0 0;

  font-size: 0.75rem;

  letter-spacing: 1px;

  cursor: pointer;

  transition: all 0.25s ease;
}

/* ICONO */
.subnav-chip i {
  font-size: 0.9rem;
}

/* HOVER */
.subnav-chip:hover {
  color: #00ff88;

  border-color: #00ff88;

  background: rgba(0,255,136,0.1);
}

/* ACTIVO */
.subnav-chip.active {
  background: #0f2027;

  color: #00ff88;

  border-color: #00ff88;

  transform: translateY(3px);

  z-index: 2;

  box-shadow: 0 0 10px rgba(0,255,136,0.2);
}

/* UNIÓN VISUAL */
.subnav-chip.active::after {
  content: "";

  position: absolute;

  bottom: -2px;
  left: 0;

  width: 100%;
  height: 2px;

  background: #0f2027;
}

/* RESPONSIVE */
@media (max-width: 768px) {

  .subnav-container {
    flex-wrap: wrap;
    justify-content: center;
  }

  .subnav-chip {
    font-size: 0.7rem;

    padding: 8px 14px;
  }

}

</style>