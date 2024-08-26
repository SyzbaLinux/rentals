<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\LeaseAgreement;
use App\Models\Payment;
use App\Models\Suite;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public   function index()
    {
        return inertia('Admin/Dashboard',[

                'suites'        => Suite::count(),
                'clients'       => Client::count(),
                'active'        => LeaseAgreement::where('is_active',1)->count(),
                'cancelled'     => LeaseAgreement::where('is_active',0)->count(),
                'totalpayments' => Payment::where('payment_date','>=',date('Y-m-01'))->sum('amount_paid'),

        ]);
    }
}
