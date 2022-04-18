from django.urls import path
from .views import property_list, property_detail, MyTokenObtainPairView, get_user_profile
urlpatterns = [
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', get_user_profile, name = 'userprofile'),
    path('properties/', property_list, name = 'properties'),
    path('properties/<str:pk>/', property_detail, name = 'property'),
]
 