<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function category()
    {
        return inertia('Category/Category');
    }
}
