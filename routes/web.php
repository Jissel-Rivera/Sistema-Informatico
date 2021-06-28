<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\VentaController;
use App\Http\Controllers\ReporvController;
use App\Http\Controllers\ReporteiController;
use App\Http\Controllers\FabricanteController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InventarioController;
use App\Http\Controllers\DescargoController;
use App\Http\Controllers\CompraController;
use App\Http\Controllers\ProductoController;


use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',HomeController::class);

Auth::routes();

//Ruta para home
Route::get('/home', [HomeController::class, 'index'])->name('home');

//Ruta para Categorias
Route::get('/categorias',[CategoriaController::class,'index'])->name("categorias");

//Ruta para Compras
Route::get('/compras',[CompraController::class,'index'])->name("compras");

//Ruta para Fabricantes
Route::get('/fabricantes',[FabricanteController::class,'index'])->name("fabricantes");

//Ruta para Productos
Route::get('/productos',[ProductoController::class,'index'])->name("productos");

//Ruta para Ventas
Route::get('/ventas',[VentaController::class,'index'])->name("ventas");

//Ruta para Gestion de reportes
Route::get('/reporv',[ReporvController::class,'index'])->name("reporv");
//Ruta para Reporte de Inventario
Route::get('/reportei',[reporteiController::class,'index'])->name("reportei");

//Ruta para Inventario
Route::get('/inventario',[InventarioController::class,'index'])->name("inventario");

//Ruta para Descargos
Route::get('/descargos',[DescargoController::class,'index'])->name("descargos");

