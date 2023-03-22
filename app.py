#from requests import get
import requests
from functions import sumar
import datetime


resp = requests.get('https://jsonplaceholder.typicode.com/users')

data = resp.json()

for user in data:
    print(user['name'])
    
print(datetime.datetime.now())

print(sumar(10, 10))