DROP TABLE IF EXISTS activities CASCADE;
CREATE TABLE "activities"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "category_id" INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    "component_id" INTEGER REFERENCES date_components(id) ON DELETE CASCADE,
    "activity_type" VARCHAR(255) NULL,
    "location_name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "description" TEXT NULL,
    "photo_url" TEXT NULL,
    "activity_url" TEXT NULL
);
