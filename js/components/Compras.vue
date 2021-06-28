<template>
	
	<div class="card-body">
	<h1>Nueva Compra</h1>

	<!-- inicio form-row -->
		<div class="form-row">
			
			<div class="col-md-6">
				<label for="sel1">Fecha/Hora: </label>
				<br>
				<input type="datetime-local">
			</div>
			
			<div class="col-md-6">
			<label for="formGroupCliente">Numero de factura</label>
			<input type="text" class="form-control" id="formGroupCliente" placeholder="000000">
		</div>
		</div>
		<!-- fin form-row -->
		<div class="form-row">
			<div>
				<label form="formGroupProveedor">Proveedor:</label>
				<select class="form-control" id="formGroupProveedor">
					<option>Consumidor final</option>
					<option>Credito fiscal</option>
				</select>
				<span class="input-group-text border-0" id="formGroupProveedor">
				<i class="fas fa-plus-circle"></i>
			  </span>
			</div>
			
		</div>
		<button type="submit" class="btn btn-primary">Agregar producto al detalle</button>
		<br><br>
			
			<!-- Tabla donde se veran todos los productos que se vendan-->
		<table border="1" class="col-md-12">
			<thead>
				<tr>
					<th scope="col" bgcolor="#5499C7">Producto</th>
					<th scope="col" bgcolor="#5499C7">precio</th>
					<th scope="col" bgcolor="#5499C7">Cantidad</th>
					<th scope="col" bgcolor="#5499C7">Subtotal</th>
					<th scope="col" bgcolor="#5499C7">Total</th>
					<th scope="col" bgcolor="#5499C7">Accion</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td></td>
				</tr>
				<tr>
					<th bgcolor="#5499C7"></th>
					<th bgcolor="#5499C7">0.00</th>
					<th bgcolor="#5499C7">00</th>
					<th bgcolor="#5499C7">0.00</th>
					<th bgcolor="#5499C7">0.00</th>
					<th bgcolor="#5499C7"></th>
				</tr>
			</tbody>
		</table>
		<button type="button" class="btn btn-danger btn-sm">Cancelar</button>
		<button type="button" class="btn btn-primary btn-sm">Realizar venta</button>
	</div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
