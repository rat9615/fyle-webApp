from rest_framework import serializers
from .models import Branches, Banks


class BankSerialize(serializers.ModelSerializer):
    class Meta:
        model = Banks
        fields = '__all__'


class BranchesSerialize(serializers.ModelSerializer):
    bank = BankSerialize()

    class Meta:
        model = Branches
        fields = '__all__'
