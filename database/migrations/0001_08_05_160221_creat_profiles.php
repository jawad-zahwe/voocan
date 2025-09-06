<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
            ->constrained()
            ->onDelete('cascade');

            $table->string('name', 50);

            $table->string('avatar')->nullable();

            $table->boolean('is_kid')->default(false);

            $table->string('pin_code', 10)->nullable();

            $table->boolean('is_active')->default(false);

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('profiles');
    }
};