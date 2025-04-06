<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class RecipeAuthor extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'photo'
    ];

    public function recipes(): HasMany
    {
        return $this->hasMany(Recipe::class);
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class, 'recipe_author_id');
    }
}
