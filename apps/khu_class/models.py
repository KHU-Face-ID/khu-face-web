from django.db import models
from apps.user.models import Student

class Khuclass(models.Model):
    class_name = models.CharField(max_length=50)
    credit = models.IntegerField()
    students = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='students_in_class')

    def __str__(self):
        return self.class_name

    class Meta:
        db_table = 'khu_class'