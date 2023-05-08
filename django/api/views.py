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

        lookup = data['sessionInfo']['parameters']['module']['original']
        logging.info(lookup)

        instance = self.get_queryset().filter(name=lookup).first()
        serializer = self.get_serializer(instance)
        # result = {
        #     'fulfillment': {
        #         'messages': [
        #             {
        #             'text': instance.url
        #             }
        #             ]
        #     },
        #     'payload': serializer.data
        #     }
        result = {
                "sessionInfo": {
                    "parameters": {
                        "instance": serializer.data,
                        "url": serializer.data["url"]
                    },
                },
        }
        logging.info(result)
        return Response(result)


