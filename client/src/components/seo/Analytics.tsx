import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "wouter";

const GA4_ID = import.meta.env.VITE_GA4_ID;
const GSC_HTML = import.meta.env.VITE_GSC_HTML;

export default function Analytics() {
  const [location] = useLocation();

  // Track page views on route change (SPA navigation)
  useEffect(() => {
    if (!GA4_ID || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: location,
      page_title: document.title,
    });
  }, [location]);

  // Track tel: link clicks
  useEffect(() => {
    if (!GA4_ID) return;

    const trackTelClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="tel:"]');
      
      if (link && window.gtag) {
        const telLink = link as HTMLAnchorElement;
        window.gtag('event', 'click_to_call', {
          path: window.location.pathname,
          link_text: telLink.textContent || telLink.innerText || 'Phone',
        });
      }
    };

    document.addEventListener('click', trackTelClick);
    return () => document.removeEventListener('click', trackTelClick);
  }, []);

  // Parse GSC meta tag content if provided
  const gscContent = GSC_HTML ? extractGSCContent(GSC_HTML) : null;

  return (
    <Helmet>
      {/* Google Search Console Verification */}
      {gscContent && (
        <meta name="google-site-verification" content={gscContent} />
      )}

      {/* Google Analytics 4 */}
      {GA4_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </script>
        </>
      )}
    </Helmet>
  );
}

// Helper to extract content from full meta tag HTML
function extractGSCContent(html: string): string | null {
  const match = html.match(/content=["']([^"']+)["']/);
  return match ? match[1] : null;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}
