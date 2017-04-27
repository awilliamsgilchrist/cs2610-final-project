from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Message(models.Model):
    encryptedText = models.CharField(max_length = 10000)
    #encryptionKey = models.CharField(max_length = 10)
    destination = models.EmailField(max_length = 256)
    
    def __str__(self):
        return "Message to " + self.destination
    