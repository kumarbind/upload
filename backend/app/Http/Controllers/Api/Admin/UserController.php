<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $query = User::query();

        // Search
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', "%{$request->search}%")
                  ->orWhere('email', 'LIKE', "%{$request->search}%");
            });
        }

        // Sorting
        $sortField = $request->sort_field ?? 'id';
        $sortOrder = $request->sort_order ?? 'asc';

        $query->orderBy($sortField, $sortOrder);

        // Pagination
        $perPage = $request->per_page ?? 10;
        $users = $query->paginate($perPage);

        return response()->json([
            "success" => true,
            "data" => $users->items(),
            "total" => $users->total(),
            "page" => $users->currentPage(),
            "per_page" => $users->perPage()
        ]);
    }
}
