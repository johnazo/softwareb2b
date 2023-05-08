from django import views
from django.http import response
from django.shortcuts import render


def home(request, path=None):
    return render(request, 'index.html', {'path': path})

class HomeView(views.View):
    def get(self, request):
        return response('Hi')
