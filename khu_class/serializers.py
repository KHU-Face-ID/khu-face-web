from rest_framework import serializers
from khu_class.models import Student, Professor, Khuclass

class StudentSerialzer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=20)
    department = serializers.CharField(max_length=30)
    student_num = serializers.CharField(max_length=30)
    
    class StudentSerializer(serializers.Serializer):
        class Meta:
            model = Student
            fields = ['id','name','department','student_num']

class ProfessorSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=20)
    department = serializers.CharField(max_length=30)

    class ProfessorSerializer(serializers.Serializer):
        class Meta:
            model = Professor
            fields = ['id','name','department']

class KhuclassSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    class_name = serializers.CharField(max_length=50)
    credit = serializers.IntegerField()

    class KhuclassSerializer(serializers.Serializer):
        class Meta:
            model = Khuclass
            fields = ['id','class_name','credit','students']