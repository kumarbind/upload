<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MainController;
use App\Http\Controllers\Api\PortfolioController;
use App\Http\Controllers\Api\BlogController;

// ✅ MAIN group
Route::prefix('main')->group(function () {
    Route::get('/home', [MainController::class, 'home']);
    Route::get('/about', [MainController::class, 'about']);
    Route::get('/contact', [MainController::class, 'contact']);
    Route::get('/createlead', [MainController::class, 'createlead']);
});

// 🎨 PORTFOLIO group
Route::prefix('portfolio')->group(function () {
    Route::get('/', [PortfolioController::class, 'index']);       // list portfolios
    Route::get('/{id}', [PortfolioController::class, 'show']);    // single portfolio
});

// 📝 BLOGS group
Route::prefix('blogs')->group(function () {
    Route::get('/', [BlogController::class, 'index']);            // list blogs
    Route::get('/{id}', [BlogController::class, 'show']);         // single blog
});
