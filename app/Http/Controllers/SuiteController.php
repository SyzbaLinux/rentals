<?php

namespace App\Http\Controllers;

use App\Models\Suite;
use Illuminate\Http\Request;

class SuiteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $request->validate([

         ]);

        $suite = Suite::find($request->id) ?? new Suite();

        $suite->name           = $request->name;
        $suite->description    = $request->description;
        $suite->monthly_rental = $request->monthly_rental;
        $suite->is_available   = $request->is_available;
        $suite->property_id    = $request->property_id;
        $suite->lease_agreement_id   = $request->lease_agreement_id;
        $suite->save();

        return back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'        => 'Property Suite/Room Added Successfully',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Suite $suite)
    {
        return inertia('Admin/ViewSuite',[
            'suite' => $suite->load(['property'])
        ]);
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Suite $suite)
    {
        $suite->delete();

        return  back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'        => 'Suite Deleted!',
        ]);
    }
}
