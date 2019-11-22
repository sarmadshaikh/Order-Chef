import django
from django.db import models
from django.utils.timezone import now


class Allergy(models.Model):
    allergy_id = models.AutoField(primary_key=True, default=0)
    name = models.CharField(max_length=45)

    class Meta:
        db_table = 'allergies'


class Cuisine(models.Model):
    cuisine_id = models.AutoField(primary_key=True, default=0)
    name = models.CharField(max_length=45)

    class Meta:
        db_table = 'cuisines'


class Ingredient(models.Model):
    ingredient_id = models.AutoField(primary_key=True, default=0)
    name = models.CharField(max_length=45)
    calories = models.IntegerField()

    class Meta:
        db_table = 'ingredients'


class Location(models.Model):
    location_id = models.AutoField(primary_key=True, default=0)
    country = models.CharField(max_length=45)

    class Meta:
        db_table = 'locations'


class Recipe(models.Model):
    recipe_id = models.AutoField(primary_key=True, default=0)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    author = models.CharField(max_length=45)
    prep_time_min = models.IntegerField(default=0)
    cook_time_min = models.IntegerField(default=0)
    calories = models.IntegerField()
    directions = models.TextField()
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE)
    ingredients = models.ManyToManyField(Ingredient, through="RecipesIngredients")

    class Meta:
        db_table = 'recipes'


class RecipesIngredients(models.Model):
    id = models.AutoField(primary_key=True, default=0)
    quantity = models.IntegerField(default=0)
    recipes_id = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredients_id = models.ForeignKey(Ingredient, on_delete=models.CASCADE)

    class Meta:
        db_table = 'recipes_ingredients'


class Profile(models.Model):
    diet_types = [
        ('VEG', 'Vegetarian'),
        ('NONVEG', 'Non-Vegetarian'),
        ('VEGAN', 'Vegan')
    ]
    profile_id = models.AutoField(primary_key=True, default=0)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    date_of_birth = models.DateField(default=None)
    gender = models.CharField(max_length=45)
    location_id = models.ForeignKey(Location, on_delete=models.CASCADE)
    preferred_cuisines = models.CharField(max_length=100)
    diet_types = models.CharField(max_length=45, choices=diet_types)
    height_cm = models.IntegerField()
    weight_kg = models.IntegerField()
    blood_group = models.CharField(max_length=100)
    allergies = models.ManyToManyField(Allergy, through="ProfilesAllergies")
    recipes = models.ManyToManyField(Recipe, through="ProfilesRecipes")

    class Meta:
        db_table = 'profiles'


class ProfilesRecipes(models.Model):
    id = models.AutoField(primary_key=True, default=0)
    creation_date = models.DateField(default=django.utils.timezone.now)
    recipes_id = models.ForeignKey(Recipe, on_delete=models.CASCADE, default=0)
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, default=0)

    class Meta:
        db_table = 'recipes_profiles'


class ProfilesAllergies(models.Model):
    id = models.AutoField(primary_key=True, default=0)
    creation_date = models.DateField(default=django.utils.timezone.now)
    allergies_id = models.ForeignKey(Allergy, on_delete=models.CASCADE, default=0)
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, default=0)

    class Meta:
        db_table = 'profiles_allergies'


class GroceryList(models.Model):
    list_id = models.AutoField(primary_key=True, default=0)
    name = models.CharField(max_length=45)
    creation_date = models.DateField(default=django.utils.timezone.now)
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE, default=0)
    ingredients = models.ManyToManyField(Ingredient, through="GroceryListIngredients")

    class Meta:
        db_table = 'grocery_lists'


class GroceryListIngredients(models.Model):
    id = models.BigIntegerField(primary_key=True)
    quantity = models.IntegerField(default=0)
    groceryList_id = models.ForeignKey(GroceryList, on_delete=models.CASCADE)
    ingredients_id = models.ForeignKey(Ingredient, on_delete=models.CASCADE)

    class Meta:
        db_table = 'groceryList_ingredients'
