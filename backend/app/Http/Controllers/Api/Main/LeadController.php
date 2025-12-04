<?php

namespace App\Http\Controllers\Api\Main;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class LeadController extends Controller
{
    public function index()
    {
        return Lead::all();
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
