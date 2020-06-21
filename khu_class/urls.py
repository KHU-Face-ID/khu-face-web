from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path('login/', views.LogInView.as_view(), name='login'),
    path('logout/',views.logout),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('dashboard/', views.LectureListView.as_view(), name='class'),
    path('dashboard/<int:class_id>/ip/', views.LectureIPView.as_view(), name='class_ip'),
    # path('dashboard/<int:class_id>/', views.ClassView.as_view(), name='class_view'),
    path('dashboard/<int:class_id>/frame/', views.FrameView.as_view(), name='get_frame'),
    url(r'^dashboard/$', views.LectureListView.as_view(), name='dashboard'),
    path('camera/', views.camera, name='camera')
]