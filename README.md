# Project Description

Basic example for combining react for frontend and django for backend build with docker.

# Setup

```
python3 -m venv venv
source venv/bin/actviate
pip install --upgrade pip
pip install django
pip install djangorestframework
pip install django-environ
pip install django-cors-headers
```

# Technologies

- django-environ for secret data and environment variables
- django web framework combined with django-rest api for backend
- combined with rest framework for frontend
- docker and docker-compose

# Commands

```
python manage.py check
python manange.py runserver
open http://localhost:3000/ in browser (or http://127.0.0.1:3000/ ?)
```

# Literature

- https://www.honeybadger.io/blog/docker-django-react/
- https://github.com/khabdrick/django-react-docker-sample

# React

Create fresh React application:

```
npx create-react-app frontend
```

# Docker

```
open -a docker
docker-compose build
docker-compose up
```

Testing docker container (adding `ENTRYPOINT [ "/bin/bash"]` to api/Dockerfile)

```
docker build -f api/Dockerfile -t test .
docker run -it test
```
