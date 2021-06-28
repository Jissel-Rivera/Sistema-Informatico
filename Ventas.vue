<template>
	
	<div class="card-body">
	<h1>Nueva venta</h1>
<v-breadcrumbs :items="items"></v-breadcrumbs>
	<!-- inicio form-row -->
		<div class="form-row">
			<!--tipo de factura -->
			<div class="col-md-3">
				<label for="sel1">Tipo: </label>
				<select class="form-control" id="sel1">
					<option>Consumidor final</option>
					<option>Credito fiscal</option>
				</select>
			</div>
			
			<div class="col-md-4">
				<label for="sel1">Fecha/Hora: </label>
				<input type="datetime-local">
			</div>
			
			<div class="col-md-2">
				<label for="sel1">Cantidad: </label>
				<br>
				<input type="number" id="tentacles" min="1" max="100">
			</div>
			<div class="col-md-3">
				<label for="sel1">Precio: </label>
				<br>
				<input type="text"  id="cliente" placeholder="0.00">
			</div>
		</div>
		<!-- fin form-row -->
		<div class="form-group">
			<label for="formGroupCliente">Cliente</label>
			<input type="text" class="form-control" id="formGroupCliente" placeholder="Nombre del clienbte..">
		</div>

		<div class="form-row">
			<div class="input-group rounded">
			  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
			  <span class="input-group-text border-0" id="search-addon">
				<i class="fas fa-search"></i>
			  </span>
			</div>
			
			<!-- Boton para agregar el producto a la tabla-->
			<v-btn
			class="ma-2"
			color="primary"
			dark
		  >
			Agregar producto al detalle
			<v-icon
			  dark
			  right
			>
			  mdi-checkbox-marked-circle
			</v-icon>
		  </v-btn>
		  <!-- Fin del boton-->
		</div>
		<br>
			
		<!-- Tabla donde se veran todos los productos que se vendan-->
		
		<!-- Fin de la tabla -->
		
		<!-- Inicio de botones-->
		<v-btn
        class="ma-2"
		color="red"
        dark
      >
        <v-icon
          dark
          left
        >
          mdi-minus-circle
        </v-icon>Cancelar
      </v-btn>
	  
		<v-btn
        class="ma-2"
        color="primary"
        dark
      >
        Realizar venta
        <v-icon
          dark
          right
        >
          mdi-checkbox-marked-circle
        </v-icon>
      </v-btn>
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
          text: 'Nueva venta',
          disabled: true,
          href: 'ventas',
        },
      ],
	  	
    }),
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
