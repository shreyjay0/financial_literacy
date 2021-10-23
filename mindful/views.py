from django.shortcuts import render
from django.http import HttpResponse

def index_view(request):
    return render(request, 'build/index.html')
    # return HttpResponse("This is the beginning of Mindful, a platform to build healthy financial habits and develop financial literacy.")