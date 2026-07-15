import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nodemailer = require("nodemailer");
import type { InsertContactInquiry } from "../shared/schema.ts";

/**
 * Sends an email notification for every contact-form inquiry.
 *
 * Configured entirely via environment variables:
 *   SMTP_HOST    e.g. smtp.gmail.com
 *   SMTP_PORT    587 (STARTTLS, default) or 465 (SSL)
 *   SMTP_USER    the mailbox that sends the mail
 *   SMTP_PASS    its password / app password
 *   NOTIFY_EMAIL where inquiries land (default: info@gemspride.com)
 *   SMTP_FROM    optional From header (default: SMTP_USER)
 *
 * If SMTP is not configured, submissions are still saved to the database -
 * the notification is simply skipped with a warning in the logs.
 */

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL, SMTP_FROM } = process.env;

const isConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const transporter = isConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
  : null;

if (!isConfigured) {
  console.warn(
    "[email] SMTP not configured (SMTP_HOST/SMTP_USER/SMTP_PASS missing) - inquiry notifications will be skipped",
  );
}

export async function sendInquiryNotification(inquiry: InsertContactInquiry): Promise<void> {
  if (!transporter) return;

  const to = NOTIFY_EMAIL || "info@gemspride.com";
  const lines = [
    `Name:     ${inquiry.name}`,
    `Email:    ${inquiry.email}`,
    `Company:  ${inquiry.company}`,
    `Phone:    ${inquiry.phone || "-"}`,
    `Service:  ${inquiry.serviceInterest}`,
    ``,
    `Message:`,
    inquiry.message,
    ``,
    `---`,
    `Sent automatically from the gemspride.com contact form.`,
    `Reply to this email to respond to ${inquiry.name} directly.`,
  ];

  try {
    await transporter.sendMail({
      from: SMTP_FROM || SMTP_USER,
      to,
      replyTo: inquiry.email,
      subject: `New inquiry: ${inquiry.name} (${inquiry.company}) - ${inquiry.serviceInterest}`,
      text: lines.join("\n"),
    });
    console.log(`[email] inquiry notification sent to ${to}`);
  } catch (err) {
    // Never let a mail failure break the form - the inquiry is already in the DB
    console.error("[email] failed to send inquiry notification:", err);
  }
}
