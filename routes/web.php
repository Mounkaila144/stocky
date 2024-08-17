<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\BaseController;
use Modules\Store\Http\Controllers\StoreController;
use Laravel\passport\Passport;

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

//------------------------------------------------------------------\\
// Passport::routes();
Route::get('etiquettes', "EtiquettesController@generatePDF");
Route::get('etiquettes/print/{ids}', "EtiquettesController@printSelected");
Route::get('etiquettes/copy_all_codes', "EtiquettesController@copyAllCodes");

