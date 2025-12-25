<?php


namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class FacebookService
{
    protected string $pageId;
    protected string $token;

    public function __construct()
    {
        $this->pageId = config('services.facebook.page_id');
        $this->token  = config('services.facebook.page_token');
    }

    /**
     * Post text + link to Facebook Page
     */
    public function post(string $message, ?string $link = null): bool
    {
        $response = Http::asForm()->post(
            "https://graph.facebook.com/{$this->pageId}/feed",
            [
                'message' => $message,
                'link' => $link,
                'access_token' => $this->token,
            ]
        );

        if ($response->failed()) {
            Log::error('Facebook post failed', $response->json());
            return false;
        }

        return true;
    }

    public function postToPage($pageToken, $pageId, $message, $link = null)
    {
        return Http::post("https://graph.facebook.com/v19.0/{$pageId}/feed", [
            'message' => $message,
            'link' => $link,
            'access_token' => $pageToken
        ])->json();
    }
}
