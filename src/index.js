/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Queue consumer: a Worker that can consume from a
 * Queue: https://developers.cloudflare.com/queues/get-started/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	// Our fetch handler is invoked on a HTTP request: we can send a message to a queue
	// during (or after) a request.
	// https://developers.cloudflare.com/queues/platform/javascript-apis/#producer
	async fetch(request, env, ctx) {
		if (request.method !== "POST") {
      return new Response("Only POST supported", { status: 405 });
    }

    const telegramApiUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const data = await request.json();

      const resp = await fetch(telegramApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: data.chat_id,
          text: data.text,
					parse_mode: data.parse_mode || "MarkdownV2",
					message_thread_id: data.message_thread_id || undefined
        }),
      });

      const result = await resp.text();
      return new Response(result, {
        status: resp.status,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response("Error: " + err.toString(), { status: 500 });
    }
  },
};
