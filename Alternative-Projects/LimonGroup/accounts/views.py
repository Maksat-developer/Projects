from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm


def register(request):
    form = UserCreationForm()
    return render(request, 'accounts/register.html', {"form": form})



def login(request):
    return render(request, 'accounts/login.html')
