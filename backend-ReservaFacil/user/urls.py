from rest_framework import routers
from .views import UserCreateViewSet

router = routers.DefaultRouter()
router.register(r'', UserCreateViewSet)

urlpatterns = router.urls
