-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "given_name" VARCHAR(255) NOT NULL,
    "family_name" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NULL
);
