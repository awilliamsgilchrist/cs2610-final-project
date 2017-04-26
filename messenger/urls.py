from django.conf.urls import url
from . import views


app_name = 'messenger'
urlpatterns=[
    url(r'^$', views.index, name='index'),
    url(r'^submit/$', views.submit, name='submit'),
    url(r'^(?P<msg_id>[0-9]+)/$', views.msgDisplay, name='display'),
    ]