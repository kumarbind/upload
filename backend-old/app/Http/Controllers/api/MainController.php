<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class MainController extends Controller
{
    public function home() {
        return response()->json(['message' => 'API Home Page']);
    }

    public function about() {
        return response()->json(['message' => 'About us content']);
    }

    public function contact() {
        return response()->json(['message' => 'Contact info']);
    }
}
