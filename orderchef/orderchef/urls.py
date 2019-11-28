"""orderchef URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_api import views
from rest_api.views import getIngredientsPerRecipe, getRecipesPerIngredients
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
# router.register(r'register', views.register)
router.register(r'groups', views.GroupViewSet)
router.register(r'allergies', views.AllergyViewSet)
router.register(r'cuisines', views.CuisineViewSet)
router.register(r'ingredients', views.IngredientViewSet)
router.register(r'locations', views.LocationViewSet)
router.register(r'recipes', views.RecipeViewSet)
router.register(r'ingredient', views.IngredientViewSet)
router.register(r'recipesingredients', views.RecipesIngredientsViewSet)

urlpatterns = [
    # path('ipr/', views.getIngredientsPerRecipe),
    # path('ipr/', views.getIngredientsPerRecipe),
    path('ipr/', getIngredientsPerRecipe.as_view()),
    path('rpi/', getRecipesPerIngredients.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path('register/', views.register),
    path('admin', admin.site.urls),
    path('api', include(router.urls)),
    url('', views.HomePageView.as_view()),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #  path('login/', views.login),
]
