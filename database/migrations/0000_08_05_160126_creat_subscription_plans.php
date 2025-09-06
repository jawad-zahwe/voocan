<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('subscription_plans', function (Blueprint $table) {
            $table->id();

            $table->string('name', 50);

            $table->string('slug', 50)->unique();

            $table->unsignedTinyInteger('max_profiles');

            $table->decimal('price_monthly', 8, 2);

            $table->decimal('price_yearly', 8, 2);

            $table->json('features')->nullable();

            $table->boolean('is_active')->default(true);
            
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('subscription_plans');
    }
};