# Generated by Django 3.0.5 on 2020-06-19 11:01

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('khu_class', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecture',
            name='frame',
            field=jsonfield.fields.JSONField(default=dict),
        ),
        migrations.AlterField(
            model_name='lecture',
            name='ip',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
