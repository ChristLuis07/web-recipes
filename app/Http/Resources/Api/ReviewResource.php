<?php

namespace App\Http\Resources\Api;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'rating' => $this->rating,
            'created_at' => $this->created_at,
            'author' => [
                'id' => $this->author->id,
                'name' => $this->author->name,
                'photo' => $this->author->photo,
            ],
        ];
    }
}