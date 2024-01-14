DROP TABLE IF EXISTS restaurants CASCADE;
CREATE TABLE "restaurants"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "category_id" INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    "component_id" INTEGER REFERENCES date_components(id) ON DELETE CASCADE,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "rating" FLOAT NOT NULL,
    "price_level" INTEGER NOT NULL,
    "cuisine_type" VARCHAR(255) NOT NULL,
    "opening_hours" TEXT NULL,
    "closing_hours" TEXT NULL,
    "website_url" VARCHAR(255) NULL,
    "photo_url" TEXT NOT NULL
);
