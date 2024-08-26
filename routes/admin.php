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
//
    Route::get('/dashboard', [AdminController::class,'index'])->name('dashboard');
    Route::resource('/properties', \App\Http\Controllers\PropertyController::class);
    Route::resource('/clients', \App\Http\Controllers\ClientController::class);
    Route::resource('/lease-agreements', \App\Http\Controllers\LeaseAgreementController::class);
    Route::resource('/payments', \App\Http\Controllers\PaymentController::class);

//    Route::resource('/batch-rules', \App\Http\Controllers\BatchRuleController::class);
//
//    Route::resource('/clients', \App\Http\Controllers\ClientController::class);
//    Route::resource('/contracts', \App\Http\Controllers\AgreementOfSaleController::class);
//    Route::get('/cancelled-contracts', [AdminController::class,'cancelledContracts'])->name('cancelled.contracts');
//
//    Route::get('/reports', [AdminController::class,'report'])->name('report');
//    Route::get('/reports/generated', [AdminController::class,'generateReport'])->name('generateReport');
//    Route::get('/users', [AdminController::class,'users'])->name('users');
//    Route::get('/client-contracts/{client}', [AdminController::class,'clientContracts'])->name('clientContracts');

});
