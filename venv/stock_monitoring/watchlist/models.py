# models.py

from django.db import models

class WatchlistItem(models.Model):
    symbol = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.symbol
