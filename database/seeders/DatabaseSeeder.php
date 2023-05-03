<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        User::create([
            'firstname' => 'Russel',
            'lastname' => 'Tajada',
            'role' => User::ROLE_ADMIN,
            'password' => bcrypt('password'),
            'email' => 'rus@gmail.com',
        ]);

        User::create([
            'firstname' => 'Richard',
            'lastname' => 'Veloria',
            'role' => User::ROLE_CASHIER,
            'password' => bcrypt('password'),
            'email' => 'richard@gmail.com',
        ]);

        // Category::insert([
        //     ['name'=>'Test1', 'description' => 'lorem ipsum'],
        //     ['name'=>'Test2', 'description' => 'lorem ipsum'],
        // ]);
    }
}
