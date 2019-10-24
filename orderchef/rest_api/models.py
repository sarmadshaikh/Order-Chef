from django.db import models
from django.utils.timezone import now


class Allergy(models.Model):
    allergy_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)

    class Meta:
        db_table = 'allergies'


class Cuisine(models.Model):
    cuisine_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)

    class Meta:
        db_table = 'cuisines'


class GroceryList(models.Model):
    list_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    creation_date = models.DateField(default=now())

    class Meta:
        db_table = 'grocery_lists'


class GroceryPlan(models.Model):
    plan_types = [
        ('D', 'Daily'),
        ('W', 'Weekly')
    ]
    plan_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    type = models.CharField(max_length=45, choices=plan_types)
    creation_date = models.DateField(default=now())

    class Meta:
        db_table = 'grocery_plans'


class HealthProfile(models.Model):
    profile_id = models.AutoField(primary_key=True)
    height_cm = models.IntegerField()
    weight_kg = models.IntegerField()
    blood_group = models.CharField(max_length=45)

    class Meta:
        db_table = 'health_profiles'


class Ingredient(models.Model):
    ingredient_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    calories = models.IntegerField()

    class Meta:
        db_table = 'ingredients'


class Location(models.Model):
    location_id = models.AutoField(primary_key=True)
    country = models.CharField(max_length=45)

    class Meta:
        db_table = 'locations'


class Recipe(models.Model):
    recipe_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    author = models.CharField(max_length=45)
    prep_time_min = models.IntegerField()
    cook_time_min = models.IntegerField()
    calories = models.IntegerField()
    directions = models.TextField()
    cuisine = models.ForeignKey(Cuisine, on_delete=models.CASCADE)

    class Meta:
        db_table = 'recipes'


class User(models.Model):
    diet_types = [
        ('VEG', 'Vegetarian'),
        ('NONVEG', 'Non-Vegetarian'),
        ('VEGAN', 'Vegan')
    ]
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    date_of_birth = models.DateField(default=None)
    gender = models.CharField(max_length=45)
    location_id = models.ForeignKey(Location, on_delete=models.CASCADE)
    preferred_cuisines = models.CharField(max_length=100)
    diet_types = models.CharField(max_length=45, choices=diet_types)
    health_profile = models.ForeignKey(HealthProfile, on_delete=models.CASCADE)
    grocery_plan = models.ForeignKey(GroceryPlan, on_delete=models.CASCADE)

    class Meta:
        db_table = 'users'
