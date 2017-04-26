from django.shortcuts import render, get_object_or_404

from models import Message

# Create your views here.
def index(request):
    return render(request, "messenger/index.html")
    
def submit(request):
    return render(request, "messenger/submit.html")