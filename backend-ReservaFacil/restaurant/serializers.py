from rest_framework import serializers

from .models import Restaurant
from rating.models import Rating
from rating.serializers import RatingSerializer

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'description', 'address', 'reservations', 'manager']
