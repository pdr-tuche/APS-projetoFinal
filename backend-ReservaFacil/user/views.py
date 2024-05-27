from user.models import User
from .serializers import CustomTokenObtainPairSerializer, UserCreateSerializer, UserSerializer, UserUpdateSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response

from rest_framework import viewsets

class UserCreateViewSet(viewsets.ModelViewSet):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()

    def get_serializer_class(self):
        if self.action == 'update':
            print('caiu aqui')
            return UserUpdateSerializer
        elif self.action == 'list' or self.action == 'retrieve':
            return UserSerializer
        return self.serializer_class
    
    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
