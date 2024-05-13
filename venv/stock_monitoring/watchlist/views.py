# watchlist/views.py

from rest_framework import generics
from .models import Watchlist
from .serializers import WatchlistSerializer

class WatchlistListCreateAPIView(generics.ListCreateAPIView):
    queryset = Watchlist.objects.all()
    serializer_class = WatchlistSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

