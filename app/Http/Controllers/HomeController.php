<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendPdfRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function sendPdf(SendPdfRequest $request): RedirectResponse
    {
        $validated = $request->safe();
        $email = $validated['email'];
        return back()->with('success', 'Email sent!');
    }
}
