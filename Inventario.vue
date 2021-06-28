<template>
	<div>
  <v-data-table
    :headers="headers"
    :items="desserts"
	:page.sync="page"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
    @page-count="pageCount = $event"
    
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title></v-toolbar-title>

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
              Nuevo producto
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
                      v-model="editedItem.name"
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
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
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
    <template v-slot:activator="{ on }">
      <v-icon
        small
        class="mr-2"
		v-on="on"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
		v-on="on"
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
  <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
      <v-text-field
        :value="itemsPerPage"
        label="Items per page"
        type="number"
        min="-1"
        max="15"
        @input="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
	  page: 1,
	  pageCount: 0,
	  itemsPerPage: 10,
      headers: [
        {
          text: 'Descripcion',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Precio', value: 'precio' },
        { text: 'Stock', value: 'stock' },
        { text: 'Medida', value: 'medida' },
        { text: 'Presentacion', value: 'presentacion' },
		{ text: 'Fabricante', value: 'fabricante' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        precio: 0,
        stock: 0,
        medida: 0,
        presentacion: 0,
		fabricante: 0,
      },
      defaultItem: {
        name: '',
        precio: 0,
        stock: 0,
        medida: 0,
        presentacion: 0,
		fabricante: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nuevo producto' : 'Editar producto'
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
            name: '',
			precio: 0,
			stock: 0,
			medida: 0,
			presentacion: 0,
			fabricante: 0,
          },
          {
            name: '',
			precio: 0,
			stock: 0,
			medida: 0,
			presentacion: 0,
			fabricante: 0,
          },
          {
            name: '',
			precio: 0,
			stock: 0,
			medida: 0,
			presentacion: 0,
			fabricante: 0,
          },
          {
            name: '',
			precio: 0,
			stock: 0,
			medida: 0,
			presentacion: 0,
			fabricante: 0,
          },
          {
            name: '',
			precio: 0,
			stock: 0,
			medida: 0,
			presentacion: 0,
			fabricante: 0,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
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