<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Jobs\PostCampaignJob;


class CampaignController extends Controller
{
    public function index(Request $request){
        $query = Campaign::query();

        if ($request->search) {
            $query->where('name', 'like', "%{$request->search}%");
        }

        $data = $query
            ->orderBy('id', 'desc')
            ->paginate($request->per_page ?? 10);

        return response()->json([
            'data' => $data->items(),
            'total' => $data->total()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'type' => 'required|in:app,website',
        ]);

        $campaign = Campaign::create($request->all());
        PostCampaignJob::dispatch($campaign);
        return response()->json(['message' => 'Campaign created']);
    }

    public function show($id)
    {
        return Campaign::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $campaign = Campaign::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'type' => 'required|in:app,website',
        ]);

        $campaign->update($request->all());

        return response()->json(['message' => 'Campaign updated']);
    }
    public function destroy($id)
    {
        $campaign = Campaign::findOrFail($id);
        $campaign->delete();

        return response()->json(['message' => 'Campaign deleted']);
    }
}
