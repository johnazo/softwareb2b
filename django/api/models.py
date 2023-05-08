from django.db import models

class Module(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    url = models.URLField(null=False)

