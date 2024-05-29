from django.urls import path, include
from rest_framework import routers
from .views import ScheduleViewSet

router = routers.DefaultRouter()
router.register(r'', ScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
