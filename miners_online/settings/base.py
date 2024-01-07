# flake8: noqa
"""
For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

import os

from basxbread.settings.required import *

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)

SECRET_KEY = "django-insecure-rp-6eq90gln7+0lgd^z4pkop=a=mutc1yo(n(@6%0y&b!4*+r_"

ALLOWED_HOSTS = ['127.0.0.1', '.vercel.app', 'minersonline.uk']

# Application definition

INSTALLED_APPS = [
    # custom apps
    "django.contrib.admin",
    "website",
    "basxconnect.invoicing",
    "basxconnect.projects",
    "basxconnect.core",
    "basxbread.contrib.reports",
    "basxbread.contrib.publicurls",
    "basxbread.contrib.document_templates",
    "basxbread.contrib.customforms",
    "basxbread.contrib.triggers",
] + BASXBREAD_DEPENDENCIES

ROOT_URLCONF = "miners_online.urls"

WSGI_APPLICATION = "wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": os.path.join(BASE_DIR, "db.sqlite3"),
    }
}

HAYSTACK_CONNECTIONS = {
    "default": {
        "ENGINE": "haystack.backends.whoosh_backend.WhooshEngine",
        "PATH": os.path.join(BASE_DIR, "woosh_index"),
    },
}

STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATIC_URL = "/static/"

MEDIA_ROOT = os.path.join(BASE_DIR, "media")
MEDIA_URL = "/media/"
