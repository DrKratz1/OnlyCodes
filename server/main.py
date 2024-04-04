from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('localhost',)

db = client.flask_db


@app.route("tasks/")
def index():
    return "hello"