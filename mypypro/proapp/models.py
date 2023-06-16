from django.db import models

class Pro(models.Model):
    titles = models.CharField(max_length=120)
    price = models.DecimalField(decimal_places=2,max_digits=120, default=0)
