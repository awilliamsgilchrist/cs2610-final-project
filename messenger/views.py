from django.shortcuts import render, get_object_or_404
from django.core.mail import send_mail

from models import Message

# Create your views here.
def index(request):
    return render(request, "messenger/index.html")
    
def submit(request):
    recipient = request.POST.get("recipient")
    msg = request.POST.get("msg")
    m = Message(encryptedText = msg, destination = recipient)
    m.save()
    #send_mail("DO NOT REPLY, VERY SECRET MESSAGE",
    #"You have been sent a secret message. You may view the message once before it deletes itself. Be certain you know the decryption key befor viewing.\nMessage may be viewed at: https://django-final-awilliamsgilchrist.c9users.io/" + str(m.id),
    #"djangosecretmessenger@yahoo.com",
    #[m.destination]
    #)
    
    return render(request, "messenger/submit.html", {'message' : m})

def msgDisplay(request, msg_id):
    message = get_object_or_404(Message, pk=msg_id)
    content = message.encryptedText
    message.delete()
    return render(request, "messenger/display.html", {'content' : content})
    
def error404(request):
    return render(request, "messenger/404.html")