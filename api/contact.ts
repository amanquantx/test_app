import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { insertContactInquirySchema, contactInquiries } from "../shared/schema.ts";
import { sendInquiryNotification } from "../server/email.ts";

/**
 * Vercel serverless function for the contact form (POST /api/contact).
 *
 * Mirrors the Express route in server/routes.ts so the same repo deploys
 * both ways: on Vercel this function handles the API; on a Node host the
 * Express server does. Requires DATABASE_URL (and optionally the SMTP_*
 * variables) to be set in the Vercel project settings.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const input = insertContactInquirySchema.parse(req.body);

    // Imported lazily so a missing DATABASE_URL fails this request with a
    // clean JSON error instead of crashing the function at load time.
    const { db } = await import("../server/db");
    await db.insert(contactInquiries).values(input);

    // In serverless the runtime freezes right after the response is sent,
    // so the email must be awaited here (it catches its own failures and
    // never throws).
    await sendInquiryNotification(input);

    return res.status(200).json({ success: true, message: "Inquiry received" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation failed",
        field: err.errors[0].path.join("."),
      });
    }
    console.error("[api/contact] error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}
