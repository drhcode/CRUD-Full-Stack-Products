<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;



// Route::get('/products', [ProductsController::class, 'index']);
// Route::get('/products/{id}', [ProductsController::class, 'show']);
// Route::post('/products/store', [ProductsController::class, 'store']);
// Route::put('/products/update/{id}', [ProductsController::class, 'update']);
// Route::delete('/products/{id}', [ProductsController::class, 'destroy']);

Route::group([''], function () {
  Route::apiResource('products', ProductsController::class);
});