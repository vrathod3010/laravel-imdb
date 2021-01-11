<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        if ($request->filled('query') && strlen($request->get('query')) > 2) {
            return collect(Http::withToken(config('services.tmdb.token'))
                ->get('https://api.themoviedb.org/3/search/movie?query=' . $request->get('query'))
                ->json()['results'])->take(7);
        }
        return collect([]);
    }
}
