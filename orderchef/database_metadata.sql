BEGIN;
--
-- Create model Allergy
--
CREATE TABLE "allergies" ("allergy_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(45) NOT NULL);
--
-- Create model Cuisine
--
CREATE TABLE "cuisines" ("cuisine_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(45) NOT NULL);
--
-- Create model GroceryList
--
CREATE TABLE "grocery_lists" ("list_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(45) NOT NULL, "creation_date" date NOT NULL);
--
-- Create model GroceryPlan
--
CREATE TABLE "grocery_plans" ("plan_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(45) NOT NULL, "type" varchar(45) NOT NULL, "creation_date" date NOT NULL);
--
-- Create model HealthProfile
--
CREATE TABLE "health_profiles" ("profile_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "height_cm" integer NOT NULL, "weight_kg" integer NOT NULL, "blood_group" varchar(45) NOT NULL);
--
-- Create model Ingredient
--
CREATE TABLE "ingredients" ("ingredient_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(45) NOT NULL, "calories" integer NOT NULL);
--
-- Create model Location
--
CREATE TABLE "locations" ("location_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "country" varchar(45) NOT NULL);
--
-- Create model User
--
CREATE TABLE "users" ("user_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "first_name" varchar(45) NOT NULL, "last_name" varchar(45) NOT NULL, "date_of_birth" date NOT NULL, "gender" varchar(45) NOT NULL, "preferred_cuisines" varchar(100) NOT NULL, "diet_types" varchar(45) NOT NULL, "grocery_plan_id" integer NOT NULL REFERENCES "grocery_plans" ("plan_id") DEFERRABLE INITIALLY DEFERRED, "health_profile_id" integer NOT NULL REFERENCES "health_profiles" ("profile_id") DEFERRABLE INITIALLY DEFERRED, "location_id_id" integer NOT NULL REFERENCES "locations" ("location_id") DEFERRABLE INITIALLY DEFERRED);
--
-- Create model Recipe
--
CREATE TABLE "recipes" ("recipe_id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(100) NOT NULL, "image" varchar(100) NOT NULL, "author" varchar(45) NOT NULL, "prep_time_min" integer NOT NULL, "cook_time_min" integer NOT NULL, "calories" integer NOT NULL, "directions" text NOT NULL, "cuisine_id" integer NOT NULL REFERENCES "cuisines" ("cuisine_id") DEFERRABLE INITIALLY DEFERRED);
CREATE INDEX "users_grocery_plan_id_b7e2d738" ON "users" ("grocery_plan_id");
CREATE INDEX "users_health_profile_id_f9df9a3c" ON "users" ("health_profile_id");
CREATE INDEX "users_location_id_id_b6ffaa2f" ON "users" ("location_id_id");
CREATE INDEX "recipes_cuisine_id_d226e844" ON "recipes" ("cuisine_id");
COMMIT;
