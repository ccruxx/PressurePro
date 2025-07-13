import type { ContactSubmissionResult } from './storage';

// No-op email function for static deployment
export async function sendQuoteRequestEmail(submission: ContactSubmissionResult): Promise<boolean> {
  // Since this is now a static site, we just log the submission
  console.log('Quote request received (static mode):', {
    name: `${submission.firstName} ${submission.lastName}`,
    email: submission.email,
    phone: submission.phone,
    service: submission.service
  });
  return true;
}