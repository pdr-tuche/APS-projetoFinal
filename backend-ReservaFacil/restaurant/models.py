from django.db import models

class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    manager = models.ForeignKey('user.User', on_delete=models.SET_NULL, null=True)
    reservations = models.IntegerField(default=1)


    def __str__(self):
        return f'{self.name} - {self.address}'