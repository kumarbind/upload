<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    protected $fillable = [
        'name',
        'type',
        'app_platform',
        'app_identifier',
        'app_store_url',
        'website_url',
        'target_page',
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'status'
    ];
}
