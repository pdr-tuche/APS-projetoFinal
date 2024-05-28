from rest_framework import routers
from .views import RatingViewSet, RatingRestaurantViewSet

router = routers.DefaultRouter()
router.register(r'', RatingViewSet)
router.register('restaurant', RatingRestaurantViewSet, basename='rating-restaurant')


urlpatterns = router.urls
