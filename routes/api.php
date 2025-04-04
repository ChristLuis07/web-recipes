<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\RecipeController;
use App\Http\Controllers\Api\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Search
Route::get('/recipes/search', [SearchController::class, 'index']);

// Category
Route::get('/category/{category:slug}', [CategoryController::class, 'show']);
Route::apiResource('/categories', CategoryController::class);

// Recipe
Route::get('/recipe/{recipe:slug}', [RecipeController::class, 'show']);
Route::apiResource('/recipes', RecipeController::class);


