from re import search
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter
from rest_framework.response import Response
from rest_framework import filters
from .serializers import BranchesSerialize
from .models import Branches


class FieldsApi(viewsets.ModelViewSet):
    queryset = Branches.objects.prefetch_related(
        'bank').all().order_by('ifsc')
    serializer_class = BranchesSerialize
    filter_backends = [SearchFilter]
    search_fields = ['ifsc', 'bank__id', 'branch',
                     'address', 'city', 'district', 'state']

    @action(detail=False, methods=['get'], filter_backends=[SearchFilter], search_fields=['branch'])
    def autocomplete(self, request):
        queryset = Branches.objects.prefetch_related(
            'bank').all().order_by('ifsc')
        queryset = self.filter_queryset(queryset)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
