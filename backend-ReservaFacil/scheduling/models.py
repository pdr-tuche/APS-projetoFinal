from django.db import models
from datetime import date
from django.conf import settings
from django.core.exceptions import ValidationError


def validate_day(value):
    today = date.today()
    weekday = date.fromisoformat(f'{value}').weekday()

    if value < today:
        raise ValidationError('Não é possivel escolher um data atrasada.')
    if (weekday == 5) or (weekday == 6):
        raise ValidationError('Escolha um dia útil da semana.')


class Schedule(models.Model):
    restaurant = models.ForeignKey('restaurant.Restaurant', on_delete=models.CASCADE)
    day = models.DateField(validators=[validate_day])
    start_time = models.TimeField()
    end_time = models.TimeField()

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        verbose_name=('Cliente'),
        on_delete=models.CASCADE
    )

    class Meta:
        unique_together = ('start_time', 'end_time', 'day')

    def __str__(self):
        return f'{self.day.strftime("%b %d %Y")} - {self.start_time} às {self.end_time} - {self.restaurant.name}'