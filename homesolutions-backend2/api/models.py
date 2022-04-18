from email.policy import default
from pyexpat import model
import uuid
from django.db import models
from django.utils.text import slugify

# Create your models here.
class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    
    name = models.CharField(max_length=200, null = True, blank = True)
    description = models.TextField(blank = True, null = True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank = True, null = True)
    location = models.CharField(max_length=200, null = True, blank = True)
    
    class Meta:
        verbose_name_plural = 'Properties'
    def __str__(self):
        return self.name

class Image(models.Model):
    
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    image = models.ImageField()
    default = models.BooleanField(default = False)
    def __str__(self):
        return str(self.image)
