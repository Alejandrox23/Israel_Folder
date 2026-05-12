//Importacion nativa de creación de proyectos
import { createApp } from 'vue'

//Importamos App.vue la hoja principal de renderizado
import App from './App.vue'
//importamos las rutas creadas en Router
import Router from './router'

//Importaciones de libreria de bootstrap y bootstrap icon
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
//Importamos la hoja de estilos general del proyecto
import './style.css'

createApp(App).use(Router).mount('#app')
