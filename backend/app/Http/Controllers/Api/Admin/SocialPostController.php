<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Campaign;
use Illuminate\Http\Request;
use App\Services\FacebookService;
use App\Services\InstagramService;

class SocialPostController extends Controller
{
    public function post(Campaign $campaign)
    {
        $url = config('app.url') . '/campaign/' . $campaign->id;
        $image = asset('storage/' . $campaign->image);


        app(FacebookService::class)->post(
            'New Campaign: ' . $campaign->title,
            $url
        );

        if ($campaign->image) {
            app(InstagramService::class)->post(
                $image,
                $campaign->title . "\n" . $campaign->description
            );
        }
    }
}
