from django.db import models

from cloudinary.models import CloudinaryField

# Create your models here.
class Categoria(models.Model):
    categoria_id = models.AutoField(primary_key=True)
    categoria_nom = models.CharField(max_length=100,verbose_name="nombre")

    def __str__(self):
        return self.categoria_nom

class Tattoo(models.Model):
    tattoo_id = models.AutoField(primary_key=True)
    tattoo_nom = models.CharField(max_length=100)
    tattoo_img = CloudinaryField('image',default='')
    categoria_id = models.ForeignKey(Categoria,related_name='Tattoos',
                                             to_field = "categoria_id",on_delete=models.RESTRICT,db_column='categoria_id',verbose_name="Categoria")
    
    def __str__(self):
        return self.tattoo_nom