<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Payments', [
            'payments' => Payment::all()
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'lease_agreement_id' => 'required|exists:lease_agreements,id',
            'client_id' => 'required|exists:clients,id',
            'payment_date' => 'required|date',
            'room_number' => 'nullable|exists:suites,id',  // Assuming 'rooms' is the related table
            'receipt_number' => 'nullable|string|max:255',
            'amount_paid' => 'required|numeric|min:0',
            'description' => 'nullable|string|max:255',
            'payment_method' => 'required|string|in:cash,credit_card,bank_transfer,etc',  // Add more methods if needed
            'currency' => 'required|string|in:usd,eur,gbp,etc',  // Add more currencies if needed
            'amount_in_words' => 'nullable|string',
        ]);

        $payment = Payment::firstOrNew(['id' => $request->id]);

        $payment->lease_agreement_id = $request->lease_agreement_id;
        $payment->client_id = $request->client_id;
        $payment->payment_date = $request->payment_date;
        $payment->room_number = $request->room_number;
        $payment->receipt_number = $request->receipt_number;
        $payment->amount_paid = $request->amount_paid;
        $payment->description = $request->description;
        $payment->payment_method = $request->payment_method;
        $payment->currency = $request->currency;
        $payment->amount_in_words = $request->amount_in_words;
        $payment->save();

        return back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'       => 'Payment Details Saved',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Payment $payment)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Payment $payment)
    {
        $payment->delete();

        return back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'        => 'Property Deleted',
        ]);
    }
}
