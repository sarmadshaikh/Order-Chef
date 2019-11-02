# Register your models here.

from django.contrib import admin

from rest_api.models import Profile, Location, Allergy, Cuisine, GroceryList, Ingredient, GroceryListIngredients, \
    Recipe, RecipesIngredients, ProfilesRecipes, ProfilesAllergies

admin.site.register(Profile)
admin.site.register(Location)
admin.site.register(Allergy)
admin.site.register(Cuisine)
admin.site.register(GroceryList)
admin.site.register(Ingredient)
admin.site.register(GroceryListIngredients)
admin.site.register(Recipe)
admin.site.register(RecipesIngredients)
admin.site.register(ProfilesRecipes)
admin.site.register(ProfilesAllergies)
