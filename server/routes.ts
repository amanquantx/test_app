import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { sendInquiryNotification } from "./email";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createContactInquiry(input);
      // Fire-and-forget: the inquiry is safely in the DB; the email must
      // never delay or fail the response.
      void sendInquiryNotification(input);
      res.json({ success: true, message: "Inquiry received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation failed", 
          field: err.errors[0].path.join('.') 
        });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  return httpServer;
}
