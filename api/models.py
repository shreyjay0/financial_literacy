import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    content = models.TextField()
    datetime_created = models.DateTimeField(auto_now_add=True)
    users_bookmarked = models.ManyToManyField(User, related_name='articles_bookmarked', blank=True)
    users_liked = models.ManyToManyField(User, related_name='articles_liked', blank=True)