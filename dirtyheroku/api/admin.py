from django.contrib import admin

# Register your models here.
from .models import Categoria,Tattoo

admin.site.register(Categoria)
admin.site.register(Tattoo)