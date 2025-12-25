<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class InstagramService
{
    protected string $businessId;
    protected string $token;

    public function __construct()
    {
        $this->businessId = config('services.instagram.user_id');
        $this->token      = config('services.instagram.access_token');
    }

    /**
     * Publish image post to Instagram Business account
     */
    public function post(string $imageUrl, string $caption): bool
    {
        // Step 1: Create media container
        $media = Http::asForm()->post(
            "https://graph.facebook.com/{$this->businessId}/media",
            [
                'image_url' => $imageUrl,
                'caption' => $caption,
                'access_token' => $this->token,
            ]
        )->json();

        if (!isset($media['id'])) {
            Log::error('Instagram media creation failed', $media);
            return false;
        }

        // Step 2: Publish media
        $publish = Http::asForm()->post(
            "https://graph.facebook.com/{$this->businessId}/media_publish",
            [
                'creation_id' => $media['id'],
                'access_token' => $this->token,
            ]
        );

        if ($publish->failed()) {
            Log::error('Instagram publish failed', $publish->json());
            return false;
        }

        return true;
    }
}
