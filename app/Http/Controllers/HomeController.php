<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendPdfRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\PdfMail;

class HomeController extends Controller
{
    public function sendPdf(SendPdfRequest $request): RedirectResponse
    {
        $validated = $request->safe();
        $email = $validated['email'];
        Mail::to($email)->send(new PdfMail());
        return back()->with('success', 'Email sent!');
    }
}
