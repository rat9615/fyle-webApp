from BankApi.viewsets import FieldsApi
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'branches', FieldsApi)
