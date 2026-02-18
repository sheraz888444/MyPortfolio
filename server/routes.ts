import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api



  // Simple contact endpoint: POST /api/contact
  // Expects JSON: { name, email, message }
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, message } = req.body ?? {};

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Basic server-side validation
      if (typeof name !== "string" || name.length < 2 || name.length > 100) {
        return res.status(400).json({ message: "Invalid name" });
      }
      if (typeof email !== "string" || email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: "Invalid email" });
      }
      if (typeof message !== "string" || message.length < 3 || message.length > 5000) {
        return res.status(400).json({ message: "Invalid message" });
      }

      // Simple in-memory rate limiter per IP (5 submissions per hour)
      const ip = (req.ip || (req.headers["x-forwarded-for"] as string) || "unknown").toString();
      const now = Date.now();
      const WINDOW = 1000 * 60 * 60; // 1 hour
      const LIMIT = 5;
      (global as any)._contactRateLimit = (global as any)._contactRateLimit || new Map();
      const map: Map<string, { count: number; first: number }> = (global as any)._contactRateLimit;
      const entry = map.get(ip);
      if (!entry) {
        map.set(ip, { count: 1, first: now });
      } else {
        if (now - entry.first > WINDOW) {
          map.set(ip, { count: 1, first: now });
        } else {
          if (entry.count >= LIMIT) {
            return res.status(429).json({ message: "Too many requests, try again later" });
          }
          entry.count += 1;
        }
      }

      // Configure transporter from environment variables.
      // REQUIRED environment variables for sending real email:
      // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
      // Optional: SMTP_SECURE ("true" or "false"), FROM_EMAIL, TO_EMAIL
      const host = process.env.SMTP_HOST;
      const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
      const secure = process.env.SMTP_SECURE === "true";

      // Dynamically import nodemailer to avoid TypeScript compile errors when types or the package are missing.
      const mod = await import("nodemailer").catch(() => null);
      const nodemailerAny = (mod as any)?.default ?? (mod as any);

      let transporter: any;
      let etherealInfo: { url?: string } | undefined = undefined;

      if (nodemailerAny) {
        if (host) {
          transporter = nodemailerAny.createTransport({
            host,
            port,
            secure,
            auth: process.env.SMTP_USER && process.env.SMTP_PASS ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
          });
        } else {
          // Create an Ethereal test account for development (no real email sent)
          const testAccount = await nodemailerAny.createTestAccount();
          transporter = nodemailerAny.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: { user: testAccount.user, pass: testAccount.pass },
          });
        }
      } else {
        // nodemailer not available; fallback to a no-op transporter
        transporter = { sendMail: async (opts: any) => ({ message: opts }) } as any;
      }

      const to = process.env.TO_EMAIL || "itssheraz78618@gmail.com";
      const from = process.env.FROM_EMAIL || `"Portfolio Contact" <no-reply@localhost>`;

      const result = await transporter.sendMail({
        from,
        to,
        subject: `Portfolio contact from ${name}`,
        text: `${message}\n\nFrom: ${name} <${email}>`,
        html: `<p>${message}</p><p>From: <strong>${name}</strong> &lt;${email}&gt;</p>`,
      });

      // If we used Ethereal, provide the preview URL to the client for debugging
      if ((result as any)?.messageId && nodemailerAny && !host) {
        try {
          const url = (nodemailerAny as any).getTestMessageUrl(result as any);
          etherealInfo = { url };
        } catch {}
      }

      return res.json({ ok: true, info: result, ethereal: etherealInfo });
    } catch (err: any) {
      console.error("/api/contact error:", err);
      return res.status(500).json({ message: "Failed to send email" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
