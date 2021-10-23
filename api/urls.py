from django.contrib import admin
from django.urls import path, include
from .views import ArticleList, ArticleView

urlpatterns = [
    path('sellers/', ArticleList.as_view()),
    path('sellers/<str:pk>', ArticleView.as_view()),
]