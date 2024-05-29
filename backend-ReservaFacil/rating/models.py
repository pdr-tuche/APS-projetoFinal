from django.db import models

class Rating(models.Model):
    rating = models.IntegerField(default=0)
    restaurant = models.ForeignKey('restaurant.Restaurant', related_name='ratings', on_delete=models.CASCADE)
    user = models.ForeignKey('user.User', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.rating} - {self.restaurant.name} - {self.user.name}'