from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path('login/', views.LogInView.as_view(), name='login'),
    path('logout/',views.logout),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('dashboard/<int:class_id>/frame/', views.FrameView.as_view(), name='get_frame'),
    url(r'^dashboard/$', views.ClassListView.as_view(), name='dashboard'),
    path('camera/', views.camera, name='camera')
]