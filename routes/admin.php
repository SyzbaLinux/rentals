<?php
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group([
    'as'=>'admin.',
    'middleware'=>[
        'auth:sanctum',
        config('jetstream.auth_session'),
        'verified',
    ],
],function () {

    Route::get('/dashboard', [AdminController::class,'index'])->name('dashboard');
    Route::resource('/properties', \App\Http\Controllers\PropertyController::class);
    Route::resource('/clients', \App\Http\Controllers\ClientController::class);
    Route::resource('/lease-agreements', \App\Http\Controllers\LeaseAgreementController::class);
    Route::resource('/payments', \App\Http\Controllers\PaymentController::class);
    Route::resource('/properties/suites', \App\Http\Controllers\SuiteController::class);

});
