from django.urls import path
from . import views
from factory.views import *



urlpatterns = [
    path('', index, name='index'),
    path('charts/', charts, name='charts'),
    path('about/', about, name='about'),
]




