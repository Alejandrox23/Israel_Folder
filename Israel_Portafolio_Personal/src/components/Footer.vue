<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="custom-footer">
    <div class="container">
      <div class="footer-layout">
        
        <div class="footer-section logo-area d-none d-md-block">
          <router-link to="/">
            <img src="/logo.webp" alt="Logo" class="footer-logo">
          </router-link>
        </div>

        <div class="footer-section copyright-area text-center">
          <p class="mb-0">
            © {{ currentYear }} <span class="brand-name">Portafolio Personal israel Cambal</span>
            <span class="d-none d-sm-inline"> — Todos los derechos reservados</span>
          </p>
        </div>

        <div class="footer-section social-area">
          <div class="social-icons d-flex gap-3">
            <a href="https://www.tiktok.com/@israelcambal" target="_blank"><i class="bi bi-tiktok"></i></a>
            <a href="https://www.facebook.com/israel.cambal" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/israelcambal/" target="_blank"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  /* Fondo idéntico al Header */
  background: linear-gradient(135deg, #04171e, #203a43, #167299);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 1.2rem 0;
  width: 100%;
  
  /* Esto ayuda a que el footer se quede abajo si el padre es flex */
  margin-top: auto; 
}

.footer-layout {
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* 3 columnas iguales */
  align-items: center;
}

/* Logo con tu animación del Header */
.footer-logo {
  height: 35px;
  transition: transform 0.35s ease;
}
.footer-logo:hover {
  transform: scale(1.1) rotate(-2deg);
}

.brand-name {
  font-weight: 700;
  color: #fff;
}

.copyright-area {
  font-size: 0.85rem;
  color: #bbb;
}

.social-area {
  display: flex;
  justify-content: flex-end;
}

.social-icons a {
  color: #bbb;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  color: #fff;
  transform: translateY(-3px);
  filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));
}

/*  RESPONSIVO MÓVIL */
@media (max-width: 768px) {
  .footer-layout {
    grid-template-columns: 1fr; /* Una sola columna */
    gap: 1rem;
  }
  
  .social-area {
    justify-content: center; /* Centra iconos en móvil */
  }

  /* El logo se oculta por la clase d-none d-md-block de Bootstrap */
}
</style>