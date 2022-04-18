
from rest_framework import serializers
from .models import Property, Image
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken







class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields =  ['id', 'username', 'email', 'name', 'isAdmin']
    
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name
    def get_isAdmin(self, obj):
        return obj.is_staff
    




class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User,
        fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)





class PropertyImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Image
        fields = ('image',)





class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(source='image_set', many=True, read_only=True)
    
    class Meta:
        model = Property
        fields = '__all__'
    def create(self, validated_data):
        images_data = validated_data.pop('images')
        task = Property.objects.create(**validated_data)
        for image_data in images_data:
            Image.objects.create(task=task, **image_data)
        return task
        