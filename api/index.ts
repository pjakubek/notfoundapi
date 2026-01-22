import { VercelRequest, VercelResponse } from "@vercel/node";
import { messages } from "../data/messages";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const message = messages[Math.floor(Math.random() * messages.length)];

  const code = Number(req.query.code) || 404;

  res.status(code);
  res.send(message);
}
