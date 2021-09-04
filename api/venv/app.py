import time
from flask import Flask,request

app = Flask(__name__)

@app.route('/',methods=['POST'])
def get_current_time():
    variable = request.json["variable"]
    return {"variable": 'This is the backend -->' + variable}