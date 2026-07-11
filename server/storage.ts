import { contactInquiries, type InsertContactInquiry, type ContactInquiry } from "@shared/schema";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class DatabaseStorage implements IStorage {
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    // Imported lazily so the dev server can boot without DATABASE_URL —
    // only submitting the contact form actually needs the database.
    const { db } = await import("./db");
    const [newInquiry] = await db.insert(contactInquiries).values(inquiry).returning();
    return newInquiry;
  }
}

export const storage = new DatabaseStorage();
