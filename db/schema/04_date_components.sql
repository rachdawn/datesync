DROP TABLE IF EXISTS date_components CASCADE;
CREATE TABLE "date_components"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "date_id" INTEGER REFERENCES dates(id) ON DELETE CASCADE,
    "category_id" INTEGER REFERENCES categories(id) ON DELETE CASCADE
);
