//Creamos el sistema de rutas con createRouter 
//Creamos tambien el historial de rutas con CreateWebHistory sin usar el # en la url
import { createRouter, createWebHistory } from "vue-router";
//La linea 3 nos permite crear las rutas

// Importaciones de las vistas o view para las definiciones de las rutas
// el Inicio es el nombre que contendra dentro del array
import Inicio from "../views/Inicio.vue";
import Portafolio from "../views/Portafolio.vue";
import SobreNosotros from "../views/SobreNosotros.vue";
import Contactanos from "../views/Contactanos.vue";


//Declaramos la constante del sistemas de rutas
//Mediante un array o arreglo
const router = createRouter({
    //Creamos el historial de rutas configurando la navegacion
    history: createWebHistory(),
    //Aperturamos el arreglo
    routes:[
        //Cada { } se considera como una navegación
        {
            //Ruta
            path: '/',
            //Nombre que contendra la ruta
            name: "Inicio",
            //Que presentara esa ruta
            component: Inicio
        },
        {
            path: '/portafolio',
            name: "Portafolio",
            component: Portafolio
        },
        {
            path:'/sobre-nosotros',
            name: "Sobre Nosotros",
            component: SobreNosotros
        },
        {
            path: '/contactanos',
            name:"Contactanos",
            component:Contactanos
        },
    ]
})
//Esportamos el router o arreglo para poder usarlo en el main.js
export default router