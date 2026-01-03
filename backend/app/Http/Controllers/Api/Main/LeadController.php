<?php

namespace App\Http\Controllers\Api\Main;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LeadController extends Controller
{
    public function index(Request $request){
        $query = Lead::query();
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('name', 'LIKE', "%{$request->search}%")
                  ->orWhere('email', 'LIKE', "%{$request->search}%");
            });
        }
        $sortField = $request->sort_field ?? 'id';
        $sortOrder = $request->sort_order ?? 'asc';
        $query->orderBy($sortField, $sortOrder);
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

    public function store(Request $request){
        try {
            $validatedData = $request->validate([
                'name'    => 'required|string|max:255',
                'email'   => 'required|email|unique:leads,email',
                'phone'   => 'required|string|max:20',
                'message' => 'required|string',
            ]);

            $lead = Lead::create($validatedData);

            return response()->json([
                'success' => true,
                'message' => 'Lead created successfully.',
                'data'    => $lead
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors'  => $e->errors()
            ], 422);
        }
    }


    public function show(Lead $Lead)
    {
        return $Lead;
    }

    public function update(Request $request, Lead $Lead)
    {
        $Lead->update($request->all());
        return $Lead;
    }

    public function destroy(Lead $Lead)
    {
        $Lead->delete();
        return response()->noContent();
    }
}
