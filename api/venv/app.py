from geopy.geocoders import Nominatim
import re
from flask import Flask,request, jsonify,current_app
from flask_cors import CORS
import json

app = Flask(__name__)


@app.route('/get',methods=['GET'])
def testGet():
        return {
            'name': 'Hello World'
        }

"""
@app.route('/post',methods=['POST'])
def testPost1():
    if not request.json:
        return "not a json post"
    return "json post succeeded"
"""

def computeLatLong(address):
    geolocator = Nominatim(user_agent="Justin Fulkerson")
    loc = geolocator.geocode(address)
    if(loc == None):
        return None
    else:
        return loc
    

@app.route('/post',methods=['POST'])
def testPost():
    address = request.json["address"]
    city = request.json["city"]
    state = request.json["state"]
    zipCode = request.json["zip"]

    strAddress = json.dumps(address)
    strCity = json.dumps(city)
    strState = json.dumps(state)
    strZipCode = json.dumps(zipCode)

    fullAddress = strAddress + strCity + strState + strZipCode


    fullAddress = " ".join([strAddress,strCity,strState,strZipCode])


    latlong = computeLatLong(fullAddress)


    print("latitude is :-" ,latlong.latitude,"\nlongtitude is:-" ,latlong.longitude)
    return jsonify(address=address)



cors = CORS(app, resources={'/*':{'origins': 'http://localhost:3000'}}) 

if __name__ == "__main__":
    app.run()


    
    