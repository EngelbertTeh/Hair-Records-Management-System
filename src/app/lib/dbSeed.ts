import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import {
  appointmentTable,
  currentHairConditionEnum,
  currentScapConditionEnum,
  customerTable,
  hairDetailTable,
  hairServiceDetailTable,
  hairServiceTable,
  paymentTypeTable,
  serviceTypeTable,
  stylistLevelTable,
  stylistTable,
  textureEnum,
  variableKeyTable,
  whiteHairSaturationEnum,
} from './schema';

config({ path: '.env.local' });

const dbcs = process.env.DATABASE_URL;
const sql = neon(dbcs || '');
const db = drizzle(sql);

export default async function dbSeed() {
  try {
    const customers = await db
      .insert(customerTable)
      .values([
        {
          name: 'Miss 陳',
          dob: '1980-01-01',
          nric: '900910015224',
          address: '123, ABC Street',
          hp: '0161234567',
          tel: '048123456',
        },
        {
          name: 'Ah Bert',
          dob: '1990-01-01',
          nric: '900922075223',
          address: '1234, FABCD Street',
          hp: '0161111567',
          tel: '048183455',
        },
        {
          name: '王慧怡',
          dob: '1946-01-01',
          nric: '6510015224',
          address: '12322, ABCE Street',
          hp: '0171234567',
          tel: '048123556',
        },
      ])
      .returning({ id: customerTable.id });

    await db.insert(hairDetailTable).values([
      {
        customer_id: customers[0].id,
        natural_base: 3,
        texture: textureEnum.enumValues[0],
        current_hair_condition: currentHairConditionEnum.enumValues[0],
        current_scalp_condition: currentScapConditionEnum.enumValues[0],
        white_hair_saturation: whiteHairSaturationEnum.enumValues[0],
      },
      {
        customer_id: customers[1].id,
        natural_base: 7,
        texture: textureEnum.enumValues[0],
        current_hair_condition: currentHairConditionEnum.enumValues[1],
        current_scalp_condition: currentScapConditionEnum.enumValues[1],
        white_hair_saturation: whiteHairSaturationEnum.enumValues[0],
      },
      {
        customer_id: customers[2].id,
        natural_base: 5,
        texture: textureEnum.enumValues[1],
        current_hair_condition: currentHairConditionEnum.enumValues[0],
        current_scalp_condition: currentScapConditionEnum.enumValues[0],
        white_hair_saturation: whiteHairSaturationEnum.enumValues[2],
      },
    ]);

    const ranks = await db
      .insert(stylistLevelTable)
      .values([
        {
          name: 'Director',
          description: 'More than 10 years experience',
        },
        {
          name: 'Senior Stylist',
          description: '3-5 years experience',
        },
        {
          name: 'Junior Stylist',
          description: '1-2 years experience',
        },
        {
          name: 'Trainee',
          description: '3 months probation',
        },
      ])
      .returning({ id: stylistLevelTable.id });

    const stylists = await db
      .insert(stylistTable)
      .values([
        {
          name: 'Kenny',
          rank: ranks[0].id,
        },
        {
          name: '阿辰',
          rank: ranks[3].id,
        },
      ])
      .returning({ id: stylistTable.id });

    const appointments = await db
      .insert(appointmentTable)
      .values([
        {
          customer_id: customers[0].id,
          stylist_id: stylists[0].id,
          appt_date_time: new Date('2024-05-28 14:00:00'),
        },

        {
          customer_id: customers[1].id,
          stylist_id: stylists[0].id,
          remarks: '头发护理',
          appt_date_time: new Date('2024-05-30 10:00:00'),
        },
        {
          customer_id: customers[2].id,
          stylist_id: stylists[1].id,
          remarks: '染发',
          appt_date_time: new Date('2024-05-02 18:00:00'),
        },
      ])
      .returning({ id: appointmentTable.id });

    const serviceTypes = await db
      .insert(serviceTypeTable)
      .values([
        {
          name: 'Cut', //剪、烫、染、护
        },
        {
          name: 'Perm1', //剪、烫、染、护
          description: 'Perm short hair',
        },
        {
          name: 'Perm2', //剪、烫、染、护
          description: 'Perm long hair',
        },
        {
          name: 'Dye', //剪、烫、染、护
        },
        {
          name: 'Treatment', //剪、烫、染、护
        },
      ])
      .returning({ id: serviceTypeTable.id });

    // create a db.insert for payment
    const paymentTypes = await db
      .insert(paymentTypeTable)
      .values([
        {
          name: 'Cash',
        },
        {
          name: 'Card',
          description: 'debit/credit card',
        },
        {
          name: 'TNG',
          description: 'Touch N Go',
        },
        {
          name: 'Bank transfer',
        },
      ])
      .returning({ id: paymentTypeTable.id });

    const hairServices = await db
      .insert(hairServiceTable)
      .values([
        {
          appointment_id: appointments[0].id,
          service_type: serviceTypes[3].id,
          payment_type: paymentTypes[0].id,
          price: 120,
        },
      ])
      .returning({ id: hairServiceTable.id });

    const variableKeys = await db
      .insert(variableKeyTable)
      .values([
        {
          name: '12%',
          description: 'peroxide 12%',
        },
        {
          name: '3%',
          description: 'peroxide 3%',
        },
        {
          name: '7.43',
          description: ' Medium Copper Gold Blonde',
        },
        {
          name: '5.43',
          description: 'Light Copper Brown',
        },
      ])
      .returning({ id: variableKeyTable.id });

    await db.insert(hairServiceDetailTable).values([
      {
        service_id: hairServices[0].id,
        variable_key_id: variableKeys[0].id,
        value: '45g',
      },
      {
        service_id: hairServices[0].id,
        variable_key_id: variableKeys[2].id,
        value: '30g',
      },
      {
        service_id: hairServices[0].id,
        variable_key_id: variableKeys[1].id,
        value: '45g',
      },
      {
        service_id: hairServices[0].id,
        variable_key_id: variableKeys[3].id,
        value: '30g',
      },
      {
        service_id: hairServices[1].id,
        variable_key_id: variableKeys[0].id,
        value: '45g',
      },
      {
        service_id: hairServices[1].id,
        variable_key_id: variableKeys[2].id,
        value: '30g',
      },
      {
        service_id: hairServices[1].id,
        variable_key_id: variableKeys[1].id,
        value: '45g',
      },
      {
        service_id: hairServices[1].id,
        variable_key_id: variableKeys[3].id,
        value: '30g',
      },
    ]);
  } catch {}
}

dbSeed();
