from django.urls import path
from . import views

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('categoria',views.CategoriaApiView.as_view(),name='categoria'),
    path('tattoo',views.TattooApiView.as_view(),name='tattoo'),
    path('categoria/<int:categoria_id>/tattoos',views.CategoriaTattoosApiView.as_view(),name='CategoriaTattoo')
]