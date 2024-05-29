from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password, **kwargs):
        if not email:
            raise ValueError('Usuarios tem que ter um email')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name, **kwargs)
        user.set_password(password)
        user.is_active = True
        user.save()

        return user

    def create_superuser(self, email, name, password):
        user = self.create_user(email=email, name=name, password=password)
        user.set_password(password)
        user.is_active = True
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):

    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    TYPE_CHOICES = (
        ('Admin', 'Admin'),
        ('Restaurante', 'Restaurante'),
        ('Cliente', 'Cliente'),
    )
    role = models.CharField(
        max_length=25, choices=TYPE_CHOICES, default="Cliente")


    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return f'{self.name} - email: {self.email}'

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

