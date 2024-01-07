from basxbread.utils import quickregister
from . import models

urlpatterns = []
quickregister(urlpatterns, models.Page)
