from django import forms
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class RegisterUserForm(forms.ModelForm):
    class Meta:
        model = UserModel
        fields = '__all__'
