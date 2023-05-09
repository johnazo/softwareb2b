# Generated by Django 4.2.1 on 2023-05-09 03:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_application_module_application'),
    ]

    operations = [
        migrations.AlterField(
            model_name='module',
            name='application',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='modules', to='api.application'),
        ),
    ]
