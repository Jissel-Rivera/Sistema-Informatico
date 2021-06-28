  <template>
	<!-- Inicio de container-->
    <div class="container">
		<!-- Inicio de row justify-content-center-->
        <div class="row justify-content-center">
			<!-- Inicio de col-md-12 -->
            <div class="col-md-12">
				<!--Inicio de card-->
				<div class="card">
					<!--Inicio de card-body-->
					<div class="card-body">
						<!-- Inicio de la lista ordenada-->
						<v-breadcrumbs :items="items"></v-breadcrumbs>
						<!--Fin de la lista ordenada-->
						<h3>Descargos</h3>
						<!-- Iniciode row-->
						<div class="row">
							<!-- Inicio de col-8-->
							<div class="col-8">
								<v-spacer></v-spacer>
								 <v-text-field
									v-model="search"
									append-icon="mdi-magnify"
									label="Buscar descargos"
									single-line
									hide-details
								></v-text-field>
							</div>
							
							<div class="col-4">
								<br>
								<!--Inicio del formulario modal-->
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
									  Nuevo descargo
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
											  label="Nombre"
											  required
											></v-text-field>
										  </v-col>
										  <v-col
											cols="12"
											sm="6"
										  >
											<v-text-field
											  label="Motivo"
											  required
											  hint="example of helper text only on focus"
											></v-text-field>
										  </v-col>
										  <v-col
											cols="12"
											sm="6"
										  >
											<v-text-field
											  label="Descripcion"
											  required
											></v-text-field>
										  </v-col>
										  <v-col
											cols="12"
											sm="6"
										  >
											<v-text-field
											  label="Fecha"
											  required
											></v-text-field>
										  </v-col>
										  <v-col
											cols="12"
											sm="6"
										  >
											<v-text-field
											  label="Cantidad"
											  required
											></v-text-field>
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
										@click="dialog = false"
									  >
										Guardar
									  </v-btn>
									</v-card-actions>
								  </v-card>
								</v-dialog>
								<!--Fin del formulario modal-->
							</div>
							<!-- Fin de col-4 -->
						</div>
						<!-- Fin de row-->
						<!--Inicio de data-table -->
						<v-card>
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
				<!--Fin de card-->
			</div>
			<!-- Fin de col-md-12-->
		</div>
		<!-- Fin de row justify-content-center-->
    </div>
	<!-- Fin de container-->
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
				  text: 'Descargos',
				  disabled: true,
				  href: 'descargos',
				},
			],
			headers: [
				{
				  text: 'Nombre',
				  align: 'start',
				  sortable: false,
				  value: 'nombre',
				},
				{ text: 'Motivo', value: 'motivo' },
				{ text: 'Descripcion', value: 'descripcion' },
				{ text: 'Fecha', value: 'fecha' },
				{ text: 'Cantidad', value: 'cantidad' },
			],
			desserts: [
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '',
				cantidad: '',
			  },
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '',
				cantidad: '4',
			  },
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '',
				cantidad: '1',
			  },
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '',
				cantidad: '2',
			  },
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '',
				cantidad: '1',
			  },
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '',
				cantidad: '4',
			  },
			  {
				nombre: 'Paraquat',
				motivo: 'Herbicida',
				descripcion: '',
				fecha: '10-03-2021',
				cantidad: '2',
			  },
			],
			}
		},
	}
</script>
