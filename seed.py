import requests
import json

url = 'https://college-connect-backend-0x0i.onrender.com/course/'

with open("output.json", "r") as f:  # Replace with the actual file name
    data = json.load(f)


for d in data:
    response = requests.post(url, json=d)
    response.raise_for_status()
print("Data successfully posted to the API.")