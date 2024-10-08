<?php


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Utilisation de updateOrInsert pour éviter les doublons
        DB::table('clients')->updateOrInsert(
            ['id' => 1], // Critère de recherche basé sur l'ID
            [
                'name'   => 'walk-in-customer',
                'code'   => 1,
                'email'  => 'walk-in-customer@example.com',
                'country'=> 'bangladesh',
                'city'   => 'dhaka',
                'phone'  => '123456780',
                'adresse'=> 'N45 , Dhaka',
                'tax_number' => NULL,
            ]
        );
    }
}

