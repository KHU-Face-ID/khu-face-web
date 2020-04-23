# Generated by Django 3.0.5 on 2020-04-23 12:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Class',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('class_name', models.CharField(max_length=50)),
                ('credit', models.IntegerField()),
                ('students', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='students_in_class', to='user.Student')),
            ],
        ),
    ]