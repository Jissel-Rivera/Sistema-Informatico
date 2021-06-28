  <template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
				<!-- Inicio de la lista ordenada-->
				<v-breadcrumbs :items="items"></v-breadcrumbs>
				<!--Fin de la lista ordenada-->
				
					<!--Inicio del formulario modal-->
					<v-row justify="center">
					<v-dialog
					  v-model="dialog"
					  persistent
					  max-width="600px"
					>
					  <template v-slot:activator="{ on, attrs }">
						<v-btn
						  color="primary"
						  dark
						  v-bind="attrs"
						  v-on="on"
						>
						  Agregar nuevo
						</v-btn>
					  </template>
					  <v-card>
						<v-card-title>
						  <span class="text-h5">Nuevo Producto</span>
						</v-card-title>
						<v-card-text>
						  <v-container>
							<v-row>
							  <v-col
								cols="12"
								sm="6"
							  >
								<v-text-field
								  label="Codigo*"
								  required
								></v-text-field>
							  </v-col>
							  <v-col
								cols="12"
								sm="6"
							  >
								<v-text-field
								  label="Nombre*"
								  required
								  hint="example of helper text only on focus"
								></v-text-field>
							  </v-col>
							  <v-col
								cols="12"
								sm="6"
							  >
								<v-autocomplete
								  :items=
								  "[
								  'Herbicida',
								  'Foliares',
								  'Fungicidas',
								  'Adherente',
								  'Insecticida',
								  'Tratadores de semilla',
								  'Concentrados para pollo',
								  'Concentrados de Borinos',
								  'Comida para perro',
								  'Comida para gato',
								  'Fertiizantes',
								  'Bomba de mochilla',
								  'Micelaneos',
								  'Semillas'
								  ]"
								  label="Categorias*"
								  required
								  multiple
								></v-autocomplete>
							  </v-col>
							</v-row>
						  </v-container>
						  <small>*Campo requerido obligatorio </small>
						</v-card-text>
						<v-card-actions>
						  <v-spacer></v-spacer>
						  <v-btn
							color="red darken-1"
							text
							@click="dialog = false"
						  >
							Cerrar
						  </v-btn>
						  <v-btn
							color="blue darken-1"
							text
							@click="dialog = true"
						  >
							Guardar
						  </v-btn>
						</v-card-actions>
					  </v-card>
					</v-dialog>
				  </v-row>
				  <!--Fin del formulario modal-->
				</div>

				<!--Inicio de card-body-->
				<div class="card-body">
					<!--Inicio de data-table -->
					<v-card>
					<v-card-title>
						  
						  <v-spacer></v-spacer>
						  <v-text-field
							v-model="search"
							append-icon="mdi-magnify"
							label="Buscar productos"
							single-line
							hide-details
						  ></v-text-field>
						</v-card-title>
					<v-data-table
						:headers="headers"
						:items="desserts"
						:search="search"
						:page.sync="page"
						:items-per-page="itemsPerPage"
						hide-default-footer
						class="elevation-1"
						@page-count="pageCount = $event"
					  >
						<template v-slot:item.stock="{ item }">
						  <v-chip
							:color="getColor(item.stock)"
							dark
						  >
							{{ item.stock }}
						  </v-chip>
						</template>
						
						<template v-slot:item.opciones="{ item }">
							<v-btn
							  class="ma-2"
							  outlined
							  fab
							  color="teal"
							>
							  <v-icon>fas fa-align-justify</v-icon>
							</v-btn>
						</template>
						
					  </v-data-table>
					  </v-card>
					  <!--Fin de data-table -->
					  <div class="text-center pt-2">
					  <v-pagination
						v-model="page"
						:length="pageCount"
					  ></v-pagination>
					  <v-text-field
						:value="itemsPerPage"
						label="Productos por pagina"
						type="number"
						min="-1"
						max="60"
						@input="itemsPerPage = parseInt($event, 15)"
					  ></v-text-field>
					</div>
                    </div>
					<!--Fin de card-body-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
	  dialog: false,
	  search: '',
	  page: 1,
      pageCount: 0,
      itemsPerPage: 15,
	  items: [
	  
        {
          text: 'Inicio',
          disabled: false,
          href: 'home',
        },
        {
          text: 'Productos',
          disabled: true,
          href: 'productos',
        },
      ],
        headers: [
		  {
            text: 'Codigo',
            align: 'start',
            sortable: false,
            value: 'codigo',
          },
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'nombre',
          },
          { text: 'Categoria', value: 'categoria' },
          { text: 'Stock', value: 'stock' },
		  { text: 'Opciones', value: 'opciones' },
        ],
        desserts: [
          {
            nombre: 'Paraquat',
            categoria: 'Herbicida',
            stock: '100',
          },
		  {
            nombre: 'Rafaga',
            categoria: 'Herbicida',
            stock: '500',
          },
		  {
            nombre: 'Elimina',
            categoria: 'Herbicida',
            stock: '59',
          },
		  {
            nombre: 'Glifosato',
            categoria: 'Herbicida',
            stock: '30',
          },
		  {
            nombre: 'Comander ',
            categoria: 'Herbicida',
            stock: '100',
          },
		  {
            nombre: 'Pante k',
            categoria: 'Herbicida',
            stock: '10',
          },
		  {
            nombre: 'Root Out',
            categoria: 'Herbicida',
            stock: '40',
          },
		  {
            nombre: 'Foliper',
            categoria: 'Foliares',
            stock: '70',
          },
		  {
            nombre: 'Foliper',
            categoria: 'Foliares',
            stock: '70',
          },
		  {
            nombre: 'Foliper',
            categoria: 'Foliares',
            stock: '70',
          },
		  {
            nombre: 'Foliper',
            categoria: 'Foliares',
            stock: '70',
          },
		  {
            nombre: 'Foliper',
            categoria: 'Foliares',
            stock: '70',
          },
		  {
            nombre: 'Foliper',
            categoria: 'Foliares',
            stock: '10',
          },
		  {
            nombre: 'Bicarben',
            categoria: 'Fungicida',
            stock: '140',
          },
		  {
            nombre: 'Bicarben',
            categoria: 'Fungicida',
            stock: '150',
          },
		  {
            nombre: 'Bicarben',
            categoria: 'Fungicida',
            stock: '11',
          },
		  {
            nombre: 'Bicarben',
            categoria: 'Fungicida',
            stock: '150',
          },
		  {
            nombre: 'Bicarben',
            categoria: 'Fungicida',
            stock: '150',
          },
		  {
            nombre: 'Dash',
            categoria: 'Adherente',
            stock: '200',
          },
		  {
            nombre: 'Dash',
            categoria: 'Adherente',
            stock: '300',
          },
		  {
            nombre: 'Dash',
            categoria: 'Adherente',
            stock: '2000',
          },
		  {
            nombre: 'Dash',
            categoria: 'Adherente',
            stock: '2000',
          },
		  {
            nombre: 'Dash',
            categoria: 'Adherente',
            stock: '2000',
          },
		  {
            nombre: 'Dash',
            categoria: 'Adherente',
            stock: '2000',
          },
        ],
      }
    },
    methods: {
      getColor (stock) {
        if (stock > 300) return 'green'
        else if (stock > 70) return 'orange'
        else return 'red'
      },
    },
  }
</script>
