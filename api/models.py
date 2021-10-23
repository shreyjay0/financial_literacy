import uuid
from django.db import models

class Article(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    content = models.TextField()
    datetime_created = models.DateTimeField(auto_now_add=True)