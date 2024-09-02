<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Properties', [
            'properties' => Property::all()
        ]);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'address' => 'required|string|max:255',
            'city' => 'nullable|exists:cities,id',
            'state' => 'nullable|exists:states,id',
            'country' => 'nullable|exists:countries,id',
            'number_of_rooms' => 'nullable|integer|min:0',
            'is_available' => 'nullable|boolean',
            'type' => 'nullable|in:commercial,residential',
            'image_url' => 'nullable|string|max:255',
        ]);

        $property = Property::firstOrNew(['id' => $request->id]);

        $property->title = $request->title;
        $property->description = $request->description;
        $property->address = $request->address;
        $property->city = $request->city;
        $property->state = $request->state;
        $property->country = $request->country;
        $property->number_of_rooms = $request->number_of_rooms ?? 0;
        $property->is_available = $request->is_available ?? true;
        $property->type = $request->type ?? 'commercial';
        $property->image_url = $request->image_url;
        $property->save();

        return back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'       => 'Property Details Saved',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
         return inertia('Admin/ViewProperty', [
             'property' => $property->load('suites')
         ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        $property->delete();

        return back()->with('message', [
            'type'        => 'success',
            'description' => '',
            'title'        => 'Property Deleted',
        ]);
    }
}
