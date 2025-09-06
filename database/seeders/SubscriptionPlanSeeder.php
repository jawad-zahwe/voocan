<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        SubscriptionPlan::create([
            'name' => 'Due',
            'slug' => Str::slug('Due'),
            'max_profiles' => 2,
            'price_monthly' => 9.99,
            'price_yearly' => 99.99,
            'features' => [
                'HD quality',
                '2 screens/users at the same time',
                'Includes: Netflix, Disney+, Amazon Prime, Apple+',
                'No adverts'
            ],
            'is_active' => true,
        ]);

        SubscriptionPlan::create([
            'name' => 'Family',
            'slug' => Str::slug('Family'),
            'max_profiles' => 5,
            'price_monthly' => 14.99,
            'price_yearly' => 149.99,
            'features' => [
                'Full HD quality',
                'Up to 5 screens/users at the same time',
                'Includes: Netflix, Disney+, Amazon Prime, Apple+',
                'No adverts'
            ],
            'is_active' => true,
        ]);
    }

}
