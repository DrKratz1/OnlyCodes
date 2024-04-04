from flask import Flask, render_template, url_for
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('localhost',)

db = client.flask_db


@app.route("/")
def index():
    """Index/Default page, listing the tasks"""
    return render_template("index.html")


@app.route("tasks/<int:id>", method=['GET', 'POST'])
def task_info(id):
    """Redirect into the page for detailed information about task"""
    return "hello"

@app.route("tasks/add", method=['GET', 'POST'])
def add():
    """Add tasks"""
    return "hello"


@app.route("tasks/summary")
def summary():
    """Summary Page"""
    return "hello"