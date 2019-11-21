from django import forms
from django.contrib.auth.models import User

from rest_api.models import Profile


class UserForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email', 'password')


class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ('date_of_birth', 'location_id')
