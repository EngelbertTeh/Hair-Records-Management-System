DO $$ BEGIN
 CREATE TYPE "current_hair_condition" AS ENUM('normal', 'resistant', 'damage', 'very damage');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "current_scalp_condition" AS ENUM('normal', 'dry', 'oily', 'dandruff', 'sensitive');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "texture" AS ENUM('fine', 'medium', 'thick');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "white_hair_saturation" AS ENUM('undetectable', 'minimally visible', 'moderately visible', 'saturated');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "appointment" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" integer NOT NULL,
	"stylist_id" integer NOT NULL,
	"remarks" text,
	"appt_date_time" timestamp NOT NULL,
	"timestamp" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customer" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"dob" date NOT NULL,
	"nric" varchar(12),
	"address" text,
	"hp" varchar(10),
	"tel" text,
	"timestamp" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hair_detail" (
	"id" serial PRIMARY KEY NOT NULL,
	"customer_id" integer NOT NULL,
	"natural_base" integer NOT NULL,
	"texture" "texture",
	"current_hair_condition" "current_hair_condition",
	"current_scalp_condition" "current_scalp_condition",
	"white_hair_saturation" "white_hair_saturation",
	"timestamp" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hair_service_detail" (
	"id" serial PRIMARY KEY NOT NULL,
	"service_id" integer NOT NULL,
	"variable_key" integer NOT NULL,
	"value" varchar(50) NOT NULL,
	"timestamp" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "hair_service" (
	"id" serial PRIMARY KEY NOT NULL,
	"appointment_id" integer NOT NULL,
	"service_type" integer NOT NULL,
	"payment_type" integer NOT NULL,
	"price" integer NOT NULL,
	"timestamp" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"short" varchar(50),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payment_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(15) NOT NULL,
	"description" varchar(50) NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	CONSTRAINT "payment_type_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "rank" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(25) NOT NULL,
	"description" varchar(50) NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	CONSTRAINT "rank_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "service_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(15) NOT NULL,
	"description" varchar(50) NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	CONSTRAINT "service_type_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "stylist" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"rank" integer NOT NULL,
	CONSTRAINT "stylist_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "variable_key" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(15) NOT NULL,
	"description" varchar(50) NOT NULL,
	"timestamp" timestamp DEFAULT now(),
	CONSTRAINT "variable_key_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "nric_idx" ON "customer" ("nric");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "url_idx" ON "links" ("url");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "appointment" ADD CONSTRAINT "appointment_customer_id_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "appointment" ADD CONSTRAINT "appointment_stylist_id_stylist_id_fk" FOREIGN KEY ("stylist_id") REFERENCES "stylist"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hair_detail" ADD CONSTRAINT "hair_detail_customer_id_customer_id_fk" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hair_service_detail" ADD CONSTRAINT "hair_service_detail_service_id_service_type_id_fk" FOREIGN KEY ("service_id") REFERENCES "service_type"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hair_service_detail" ADD CONSTRAINT "hair_service_detail_variable_key_variable_key_id_fk" FOREIGN KEY ("variable_key") REFERENCES "variable_key"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hair_service" ADD CONSTRAINT "hair_service_appointment_id_appointment_id_fk" FOREIGN KEY ("appointment_id") REFERENCES "appointment"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hair_service" ADD CONSTRAINT "hair_service_service_type_hair_service_detail_id_fk" FOREIGN KEY ("service_type") REFERENCES "hair_service_detail"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "hair_service" ADD CONSTRAINT "hair_service_payment_type_hair_service_detail_id_fk" FOREIGN KEY ("payment_type") REFERENCES "hair_service_detail"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
