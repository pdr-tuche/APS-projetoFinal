from rest_framework import viewsets
from .models import Schedule
from .serializers import ScheduleSerializer
from rest_framework.response import Response
from rest_framework import status
from restaurant.models import Restaurant

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

    def create(self, request, *args, **kwargs):
        # Obter os dados da solicitação
        data = request.data
        restaurant_id = data.get('restaurant', None)
        
        # Verificar se há capacidade disponível para fazer a reserva
        if restaurant_id:
            restaurant = Restaurant.objects.get(pk=restaurant_id)
            if restaurant.reservations <= 0:
                return Response({'error': 'Não há mais reservas disponíveis para este restaurante.'}, status=status.HTTP_400_BAD_REQUEST)
            restaurant.reservations -=1
            restaurant.save()
        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        restaurant = instance.restaurant
        response = super().destroy(request, *args, **kwargs)
        # Aumentar a quantidade de reservas do restaurante após a exclusão
        restaurant.reservations += 1
        restaurant.save()
        return response