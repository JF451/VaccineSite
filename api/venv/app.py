from geopy.geocoders import Nominatim
import re
from flask import Flask,request, jsonify,current_app
from flask_cors import CORS

app = Flask(__name__)

@app.route('/get',methods=['GET'])
def testGet():
        return {
            'name': 'Hello World'
        }

@app.route('/post',methods=['POST'])
def testPost():
    name = request.json.get('name')
    current_app.logger.debug(name)
    return jsonify(name=name)

cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}}) 

if __name__ == "__main__":
    app.run()


    
    