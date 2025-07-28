from rest_framework import serializers
from .models import ComparisonHistory


class ComparisonHistorySerializer(serializers.ModelSerializer):
    file1_url = serializers.SerializerMethodField()
    file2_url = serializers.SerializerMethodField()

    class Meta:
        model = ComparisonHistory
        fields = "__all__"

    def get_file1_url(self, obj):
        request = self.context.get("request")
        if obj.file1 and hasattr(obj.file1, "url"):
            return request.build_absolute_uri(obj.file1.url)
        return None

    def get_file2_url(self, obj):
        request = self.context.get("request")
        if obj.file2 and hasattr(obj.file2, "url"):
            return request.build_absolute_uri(obj.file2.url)
        return None

class ChangeSerializer(serializers.Serializer):
    location = serializers.CharField()
    old_value = serializers.CharField()
    new_value = serializers.CharField()
    row = serializers.IntegerField()


class DiffSerializer(serializers.Serializer):
    changes = ChangeSerializer(many=True)


class SummarySerializer(serializers.Serializer):
    added = serializers.IntegerField()
    removed = serializers.IntegerField()
    changed = serializers.IntegerField()


class CompareResponseSerializer(serializers.Serializer):
    summary = SummarySerializer()
    diff = DiffSerializer()
