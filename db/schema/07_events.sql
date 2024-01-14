DROP TABLE IF EXISTS events CASCADE;
CREATE TABLE "events"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "category_id" INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    "component_id" INTEGER REFERENCES date_components(id) ON DELETE CASCADE,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "start_date_time" TEXT NULL,
    "end_date_time" TEXT NULL,
    "location_name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "event_type" VARCHAR(255) NULL,
    "price" INTEGER NULL,
    "event_url" VARCHAR(255) NULL,
    "photo_url" TEXT NOT NULL
);
