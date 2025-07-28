from django.db import models

class ComparisonHistory(models.Model):
    file1 = models.FileField(upload_to="uploads/", null=True, blank=True)
    file2 = models.FileField(upload_to="uploads/", null=True, blank=True)
    file1_name = models.CharField(max_length=255)
    file2_name = models.CharField(max_length=255)
    summary = models.JSONField()
    diff = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.file1_name} vs {self.file2_name} ({self.created_at})"
