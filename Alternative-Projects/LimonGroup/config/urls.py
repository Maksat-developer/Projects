
from django.contrib import admin
from django.urls import path, include, re_path

from django.conf import settings
from django.conf.urls.static import static

from djoser import views
from .yasg import urlpatterns_yasg as swagger_urls

urlpatterns = [
    path('admin/', admin.site.urls),

    path('accounts/', include("accounts.urls")),

    # path('client/', include("client.urls")),
    # path('employees/', include("employees.urls")),
    path('', include("factory.urls")),
    # path('users/', include("accounts.urls")),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += swagger_urls

if settings.DEBUG:
    urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
