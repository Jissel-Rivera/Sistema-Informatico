  <template>
    <div class="container">
		
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
						<h1>Gestion de reportes</h1>
						
						<!--inicio de accesos rapidos -->
						<v-breadcrumbs :items="items"></v-breadcrumbs>
						<!--fin de accesos rapidos -->
						<div class="row">
						  	<!-- ./col -->
						  	<div class="col-lg-3 col-6">
								<!-- small box -->
								<div class="small-box bg-blue">
							  		<div class="inner">
										<p>Inventario</p>
							  		</div>
							  	<div class="icon">
									<i class="ion ion-stats-bars"></i>
							  	</div>
							  	<a href="reportei" class="small-box-footer">Generar reporte<i class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						
						<div class="col-lg-3 col-6">
							<!-- small box -->
							<div class="small-box bg-gray">
							  	<div class="inner">
									<p>Ventas</p>
							  	</div>
							<div class="icon">
								<i class="ion ion-pie-graph"></i>
							</div>
								<a href="#" class="small-box-footer">Generar reporte<i class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						
						<div class="col-lg-3 col-6">
							<!-- small box -->
							<div class="small-box bg-info">
							  	<div class="inner">
									<p>Compras</p>
							  	</div>
							<div class="icon">
								<i class="ion ion-bag"></i>
							</div>
								<a href="compras" class="small-box-footer">Generar reporte<i class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						
						<div class="col-lg-3 col-6">
							<!-- small box -->
							<div class="small-box bg-info">
							  	<div class="inner">
									<p>Descargos</p>
							  	</div>
							<div class="icon">
								<i class="ion ion-bag"></i>
							</div>
								<a href="#" class="small-box-footer">Generar reporte<i class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						<!-- ./col -->

						<div class="col-lg-3 col-6">
							<!-- small box -->
							<div class="small-box bg-info">
							  	<div class="inner">
									<p>Productos</p>
							  	</div>
							<div class="icon">
								<i class="ion ion-bag"></i>
							</div>
								<a href="" class="small-box-footer">Generar reporte<i class="fas fa-arrow-circle-right"></i></a>
							</div>
						</div>
						</div>
						<!-- /.row -->
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
          disabled: true,
          href: 'reporv',
        },
      ],
    }),
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
