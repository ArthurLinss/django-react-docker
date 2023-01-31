FROM python:3.9

ENV PYTHONUNBUFFERED=1

ENV DockerHOME=/code 

RUN pip install --upgrade pip
RUN pip install django
RUN pip install djangorestframework
RUN pip install django-environ
RUN pip install django-cors-headers

WORKDIR ${DockerHOME}
COPY . ${DockerHOME} 
EXPOSE 8000

#ENTRYPOINT [ "/bin/bash"]