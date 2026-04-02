import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "quotes@dfwpristinepowerwashing.com";
const OWNER_EMAIL = process.env.OWNER_EMAIL || "info@dfwpristinepowerwashing.com";

interface ServiceDetail {
  service: string;
  measurement: string;
  dirtLevel: string;
}

interface QuotePayload {
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  quote: {
    services: ServiceDetail[];
    addons: string[];
    lineItems: { label: string; amount: number }[];
    subtotal: number;
    priceLow: number;
    priceHigh: number;
  };
}

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

function buildCustomerEmail(payload: QuotePayload): string {
  const { customer, quote } = payload;

  const lineItemRows = quote.lineItems
    .map(
      (item) => `
      <tr>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;color:#374151;">${item.label}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #f0f0f0;color:#374151;text-align:right;font-weight:500;">${formatCurrency(item.amount)}</td>
      </tr>`
    )
    .join("");

  const serviceRows = quote.services
    .map(
      (svc, i) => `
      <tr style="${i % 2 === 0 ? "background:#f9fafb;" : ""}">
        <td style="padding:10px 16px;color:#374151;font-size:14px;font-weight:500;border-top:${i > 0 ? "1px solid #f0f0f0" : "none"};">${svc.service}</td>
        <td style="padding:10px 16px;color:#6b7280;font-size:14px;border-top:${i > 0 ? "1px solid #f0f0f0" : "none"};">${svc.measurement}</td>
        <td style="padding:10px 16px;color:#6b7280;font-size:14px;border-top:${i > 0 ? "1px solid #f0f0f0" : "none"};">${svc.dirtLevel}</td>
      </tr>`
    )
    .join("");

  const addonsRow =
    quote.addons.length > 0
      ? `<tr>
          <td colspan="3" style="padding:10px 16px;color:#6b7280;font-size:14px;border-top:1px solid #f0f0f0;">
            <strong style="color:#374151;">Add-ons:</strong> ${quote.addons.join(", ")}
          </td>
        </tr>`
      : "";

  const serviceTitle = quote.services.length === 1
    ? quote.services[0].service
    : `${quote.services.length} Services`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#1e7fc1 0%,#0ea5e9 100%);padding:32px 40px;text-align:center;">
            <p style="margin:0;color:rgba(255,255,255,0.85);font-size:14px;letter-spacing:1px;text-transform:uppercase;">DFW Pristine Power Washing</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:28px;font-weight:700;">Your Instant Quote</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px 0;">
            <p style="margin:0;color:#374151;font-size:16px;">Hi ${customer.name},</p>
            <p style="margin:12px 0 0;color:#6b7280;font-size:15px;line-height:1.6;">
              Thanks for using our instant quote calculator! Here's a summary of your estimate based on the information you provided.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0fdf4;border:2px solid #22c55e;border-radius:10px;">
              <tr>
                <td style="padding:20px;text-align:center;">
                  <p style="margin:0;color:#16a34a;font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Estimated Price Range</p>
                  <p style="margin:8px 0 0;color:#15803d;font-size:36px;font-weight:800;">${formatCurrency(quote.priceLow)} – ${formatCurrency(quote.priceHigh)}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 24px;">
            <p style="margin:0 0 12px;color:#111827;font-size:16px;font-weight:600;">Services Requested</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              <thead>
                <tr style="background:#f9fafb;">
                  <th style="padding:10px 16px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Service</th>
                  <th style="padding:10px 16px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Size</th>
                  <th style="padding:10px 16px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Dirt Level</th>
                </tr>
              </thead>
              <tbody>
                ${serviceRows}
                ${addonsRow}
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 24px;">
            <p style="margin:0 0 12px;color:#111827;font-size:16px;font-weight:600;">Quote Breakdown</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              <thead>
                <tr style="background:#f9fafb;">
                  <th style="padding:10px 12px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Item</th>
                  <th style="padding:10px 12px;text-align:right;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Est. Amount</th>
                </tr>
              </thead>
              <tbody>${lineItemRows}</tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 24px;">
            <p style="margin:0;color:#9ca3af;font-size:13px;font-style:italic;border-top:1px solid #f0f0f0;padding-top:16px;">
              Final pricing may vary based on site conditions. This is an estimate only.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:0 40px 32px;text-align:center;">
            <p style="margin:0 0 16px;color:#374151;font-size:15px;">Ready to book? Give us a call or reply to this email.</p>
            <a href="tel:+18175856388" style="display:inline-block;background:#22c55e;color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:8px;font-size:16px;font-weight:700;">(817) 585-6388</a>
          </td>
        </tr>
        <tr>
          <td style="background:#1f2937;padding:20px 40px;text-align:center;">
            <p style="margin:0;color:#9ca3af;font-size:13px;">DFW Pristine Power Washing · dfwpristinepowerwashing.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildOwnerEmail(payload: QuotePayload): string {
  const { customer, quote } = payload;

  const lineItemRows = quote.lineItems
    .map(
      (item) =>
        `<tr><td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;">${item.label}</td><td style="padding:6px 10px;border-bottom:1px solid #f0f0f0;text-align:right;">${formatCurrency(item.amount)}</td></tr>`
    )
    .join("");

  const serviceRows = quote.services
    .map(
      (svc, i) =>
        `<tr style="${i % 2 === 0 ? "background:#f9fafb;" : ""}"><td style="padding:8px 12px;font-size:14px;border-top:${i > 0 ? "1px solid #f0f0f0" : "none"};">${svc.service}</td><td style="padding:8px 12px;color:#6b7280;font-size:14px;border-top:${i > 0 ? "1px solid #f0f0f0" : "none"};">${svc.measurement}</td><td style="padding:8px 12px;color:#6b7280;font-size:14px;border-top:${i > 0 ? "1px solid #f0f0f0" : "none"};">${svc.dirtLevel}</td></tr>`
    )
    .join("");

  const serviceTitle = quote.services.length === 1
    ? quote.services[0].service
    : `${quote.services.length} Services`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:24px;font-family:Arial,sans-serif;background:#f9fafb;">
  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    <tr><td style="background:#1e7fc1;padding:20px 28px;">
      <h2 style="margin:0;color:#fff;font-size:20px;">New Quote Lead</h2>
      <p style="margin:4px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">${serviceTitle} · ${formatCurrency(quote.priceLow)} – ${formatCurrency(quote.priceHigh)} estimated</p>
    </td></tr>
    <tr><td style="padding:24px 28px;">
      <h3 style="margin:0 0 12px;color:#111827;font-size:16px;">Customer Info</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:24px;">
        <tr style="background:#f9fafb;"><td style="padding:8px 12px;color:#6b7280;font-size:14px;width:35%;">Name</td><td style="padding:8px 12px;font-weight:600;">${customer.name}</td></tr>
        <tr><td style="padding:8px 12px;color:#6b7280;font-size:14px;border-top:1px solid #f0f0f0;">Email</td><td style="padding:8px 12px;border-top:1px solid #f0f0f0;"><a href="mailto:${customer.email}">${customer.email}</a></td></tr>
        <tr style="background:#f9fafb;"><td style="padding:8px 12px;color:#6b7280;font-size:14px;border-top:1px solid #f0f0f0;">Phone</td><td style="padding:8px 12px;border-top:1px solid #f0f0f0;"><a href="tel:${customer.phone}">${customer.phone}</a></td></tr>
      </table>
      <h3 style="margin:0 0 12px;color:#111827;font-size:16px;">Services (${quote.services.length})</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;margin-bottom:24px;">
        <thead>
          <tr style="background:#f9fafb;">
            <th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;">Service</th>
            <th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;">Size</th>
            <th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;">Dirt</th>
          </tr>
        </thead>
        <tbody>${serviceRows}</tbody>
      </table>
      ${quote.addons.length > 0 ? `<p style="margin:0 0 16px;color:#374151;font-size:14px;"><strong>Add-ons:</strong> ${quote.addons.join(", ")}</p>` : ""}
      <h3 style="margin:0 0 8px;color:#111827;font-size:16px;">Line Items</h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:6px;overflow:hidden;">
        ${lineItemRows}
        <tr style="background:#f0fdf4;"><td style="padding:10px 12px;font-weight:700;border-top:2px solid #22c55e;">Estimated Range</td><td style="padding:10px 12px;font-weight:700;text-align:right;color:#16a34a;border-top:2px solid #22c55e;">${formatCurrency(quote.priceLow)} – ${formatCurrency(quote.priceHigh)}</td></tr>
      </table>
    </td></tr>
    <tr><td style="background:#f3f4f6;padding:14px 28px;text-align:center;">
      <p style="margin:0;color:#9ca3af;font-size:12px;">Submitted via dfwpristinepowerwashing.com</p>
    </td></tr>
  </table>
</body>
</html>`;
}

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const payload: QuotePayload = req.body;

  if (!payload?.customer?.email || !payload?.customer?.name) {
    return res.status(400).json({ error: "Missing required customer fields" });
  }

  if (!payload?.quote?.services?.length) {
    return res.status(400).json({ error: "Quote must include at least one service" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ error: "Email service not configured" });
  }

  const serviceTitle = payload.quote.services.length === 1
    ? payload.quote.services[0].service
    : `${payload.quote.services.length} Services`;

  try {
    const [customerResult, ownerResult] = await Promise.all([
      resend.emails.send({
        from: `DFW Pristine Power Washing <${FROM_EMAIL}>`,
        to: payload.customer.email,
        subject: `Your Instant Quote – ${serviceTitle}`,
        html: buildCustomerEmail(payload),
      }),
      resend.emails.send({
        from: `Quote Calculator <${FROM_EMAIL}>`,
        to: OWNER_EMAIL,
        subject: `New Quote Lead: ${payload.customer.name} – ${serviceTitle} (${formatCurrency(payload.quote.priceLow)}–${formatCurrency(payload.quote.priceHigh)})`,
        html: buildOwnerEmail(payload),
      }),
    ]);

    if (customerResult.error || ownerResult.error) {
      console.error("Resend errors:", customerResult.error, ownerResult.error);
      return res.status(500).json({ error: "Failed to send one or more emails" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
