import sgMail from '@sendgrid/mail';
import type { ContactSubmission } from '@shared/schema';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendQuoteRequestEmail(submission: ContactSubmission): Promise<boolean> {
  try {
    const emailContent = `
New Quote Request from AquaClean Pro Website

Customer Information:
- Name: ${submission.firstName} ${submission.lastName}
- Email: ${submission.email}
- Phone: ${submission.phone}
- Service: ${submission.service}
${submission.address ? `- Address: ${submission.address}` : ''}

${submission.message ? `Additional Details:\n${submission.message}` : ''}

Submitted: ${new Date(submission.createdAt).toLocaleString()}

Please follow up with this customer for their quote request.
    `;

    const msg = {
      to: process.env.BUSINESS_EMAIL || 'your-email@example.com', // Your business email
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@example.com', // Must be verified in SendGrid
      subject: `New Quote Request from ${submission.firstName} ${submission.lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    };

    await sgMail.send(msg);
    console.log('Quote request email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending quote request email:', error);
    return false;
  }
}