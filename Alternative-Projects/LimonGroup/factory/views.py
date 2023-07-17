from django.shortcuts import render


def error_401(request):
    return render(request, template_name='factory/error_401.html')


def error_404(request):
    return render(request, template_name='factory/error_404.html')


def error_500(request):
    return render(request, template_name='factory/error_500.html')


def charts(request):
    return render(request, template_name='factory/charts.html')


def index(request):
    return render(request, template_name='factory/index.html')

def about(request):       
    return render(request, template_name='factory/about.html')


def layout_sidenav_light(request):
    return render(request, template_name='factory/layout_sidenav_light.html')


def layout_static(request):
    return render(request, template_name='factory/layout_static.html')


def tables(request):
    return render(request, template_name='factory/tables.html')
