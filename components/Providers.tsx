'use client';

import { MotionConfig } from 'framer-motion';
import CookieConsent from '@/components/CookieConsent';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <CookieConsent />
    </MotionConfig>
  );
}
