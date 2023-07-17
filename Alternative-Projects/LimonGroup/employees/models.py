from django.db import models
from django.utils import timezone


class Position(models.Model):
    name = models.CharField("Должность", max_length=120, unique=True)
    is_active = models.BooleanField("Активна?", default=True)
    slug = models.SlugField(max_length=255, unique=True, db_index=True, verbose_name="URL")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Должность"
        verbose_name_plural = "Должности"


class Employee(models.Model):
    full_name = models.CharField("ФИО", max_length=120)
    contacts = models.CharField("Контакты", max_length=200)
    start_date = models.DateField("Дата начала работы", auto_now_add=True)  # auto_now_add=True
    position = models.ForeignKey(Position, on_delete=models.CASCADE,
                                 verbose_name="Должность", related_name="employees")
    salary = models.DecimalField("Оклад", max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return f"{self.full_name} {self.position}"

    class Meta:
        verbose_name = "Сотрудник"
        verbose_name_plural = "Сотрудники"