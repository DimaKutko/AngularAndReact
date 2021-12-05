<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function priority()
    {
        return $this->belongsTo(Priority::class);
    }

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
