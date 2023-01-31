FROM python:3.9

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install --upgrade pip
RUN pip install django
RUN pip install djangorestframework
RUN pip install django-environ
RUN pip install django-cors-headers

COPY . . 
EXPOSE 8000