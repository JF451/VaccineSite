from geopy.geocoders import Nominatim
import re


address_file = open('Data.txt','r')

for line in address_file:
    #Get address from file
    #result = re.search(r"^.*?(?=\s*\(\d+\)\s\d+\-\d+)",line)

    result = re.search(r"^(.*? \d{5})", line, re.M)
    
    address = result.group(0)
    
    #Get Latitude and Longitude
    geolocator = Nominatim(user_agent="Justin Fulkerson")
    loc = geolocator.geocode(address)

    #Check if Address has right format
    if(loc == None):
        print("Address has wrong format!\n")
        continue

    #Add Long and Latude to end of line in file
    print("latitude is :-" ,loc.latitude,"\nlongtitude is:-" ,loc.longitude)
    
    