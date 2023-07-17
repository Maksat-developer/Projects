FROM python:3.9
ENV PYTHONUNBUFFERED 1 
WORKDIR /app

COPY req.txt /app/

RUN pip install --no-cache-dir -r req.txt 

COPY . /app/

