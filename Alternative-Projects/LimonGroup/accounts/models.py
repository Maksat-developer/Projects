from django.db import models
from django.contrib.auth.models import User


class User(models.Model):
    user = models.OneToOneField(
        User, related_name='user', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self) -> str:
        return self.user

    USERNAME_FIELD = 'user'
