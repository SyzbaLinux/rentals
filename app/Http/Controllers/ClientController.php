<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Clients', [
            'clients' => Client::all()
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'middle_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'email' => 'nullable|email|max:255',
            'phone' => 'nullable|string|max:20',
            'tax_number' => 'nullable|string|max:50',
            'bpn_number' => 'nullable|string|max:50',
            'address' => 'nullable|string',
            'country' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'zipcode' => 'nullable|string|max:20',
            'natID' => 'nullable|string|max:20',
            'dob' => 'nullable|date',
        ]);

        $client = Client::firstOrNew(['id' => $request->id]);

        $client->first_name = $request->first_name;
        $client->middle_name = $request->middle_name;
        $client->last_name = $request->last_name;
        $client->email = $request->email;
        $client->phone = $request->phone;
        $client->tax_number = $request->tax_number;
        $client->bpn_number = $request->bpn_number;
        $client->address = $request->address;
        $client->country = $request->country;
        $client->state = $request->state;
        $client->city = $request->city;
        $client->zipcode = $request->zipcode;
        $client->natID = $request->natID;
        $client->dob = $request->dob;
        $client->save();

        return back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'       => 'Client Details Saved',
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {

        $client->delete();

        return  redirect()->back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'       => 'Client Details Saved',
        ]);
    }
}
