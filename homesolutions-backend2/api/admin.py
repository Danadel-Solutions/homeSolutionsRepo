from pyexpat import model
from django.contrib import admin
from .models import Image, Property
# Register your models here.
class ImageInline(admin.TabularInline):
    model = Image

class PropertyAdmin(admin.ModelAdmin):
    inlines = [
        ImageInline,
    ]

admin.site.register(Property, PropertyAdmin)
admin.site.register(Image)

