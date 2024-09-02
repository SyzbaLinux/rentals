<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{

    public function suites()
    {
        return $this->hasMany(Suite::class);
    }

    public function tenants()
    {
        return $this->belongsToMany(Client::class);
    }
}
