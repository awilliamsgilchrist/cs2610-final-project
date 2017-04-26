from django.shortcuts import render, get_object_or_404

from models import Message

# Create your views here.
def index(request):
    return render(request, "messenger/index.html")
    
def submit(request):
    recipient = request.POST.get("recipient")
    msg = request.POST.get("msg")
    m = Message(encryptedText = msg, destination = recipient)
    m.save()
    
    return render(request, "messenger/submit.html")

def msgDisplay(request, msg_id):
    message = get_object_or_404(Message, pk=msg_id)
    content = message.encryptedText
    message.delete()
    return render(request, "messenger/display.html", {'content' : content})