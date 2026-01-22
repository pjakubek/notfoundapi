import { messages } from "../data/messages";

export const config = {
  runtime: "edge"
};

function random<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function handler(req: Request) {
  const url = new URL(req.url);
  const code = Number(url.searchParams.get("code")) || 404;
  const message = random(messages);

  const headers = {

  };

  if (url.pathname.endsWith("/json")) {
    return new Response(
      JSON.stringify({ error: code, message }),
      {
        status: code,
        headers: {
          ...headers,
          "Content-Type": "application/json"
        }
      }
    );
  }

  return new Response(message, {
    status: code,
    headers
  });
}
