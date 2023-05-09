from django.db import models


class Application(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)


class Module(models.Model):
    name = models.CharField(max_length=50, null=False, unique=True)
    url = models.URLField(null=False)
    application = models.ForeignKey(Application,
                                on_delete=models.CASCADE,
                                null=True,
                                related_name='modules')
