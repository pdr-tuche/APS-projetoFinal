# Generated by Django 5.0.6 on 2024-05-28 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_user_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.CharField(choices=[('Admin', 'Admin'), ('Restaurante', 'Restaurante'), ('Cliente', 'Cliente')], default='Cliente', max_length=25),
        ),
    ]
