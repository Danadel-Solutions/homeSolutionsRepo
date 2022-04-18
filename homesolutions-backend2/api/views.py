from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import PropertySerializer, UserSerializer, UserSerializerWithToken
from .models import Property
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# Create your views here.
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
      def validate(self, attrs):
            data = super().validate(attrs)

            serializer = UserSerializerWithToken(self.user).data
            for key, value in serializer.items():
                data[key]=value
            # data['username'] = self.user.username
            # data['email'] = self.user.email
            


            return data




class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def get_user_profile(request):
    user = request.user
    serializer = UserSerializer(user, many = False)
    return Response(serializer.data)

@api_view(['GET'])
def property_list(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def property_detail(request, pk):
    property = Property.objects.get(id=pk)
    serializer = PropertySerializer(property, many = False)
    return Response(serializer.data)