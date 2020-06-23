from django.conf.urls import url
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home),
    path('login/', views.LogInView.as_view(), name='login'),
    path('logout/',views.logout),
    path('register/', views.RegisterView.as_view(), name='register'),

    path('dashboard/', views.LectureListView.as_view(), name='class'),
    path('dashboard/lecture/<int:class_id>/', views.LectureView.as_view(), name='class_view'),
    path('dashboard/lecture/<int:class_id>/students/', views.LectureStudentListView.as_view(), name='lecture_student_list_view'),
    path('dashboard/lecture/<int:class_id>/<int:student_id>/', views.StudentView.as_view(), name='student_view'),
    url(r'^dashboard/$', views.LectureListView.as_view(), name='dashboard')
]