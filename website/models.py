from django.db import models

class Page(models.Model):
    title = models.CharField(max_length=1000)
    body = models.TextField()
    creator = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="pages")
    modified = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Page"
        verbose_name_plural = "Pages"
        ordering = ["modified"]
