DROP TABLE IF EXISTS movies CASCADE;
CREATE TABLE "movies"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "category_id" INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    "component_id" INTEGER REFERENCES date_components(id) ON DELETE CASCADE,
    "movie_title" VARCHAR(255) NOT NULL,
    "start_time" TIME(0) WITH TIME ZONE NULL,
    "duration" INTEGER NULL,
    "movie_theatre" VARCHAR(255) NOT NULL,
    "synopsis" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "movie_url" VARCHAR(255) NULL
);
