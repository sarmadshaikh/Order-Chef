# Create your views here.

from django.contrib.auth.models import User, Group
from rest_api.models import Allergy, Cuisine, Ingredient, Location, Recipe
from rest_api.serializers import UserSerializer, GroupSerializer, AllergySerializer, CuisineSerializer, \
    IngredientSerializer, LocationSerializer, RecipeSerializer, RegistrationSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class AllergyViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Allergy.objects.all()
    serializer_class = AllergySerializer


class CuisineViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Cuisine.objects.all()
    serializer_class = CuisineSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class LocationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class LocationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


@api_view(['GET', 'POST'])
def register(request):
    """
    List all users, or create a new user.
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = RegistrationSerializer(users, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['POST'])
# def login(request):
#      """
#      List all users, or create a new user.
#      """
#      users = User.objects.filter(email=request.data)
#      serializer = RegistrationSerializer(users, many=True)
#      if users.count() > 0:
#          return Response(serializer.data, status=status.HTTP_201_CREATED)
#      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
