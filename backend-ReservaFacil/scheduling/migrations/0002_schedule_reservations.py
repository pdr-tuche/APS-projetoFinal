# Generated by Django 5.0.6 on 2024-05-28 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scheduling', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='schedule',
            name='reservations',
            field=models.IntegerField(default=1),
        ),
    ]
