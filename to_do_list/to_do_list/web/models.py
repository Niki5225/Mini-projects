from django.core.validators import MinLengthValidator
from django.db import models
from django.contrib.auth import models as auth_models


# Create your models here.

class AppUser(auth_models.AbstractUser):
    username = models.CharField(
        null=False,
        blank=False,
        unique=True,
        max_length=60,
    )

    password = models.CharField(
        null=False,
        blank=False,
        validators=[
            MinLengthValidator(8)
        ],
        max_length=20,
    )
