from django.db import models
from apps.khu_class.models import Khuclass

# Create your models here.
class User(models.Model):
    email = models.CharField(max_length=100, primary_key=True)
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=20)
    department = models.CharField(max_length=30)
    
    is_deleted = models.BooleanField()
    
    def __str__(self):
        return self.name

    class Meta:
        abstract = True

class Professor(User):
    classes = models.ForeignKey(Khuclass, on_delete=models.CASCADE, related_name='classes')
    class Meta:
        db_table = 'professor'

class Student(User):
    student_num = models.CharField(max_length=30)
    
    class Meta:
        db_table = 'student'
