from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import RatingSerializer
from .models import Rating
from rest_framework.decorators import action



class RatingViewSet(viewsets.ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


class RatingRestaurantViewSet(viewsets.ViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()

    def retrieve(self, request, pk=None):
        queryset = Rating.objects.filter(restaurant_id=pk)
        serializer = RatingSerializer(queryset, many=True)
        return Response(serializer.data)