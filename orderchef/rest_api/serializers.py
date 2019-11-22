from django.contrib.auth.models import User, Group
from rest_api.models import Allergy, Cuisine, Ingredient, Location, Recipe, RecipesIngredients
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'groups', 'password', 'first_name', 'last_name', 'last_login',
                  'date_joined', 'is_superuser', 'is_active', 'is_staff']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class AllergySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Allergy
        fields = ['id', 'name']


class CuisineSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Cuisine
        fields = ['id', 'name']


class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ['id', 'name', 'calories']


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'country']


class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'name', 'image', 'author', 'prep_time_min', 'cook_time_min', 'calories', 'directions',
                  'cuisine', 'ingredients']


class RecipesIngredientsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RecipesIngredients
        fields = ['id', 'quantity']


class RegistrationSerializer(serializers.Serializer):
    username = serializers.CharField(required=False, allow_blank=True, max_length=100)
    first_name = serializers.CharField(required=False, allow_blank=True, max_length=100)
    last_name = serializers.CharField(required=False, allow_blank=True, max_length=100)
    email = serializers.CharField(required=False, allow_blank=True, max_length=100)
    password = serializers.CharField(required=False, allow_blank=True, max_length=100)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()
        return instance


# class VerificationBaseSerializer(serializers.Serializer):
#      """
#      Abstract serializer used for verifying and refreshing JWTs.
#      """
#
#      def _check_user(self, payload):
#          username = jwt_get_username_from_payload(payload)
#
#          # Make sure user exists
#          try:
#              user = User.objects.get_by_natural_key(username)
#          except User.DoesNotExist:
#              msg = _("User doesn't exist.")
#              raise serializers.ValidationError(msg)
#
#          if not user.is_active:
#              msg = _('User account is disabled.')
#              raise serializers.ValidationError(msg)
#
#          return user
