from django.contrib import admin
from django.urls import path, include
from .views import UserView, ArticleList, ArticleView

urlpatterns = [
    path('users/<str:pk>', UserView.as_view()),
    path('sellers/', ArticleList.as_view()),
    path('sellers/<str:pk>', ArticleView.as_view()),
]