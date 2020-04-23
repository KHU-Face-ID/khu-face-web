from django.db import models
from apps.user.models import Student

class Class(models.Model):
    class_name = models.CharField(max_length=50)
    credit = models.IntegerField()
    students = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='students_in_class')