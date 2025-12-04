<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Main\LeadController;
use App\Http\Controllers\AuthController;


Route::group(['prefix' => 'main'], function() {
    Route::post('createlead', [LeadController::class, 'store']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware('auth:api')->group(function () {
    Route::get('user', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);

    // Protected routes here
    Route::get('/dashboard-data', function () {
        return ['message' => 'Welcome!'];
    });
});
