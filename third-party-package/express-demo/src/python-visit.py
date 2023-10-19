import requests
url='http://127.0.0.1:8000/api/register'

res = requests.get(url)
print(res.text)