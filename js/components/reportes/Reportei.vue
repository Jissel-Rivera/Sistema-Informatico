<template>
	
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
					<v-breadcrumbs :items="items"></v-breadcrumbs>
                    <div class="card-body">
                        
							<p>Tipo de reporte:    </p>
							<div>
							  <input type="radio" id="general" name="drone" value="general" checked>
							  <label for="general">Reporte general</label>
							</div>

							<div>
							  <input type="radio" id="detalle" name="drone" value="detallado">
							  <label for="detallado">Reporte detallado</label>
							</div>
						<!-- inicio form-row -->
						<div class="form-row">
							<div class="col-md-6">
								<label for="sel1">Desde:</label>
								<input type="date">
							</div>
							
							<div class="col-md-6">
								<label for="sel1">Hasta:</label>
								<input type="date">
							</div>
						</div>
						<v-row
						align="center"
						justify="space-around"
					  >
						<v-btn
						class="ma-2"
						color="red"
						dark
						
					  >
						Generar reporte
						<v-icon
						  dark
						  right
						>
						  mdi-checkbox-marked-circle
						</v-icon>
					  </v-btn>
					  </v-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
	data: () => ({

      items: [
	  
        {
          text: 'Inicio',
          disabled: false,
          href: 'home',
        },
        {
          text: 'Gestion de reportes',
          disabled: false,
          href: 'reporv',
        },
        {
          text: 'Reportes de inventario',
          disabled: true,
          href: 'portei',
        },
      ],
	  	
    }),
	
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
