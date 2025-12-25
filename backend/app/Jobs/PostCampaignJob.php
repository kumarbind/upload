<?php

namespace App\Jobs;

use App\Models\Campaign;
use App\Services\FacebookService;
use App\Services\InstagramService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class PostCampaignJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public Campaign $campaign;

    public function __construct(Campaign $campaign){
        $this->campaign = $campaign;
    }

    public function handle(FacebookService $facebookService,InstagramService $instagramService) {
        $facebookService->postToPage(
            config('services.facebook.page_token'),
            config('services.facebook.page_id'),
            $this->campaign->name,
            $this->campaign->tracking_url
        );
        
        if ($this->campaign->image_url) {
            $instagramService->post(
                config('services.instagram.user_id'),
                config('services.instagram.access_token'),
                $this->campaign->name,
                $this->campaign->image_url
            );
        }
    }
}
