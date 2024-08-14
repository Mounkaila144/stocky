<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Insert some stuff
        DB::table('settings')->updateOrInsert(
            ['id' => 1],
            array(
                'email' => 'admin@example.com',
                'currency_id' => 1,
                'client_id' => 1,
                'sms_gateway' => 1,
                'is_invoice_footer' => 0,
                'invoice_footer' => Null,
                'warehouse_id' => Null,
                'CompanyName' => 'Nigerdev',
                'CompanyPhone' => '+227 97977199',
                'CompanyAdress' => 'Niamey',
                'footer' => 'Nigerdev - Ultimate Inventory With POS',
                'developed_by' => 'Nigerdev',
                'logo' => 'logo-default.png',
            )

        );
    }
}
