#import imp
import os
import sys


#sys.path.insert(0, os.path.dirname(__file__))

#wsgi = imp.load_source('wsgi', 'passenger_wsgi.py')
#application = wsgi.application

from django.core.wsgi import get_wsgi_application

#cwd = os.getcwd()
sys.path.append('/home/johncruz/chatbot/softwareb2b')

#os.environ['DJANGO_SETTINGS_MODULE'] = "softwareb2b.settings"
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'softwareb2b.settings')

application = get_wsgi_application()
