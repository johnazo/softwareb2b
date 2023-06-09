# Generated by Django 4.2.1 on 2023-05-09 03:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_module_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
            ],
        ),
        migrations.AddField(
            model_name='module',
            name='application',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, related_name='modules', to='api.application'),
        ),
    ]
