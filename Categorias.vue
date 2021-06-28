	<template>
	
	<div class="card-body">
		<v-card>
		<v-card-title>
		  Detalle del inventario
		  <v-spacer></v-spacer>
		  
		  <v-text-field
			v-model="search"
			append-icon="mdi-magnify"
			label="Search"
			single-line
			hide-details
		  ></v-text-field>
		</v-card-title>
		<v-data-table
			:headers="headers"
			:items="desserts"
			:search="search"
			sort-by="calories"
			class="elevation-1"
		  >
			<template v-slot:top>
			  <v-toolbar
				flat
			  >
				<v-toolbar-title></v-toolbar-title>
				<v-divider
				  class="mx-4"
				  inset
				  vertical
				></v-divider>
				<v-spacer></v-spacer>
				<v-dialog
				  v-model="dialog"
				  max-width="500px"
				>
				  <template v-slot:activator="{ on, attrs }">
					<v-btn
					  color="primary"
					  dark
					  class="mb-2"
					  v-bind="attrs"
					  v-on="on"
					>
					  Agregar
					</v-btn>
				  </template>
				  <v-card>
					<v-card-title>
					  <span class="text-h5">{{ formTitle }}</span>
					</v-card-title>

					<v-card-text>
					  <v-container>
						<v-row>
						  <v-col
							cols="12"
							sm="6"
							md="4"
						  >
							<v-text-field
							  v-model="editedItem.descripcion"
							  label="Descripcion"
							></v-text-field>
						  </v-col>
						  <v-col
							cols="12"
							sm="6"
							md="4"
						  >
							<v-text-field
							  v-model="editedItem.precio"
							  label="Precio"
							></v-text-field>
						  </v-col>
						  <v-col
							cols="12"
							sm="6"
							md="4"
						  >
							<v-text-field
							  v-model="editedItem.stock"
							  label="Stock"
							></v-text-field>
						  </v-col>
						  <v-col
							cols="12"
							sm="6"
							md="4"
						  >
							<v-text-field
							  v-model="editedItem.medida"
							  label="Medida"
							></v-text-field>
						  </v-col>
						  <v-col
							cols="12"
							sm="6"
							md="4"
						  >
							<v-text-field
							  v-model="editedItem.presentacion"
							  label="Presentacion"
							></v-text-field>
						  </v-col>
						  <v-col
							cols="12"
							sm="6"
							md="4"
						  >
							<v-text-field
							  v-model="editedItem.fabricante"
							  label="Fabricante"
							></v-text-field>
						  </v-col>
						</v-row>
					  </v-container>
					</v-card-text>

					<v-card-actions>
					  <v-spacer></v-spacer>
					  <v-btn
						color="blue darken-1"
						text
						@click="close"
					  >
						Cancel
					  </v-btn>
					  <v-btn
						color="blue darken-1"
						text
						@click="save"
					  >
						Save
					  </v-btn>
					</v-card-actions>
				  </v-card>
				</v-dialog>
				<v-dialog v-model="dialogDelete" max-width="500px">
				  <v-card>
					<v-card-title class="text-h5">Quieres eliminar este producto?</v-card-title>
					<v-card-actions>
					  <v-spacer></v-spacer>
					  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
					  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
					  <v-spacer></v-spacer>
					</v-card-actions>
				  </v-card>
				</v-dialog>
			  </v-toolbar>
			</template>
			<template v-slot:item.actions="{ item }">
			  <v-icon
				small
				class="mr-2"
				@click="editItem(item)"
			  >
				mdi-pencil
			  </v-icon>
			  <v-icon
				small
				@click="deleteItem(item)"
			  >
				mdi-delete
			  </v-icon>
			</template>
			<template v-slot:no-data>
			  <v-btn
				color="primary"
				@click="initialize"
			  >
				Reset
			  </v-btn>
			</template>
		  </v-data-table>
		  </v-card>
		<!-- Fin de la tabla -->
	</div>
</template>

<script>
     export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
	  search: '',
      headers: [
        {
          text: 'Descripcion',
          align: 'start',
          sortable: false,
          value: 'descripcion',
        },
        { text: 'Precio', value: 'precio' },
        { text: 'Stock', value: 'stock' },
        { text: 'Medida', value: 'medida' },
        { text: 'Presentacion', value: 'presentacion' },
		{ text: 'Fabricante', value: 'fabricante' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        descripcion: '',
        precio: 0,
        stock: 0,
        medida: 0,
        presentacion: '',
		fabricante: '',
      },
      defaultItem: {
        descripcion: '',
        precio: 0,
        stock: 0,
        medida: 0,
        presentacion: '',
		fabricante: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Agregar al inventario' : 'Editar producto'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            descripcion: 'Bicarben',
			precio: '$1.50',
			stock: '40',
			medida: '1 Litro',
			presentacion: 'Botella',
			fabricante: 'fungi',
          },
          {
            descripcion: 'Marcial',
			precio: '$1.20',
			stock: '45',
			medida: '1 Litro',
			presentacion: 'Botella',
			fabricante: 'fungic',
          },
          {
            descripcion: 'Pascura',
			precio: '$5.00',
			stock: '30',
			medida: '1.5 Litro',
			presentacion: 'Botella',
			fabricante: 'fungi',
          },
          {
            descripcion: 'Comander',
			precio: '$4.50',
			stock: '40',
			medida: '1 Litro',
			presentacion: 'Botella',
			fabricante: 'fungi',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = false
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = false
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>