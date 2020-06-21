from django.shortcuts import redirect, render
from .models import Professor, Student, Lecture
from .serializers import *
from django.contrib import auth
import json
from django.http.response import HttpResponse, JsonResponse
from django.contrib.auth.hashers import make_password, check_password
from django.views.generic import View
from django.core.serializers import serialize

from rest_framework.renderers import JSONRenderer
from rest_framework import generics, serializers
from rest_framework.response import Response

import request

class RegisterView(View):
    def get(self, request):
        return render(request, 'register.html')

    def post(self, request):
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        name = request.POST.get('name')
        department = request.POST.get('department')

        res_data={}
        if not(email and password and confirm_password and name and department):
            res_data['error']='모든 값을 입력해야합니다'
            try:
                Professor.objects.get(email=email)
                res_data['error']='이미 존재하는 이메일입니다'
            except:
                pass
        elif password != confirm_password:
            res_data['error']='비밀번호가 다름'
        else:
            prof = Professor(
                email=email,
                password=make_password(password),
                name=name,
                department=department,
                is_deleted=False
            )
            prof.save()
            res_data['error']='회원가입이 완료되었습니다'

        return render(request, 'register.html', res_data)

class LogInView(View):
    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        email = request.POST.get('email')
        password = request.POST.get('password')

        res_data={}
        if not (email and password):
            res_data['error']='모든 칸을 다 입력해주세요.'
        else:
            prof = Professor.objects.get(email=email)
            if check_password(password, prof.password):
                request.session['prof']=prof.id

                return redirect('/')
            else:
                res_data['error']='비밀번호가 틀렸습니다.'
        return render(request, 'login.html', res_data)

def home(request):
    prof_pk = request.session.get('prof')

    if prof_pk:
        prof=Professor.objects.get(pk=prof_pk)
        return HttpResponse(prof)
    return HttpResponse('로그인 성공')

def logout(request):
    if request.session['prof']:
        del request.session['prof']
    return redirect('/')

class FrameView(View):
    # def post(self, request):
    #     ip=request.POST.get('ip')
    #     URL='ip'+'/shot.jpg'
    #     data={'ip':URL}
    #     REQUEST_URL=''
    #     request.post(REQUEST_URL, data=data)

    def get(self, request, class_id):
        '''
        input=>화면에서 인식되는 학생들의 id, location
        front=>location의 위치에 boxing, box에 id 데이터 저장
        '''
        location_data=[
            {
                'id': '0', 
                'x1': 235.2441840171814, 
                'y1': 50.16988945007324, 
                'x2': 283.1888146996498, 
                'y2': 104.56735932826996
            },
            {
                'id': '1', 
                'x1': 105.24182361364365, 
                'y1': 195.83100248873234, 
                'x2': 143.543091237545, 
                'y2': 240.43386733531952
            },
        ]
        return JsonResponse({'frame': location_data}, status=200)

    def post(self, request, class_id):
        '''
        input=>사용자가 클릭한 위치의 좌표
        (example)
        request={
            0: {
                'id': 'DH', 
                'x1': 235.2441840171814, 
                'y1': 50.16988945007324, 
                'x2': 283.1888146996498, 
                'y2': 104.56735932826996
                }, 
            1: {
                'id': 'HS', 
                'x1': 105.24182361364365, 
                'y1': 195.83100248873234, 
                'x2': 143.543091237545, 
                'y2': 240.43386733531952
                }
        }
        
        output=>해당 위치에 있는 사용자의 정보
        '''

        # khuclass_name = Khuclass.objects.get(pk=class_id).class_name
        # students = Khuclass.objects.values('class_name', 'students')

        # student_in_class = []
        # for student in students:
        #     if student['class_name']==khuclass_name:
        #         student_in_class.append(student['students'])

        student = Student.objects.get(pk=request.POST.get('id'))
        student_json = StudentSerialzer(student).data
        return JsonResponse(student_json)

class LectureListView(generics.ListAPIView):
    queryset = Lecture.objects.all()
    serializer_class = LectureSerializer

    def list(self, request):
        queryset = self.get_queryset()
        serializer_class = self.get_serializer_class()
        serializer = serializer_class(queryset, many=True)

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        return Response(serializer.data)

def camera(request):
    return render(request, "camera.html")

class LectureIPView(generics.GenericAPIView):
    def get(self, request, class_id):
        lecture = Lecture.objects.get(pk=class_id)
        
    def post(self, request, class_id):
        lecture = Lecture.objects.get(pk=class_id)