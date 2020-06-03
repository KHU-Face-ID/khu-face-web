from django.db import models
import jsonfield

class User(models.Model):
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    name = models.CharField(max_length=20)
    department = models.CharField(max_length=30)
    
    is_deleted = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name

    class Meta:
        abstract = True

#Student
class Student(User):
    student_num = models.CharField(max_length=30)

#Class
class Khuclass(models.Model):
    class_name = models.CharField(max_length=50)
    credit = models.IntegerField()
    students = models.ManyToManyField('Student', blank=True)

    def __str__(self):
        return self.class_name


#Professor
class Professor(User):
    classes = models.ManyToManyField('Khuclass', blank=True)

#TODO
class Score(models.Model):
    class_name = models.ForeignKey(Khuclass, on_delete=models.CASCADE)
    key = models.CharField(max_length=240)
    value = jsonfield.JSONField()