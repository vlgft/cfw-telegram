# cfw-telegram
Cloudflare worker for telegram

1. First, ensure you have the necessary tools installed:
# Install Wrangler (Cloudflare Workers CLI)
```sh
npm install -g wrangler
```

2. Clone the repository (if you haven't already):
```sh
git clone https://github.com/vlgft/cfw-telegram.git
cd cfw-telegram
```

3. Install dependencies:
```sh
npm install
```
4. Deploy your worker:
> login to cloudflare dashboard and create a new worker or you can flow this command:
```sh
wrangler login
```
> deploy
```sh
wrangler deploy
```

> Example output: `https://my-worker.<subdomain>.workers.dev`
