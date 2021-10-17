from rest_framework import serializers

from .models import Categoria,Tattoo

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'


    

class TattooSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tattoo
        fields = '__all__'

    def to_representation(self,instance):
        representation = super().to_representation(instance)
        representation['tattoo_img'] = instance.tattoo_img.url
        return representation

      

class CategoriaTattoosSerializer(serializers.ModelSerializer):
    Tattoos = TattooSerializer(many=True,read_only=True)
    class Meta:
        model = Categoria
        fields = ['categoria_id','categoria_nom','Tattoos']
   