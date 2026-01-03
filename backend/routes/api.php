<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Main\LeadController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\Admin\CampaignController;

Route::prefix('main')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('createlead', [LeadController::class, 'store']);

    Route::middleware('auth:api')->group(function () {
        Route::get('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);
        Route::post('refresh', [AuthController::class, 'refresh']);

        Route::prefix('admin')->group(function () {
            Route::get('dashboard', function () {
                return response()->json([
                    'message' => 'Welcome to Admin Dashboard'
                ]);
            });

            Route::get('users', [UserController::class, 'index']);
            //--- Campaign routes
            Route::get('/campaigns', [CampaignController::class, 'index']);
            Route::get('/campaigns/{campaign}', [CampaignController::class, 'show']);
            Route::post('/campaigns', [CampaignController::class, 'store']);

            //Leads
            Route::get('/leads', [LeadController::class, 'index']);
        });
    });
});
