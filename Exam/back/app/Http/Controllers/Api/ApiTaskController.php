<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\Utils\Paginator;
use Illuminate\Http\Request;

class ApiTaskController extends Controller
{
    public function index(Request $request)
    {
        $paginator = new Paginator(new Task(), $request);

        $posts = $paginator->get();
        $paging = $paginator->paging();

        return response()->json([
            'list' => $posts,
            'paging' => $paging,
        ]);
    }
}
