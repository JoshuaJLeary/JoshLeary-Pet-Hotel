CREATE TABLE "pets" (
	"id" serial primary key,
	"owner" integer,
	"name" varchar(80) not null,
	"type" varchar(80) not null,
	"breed" varchar(80),
	"attendance" boolean
	
);
CREATE TABLE "owners" (
	"id" serial primary key,
	"name" integer,
	"pets_owned" varchar(80)
);