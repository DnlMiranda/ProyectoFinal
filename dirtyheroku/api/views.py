from rest_framework.views import APIView
from rest_framework.response import Response

#importar modelos

from .models import Categoria,Tattoo

#importar serializers
from .serializers import CategoriaSerializer, TattooSerializer, CategoriaTattoosSerializer

class IndexView(APIView):

    def get(self,request):
        context = {"ok":True,"message":"El servidor estra activo!"}
        return Response(context)

class CategoriaApiView(APIView):
    
    def get(self,request):
        dataCategoria = Categoria.objects.all()
        serializer = CategoriaSerializer(dataCategoria,many=True)
        return Response(serializer.data)

class TattooApiView(APIView):

    def get(self,request):
        dataTattoo = Tattoo.objects.all()
        serializer = TattooSerializer(dataTattoo,many=True)
        return Response(serializer.data)

class CategoriaTattoosApiView(APIView):

    def get(self,request,categoria_id):
        dataCategoria = Categoria.objects.get(categoria_id=categoria_id)
        serializers = CategoriaTattoosSerializer(dataCategoria)
        return Response(serializers.data)