'use client';

import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type Consent = 'accepted' | 'rejected' | null;

const CONSENT_KEY = 'asc-cookie-consent-v1';

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [isOpen, setIsOpen] = useState(false);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY);
    const initializeConsent = window.setTimeout(() => {
      if (savedConsent === 'accepted' || savedConsent === 'rejected') {
        setConsent(savedConsent);
      } else {
        setIsOpen(true);
      }
    }, 0);

    const openPreferences = () => {
      setIsOpen(true);
      window.requestAnimationFrame(() => bannerRef.current?.focus());
    };
    window.addEventListener('asc:open-cookie-preferences', openPreferences);
    return () => {
      window.clearTimeout(initializeConsent);
      window.removeEventListener('asc:open-cookie-preferences', openPreferences);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.cookieBanner = isOpen ? 'open' : 'closed';

    return () => {
      delete document.documentElement.dataset.cookieBanner;
    };
  }, [isOpen]);

  const saveConsent = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setIsOpen(false);
  };

  return (
    <>
      {consent === 'accepted' && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJLVMXX');`}
        </Script>
      )}

      {isOpen && (
        <section
          ref={bannerRef}
          tabIndex={-1}
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-4xl rounded-xl bg-white px-4 py-4 text-gray-900 shadow-[0_12px_36px_rgba(15,17,21,0.16)] sm:inset-x-6 sm:bottom-6 sm:px-5"
          aria-label="Preferências de cookies"
          aria-live="polite"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="max-w-2xl text-sm leading-6 text-gray-600">
              Usamos cookies opcionais para entender e melhorar o site.{' '}
                <Link
                  href="/politica-privacidade"
                  className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-[#00B74F] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong"
                >
                  Ver política
                </Link>
              .
            </p>
            <div className="flex shrink-0 items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => saveConsent('rejected')}
                className="min-h-11 rounded-lg px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => saveConsent('accepted')}
                className="min-h-11 rounded-lg bg-brand-strong px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2"
              >
                Aceitar
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
