# Create your views here.
from django.contrib.auth.models import User, Group
from django.shortcuts import render
from django.views.generic import TemplateView
from rest_api.models import Allergy, Cuisine, Ingredient, Location, Recipe, RecipesIngredients
from rest_api.serializers import UserSerializer, GroupSerializer, AllergySerializer, CuisineSerializer, \
    LocationSerializer, RecipeSerializer, RegistrationSerializer, RecipesIngredientsSerializer, \
    IngredientSerializer
from rest_framework import viewsets, status, generics
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


class RecipeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class RecipesIngredientsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = RecipesIngredients.objects.all()
    serializer_class = RecipesIngredientsSerializer


# class getIngredientsPerRecipe(generics.ListAPIView):
#     model = RecipesIngredients
#     serializer_class = RecipesIngredientsSerializer
#
#     def get_queryset(self):
#         """
#         Optionally restricts the returned purchases to a given user,
#         by filtering against a `username` query parameter in the URL.
#         """
#         queryset = RecipesIngredients.objects.all()
#         recipes_id = self.request.query_params.get('recipes_id', None)
#         if recipes_id is not None:
#             queryset = queryset.filter(recipes_id=recipes_id)
#         return queryset


class getIngredientsPerRecipe(generics.ListAPIView):
    serializer_class = RecipesIngredientsSerializer

    # queryset = RecipesIngredients.objects.all()

    def get_queryset(self):
        queryset = RecipesIngredients.objects.all()
        rid = self.request.query_params.get('recipes_id', '')
        if rid:
            queryset = queryset.filter(recipes_id_id=rid)

        return queryset


class getRecipesPerIngredients(generics.ListAPIView):
    serializer_class = RecipesIngredientsSerializer

    # queryset = RecipesIngredients.objects.all()

    def get_queryset(self):
        queryset = RecipesIngredients.objects.all()
        iid = self.request.query_params.get('Ingredients_Ids', '')
        iid = iid.split(',')
        if iid:
            # queryset = queryset.filter(recipes_id_id=rid)
            queryset = queryset.filter(ingredients_id_id__in=iid)

        return queryset


class getRecipesPerIngredientsV2(generics.ListAPIView):
    serializer_class = RecipesIngredientsSerializer

    # queryset = RecipesIngredients.objects.all()

    def get_queryset(self):
        queryset = RecipesIngredients.objects.all()
        iid = self.request.query_params.get('Ingredients_Ids', '')
        iid = iid.split(',')
        if iid:
            # queryset = queryset.filter(recipes_id_id=rid)
            queryset = queryset.filter(ingredients_id_id__in=iid).distinct("recipes_id_id")

        return queryset


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


# @login_required
# @transaction.atomic
# def update_profile(request):
#     if request.method == 'POST':
#         user_form = UserForm(request.POST, instance=request.user)
#         profile_form = ProfileForm(request.POST, instance=request.user.profile)
#         if user_form.is_valid() and profile_form.is_valid():
#             user_form.save()
#             profile_form.save()
#             messages.success(request, _('Your profile was successfully updated!'))
#             return redirect('settings:profile')
#         else:
#             messages.error(request, _('Please correct the error below.'))
#     else:
#         user_form = UserForm(instance=request.user)
#         profile_form = ProfileForm(instance=request.user.profile)
#     return render(request, 'profiles/profile.html', {
#         'user_form': user_form,
#         'profile_form': profile_form
#     })


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


class HomePageView(TemplateView):

    def get(self, request, *args, **kwargs):
        return render(request, 'index.html', context=None)
