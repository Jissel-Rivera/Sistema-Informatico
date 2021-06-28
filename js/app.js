/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue').default;
 
 import Vue from 'vue';
 import Vuetify from 'vuetify';
 
 
 import VueNumberInput from '@chenfengyuan/vue-number-input';
 import VueSweetalert2 from 'vue-sweetalert2';
 
 Vue.use(Vuetify);
 Vue.use(VueSweetalert2);
 Vue.use(VueNumberInput);
 /**
  * The following block of code may be used to automatically register your
  * Vue components. It will recursively scan this directory for the Vue
  * components and automatically register them with their "basename".
  *
  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
  */
 
 // const files = require.context('./', true, /\.vue$/i)
 // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
 
 //Vue.component('example-component', require('./components/ExampleComponent.vue').default);
 import 'sweetalert2/dist/sweetalert2.min.css';
 
 
 Vue.component('fabricantes', require('./components/Fabricantes.vue').default);
 Vue.component('categorias', require('./components/Categorias.vue').default);
 Vue.component('productos', require('./components/Productos.vue').default);
 Vue.component('compras', require('./components/Compras.vue').default);
 Vue.component('ventas', require('./components/Ventas.vue').default);
 Vue.component('descargos', require('./components/Descargos.vue').default);
 Vue.component('reporv', require('./components/Reporv.vue').default);
 Vue.component('reportei', require('./components/reportes/Reportei.vue').default);
 Vue.component('inicio', require('./components/Inicio.vue').default);
 Vue.component('inventario', require('./components/Inventario.vue').default);
 
 Vue.component(VueNumberInput.name, VueNumberInput);
 
 
 /**
  * Next, we will create a fresh Vue application instance and attach it to
  * the page. Then, you may begin adding components to this application
  * or customize the JavaScript scaffolding to fit your unique needs.
  */
 
 const app = new Vue({
     el: '#app',
     vuetify: new Vuetify(),
     data:{
         option : 0,
         notifications: []
     },
 });
 