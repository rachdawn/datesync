DROP TABLE IF EXISTS dates CASCADE;
CREATE TABLE "dates"(
    "id" SERIAL PRIMARY KEY NOT NULL,
    "owner_id" INTEGER, --REFERENCES users(id) ON DELETE CASCADE,
    "invited_user_id" INTEGER, --REFERENCES users(id) ON DELETE CASCADE,
    "created_at" TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "scheduled_date" TIMESTAMP(0) WITH TIME ZONE NULL,
    "default_location" VARCHAR(255),
    "is_draft" BOOLEAN DEFAULT true
);

