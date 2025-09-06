<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\SubscriptionPlan;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // التأكد من وجود خطط الاشتراك أولاً
        $duePlan = SubscriptionPlan::where('name', 'Due')->first();
        $familyPlan = SubscriptionPlan::where('name', 'Family')->first();

        if (!$duePlan || !$familyPlan) {
            $this->command->error('يجب تشغيل SubscriptionPlanSeeder أولاً!');
            return;
        }

        // إنشاء حساب تجريبي أساسي
        User::create([
            'name' => 'testuser',
            'email' => 'test@example.com',
            'password' => Hash::make('password123'),
            'subscription_plan_id' => $duePlan->id,
            'coupon_code' => null,
            'referral_code' => null,
        ]);

        // إنشاء حساب تجريبي متقدم
        User::create([
            'name' => 'admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin123'),
            'subscription_plan_id' => $familyPlan->id,
            'coupon_code' => null,
            'referral_code' => null,
        ]);

        // إنشاء حساب تجريبي مع كوبون
        User::create([
            'name' => 'vipuser',
            'email' => 'vip@example.com',
            'password' => Hash::make('vip123456'),
            'subscription_plan_id' => $familyPlan->id,
            'coupon_code' => 'VIP2024',
            'referral_code' => 'REF001',
        ]);

    }
}
