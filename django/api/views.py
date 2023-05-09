from rest_framework import status
from rest_framework.generics import RetrieveAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import Module
from .serializers import ModuleSerializer
import logging
import json

from rest_framework.request import Request

class ModuleDetail(RetrieveAPIView):
    logging.basicConfig(filename='django-logging.log', filemode='a', encoding='utf-8', force=True,
                            format='%(asctime)s - %(message)s', level=logging.INFO)
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer
    lookup_field = 'name'

    def get(self, request, *args, **kwargs):
        logging.info(request.__str__())
        logging.info(args)
        logging.info(kwargs)
        return super().get(request, args, kwargs)


class ModuleCreate(CreateAPIView):
    logging.basicConfig(filename='django-logging.log', filemode='a', encoding='utf-8', force=True,
                            format='%(asctime)s - %(message)s', level=logging.INFO)
    queryset = Module.objects.all()
    serializer_class = ModuleSerializer

    def retrieve(self, request, *args, **kwargs):
        logging.info(request.__str__())
        logging.info(args)
        logging.info(kwargs)
        return super().retrieve(request, args, kwargs)

    def post(self, request, *args, **kwargs):
        logging.info(request.__str__())

        data = request.body.decode().replace("'", '"').replace("True", "1")
        data = json.loads(data)
        logging.info(data)
        # print(data)

        server_status = False
        server_message = "No se encontró información al respecto."

        lookup_application = data['sessionInfo']['parameters']['application']['original'] if 'application' in data['sessionInfo']['parameters'] else None
        lookup_module = data['sessionInfo']['parameters']['module']['original'] if 'module' in data['sessionInfo']['parameters'] else None
        logging.info(lookup_application, lookup_module)

        if lookup_application is None or lookup_module is None:
            result = {
                    "sessionInfo": {
                        "parameters": {
                            "instance": None,
                            "url": None,
                            "server_message": server_message,
                            "server_status": server_status
                        },
                    },
            }
        else:
            server_status = False
            server_message = server_message + " Buscando por aplicación: %s y módulo: %s" %(lookup_application, lookup_module)
            instance = self.get_queryset().filter(name__icontains=lookup_module,
                                                application__name__icontains=lookup_application).first()
            serializer = self.get_serializer(instance)

            if instance is not None:
                server_message = 'Bueno. Esta es la URL para el módulo %s de la aplicación %s' %(lookup_module, lookup_application)
                server_status = True


            result = {
                    "sessionInfo": {
                        "parameters": {
                            "instance": serializer.data,
                            "url": serializer.data["url"],
                            "server_message": server_message,
                            "server_status": server_status
                        },
                    },
            }
        logging.info(result)
        return Response(result)


