<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Priority;
use App\Models\Utils\Paginator;
use Illuminate\Http\Request;

class ApiPriorityController extends Controller
{
    public function index(Request $request)
    {
        $paginator = new Paginator(new Priority(), $request);

        $posts = $paginator->get();
        $paging = $paginator->paging();

        return response()->json([
            'list' => $posts,
            'paging' => $paging,
        ]);
    }
}
