import { type ContactFormData } from "@shared/schema";

export interface IStorage {
  createContactSubmission(submission: ContactFormData): Promise<ContactSubmissionResult>;
  getContactSubmissions(): Promise<ContactSubmissionResult[]>;
}

export interface ContactSubmissionResult extends ContactFormData {
  id: number;
  createdAt: Date;
}

export class MemStorage implements IStorage {
  private submissions: Map<number, ContactSubmissionResult>;
  private currentId: number;

  constructor() {
    this.submissions = new Map();
    this.currentId = 1;
  }

  async createContactSubmission(insertSubmission: ContactFormData): Promise<ContactSubmissionResult> {
    const id = this.currentId++;
    const submission: ContactSubmissionResult = {
      ...insertSubmission,
      id,
      createdAt: new Date(),
    };
    this.submissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmissionResult[]> {
    return Array.from(this.submissions.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
