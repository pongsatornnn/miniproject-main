# Generated by Django 5.0.6 on 2024-09-15 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myweb', '0003_author_bg_alter_author_img_alter_song_img'),
    ]

    operations = [
        migrations.AddField(
            model_name='song',
            name='link',
            field=models.CharField(default='', max_length=200),
        ),
    ]
