# cfw-telegram
Cloudflare worker for telegram

## 1. First, ensure you have the necessary tools installed:
> Install Wrangler (Cloudflare Workers CLI)
```sh
npm install -g wrangler
```

## 2. Clone the repository (if you haven't already):
```sh
git clone https://github.com/vlgft/cfw-telegram.git
cd cfw-telegram
```

## 3. Install dependencies:
```sh
npm install
```

## 4. Deploy your worker:
> login to cloudflare dashboard and create a new worker or you can flow this command:
```sh
wrangler login
```
> deploy
```sh
wrangler deploy
```

> Example output: `https://my-worker.<subdomain>.workers.dev`

## Example Python Usage
```python
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

WORKER_PROXY_URL = os.getenv("WORKER_PROXY_URL")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")

data = {
    "chat_id": TELEGRAM_CHAT_ID,
    "text": "Hello there!",
    "parse_mode": "Markdown",
    "message_thread_id": 5,
}

response = requests.post(WORKER_PROXY_URL, json=data)

if response.ok:
    print("Gửi thành công:", response.text)
else:
    print("Lỗi:", response.status_code, response.text)
```
