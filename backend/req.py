import requests
import time

API_URL = "https://chanchailertsri.online/api/guests"  # เปลี่ยนเป็น URL จริงของคุณ

for i in range(464):
    response = requests.post(API_URL)
    print(f"Request {i+1}: Status {response.status_code}, Response: {response.json()}")
    time.sleep(1)  # รอ 1 วินาที