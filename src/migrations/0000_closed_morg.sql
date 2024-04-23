CREATE TABLE IF NOT EXISTS "links" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text NOT NULL,
	"short" varchar(50),
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "url_idx" UNIQUE("url")
);
