'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function TitleUpdater() {
  const pathname = usePathname();

  useEffect(() => {
    const getPageTitle = (path) => {
      // Normalize path by removing trailing slashes (except root)
      const normalizedPath = path === '/' ? '/' : path.replace(/\/$/, '');
      
      if (normalizedPath === '/') return 'Home';
      if (normalizedPath === '/about') return 'About';
      if (normalizedPath === '/contact') return 'Contact';
      if (normalizedPath === '/portfolio') return 'Portfolio';
      if (normalizedPath === '/testimonials') return 'Testimonials';
      if (normalizedPath.startsWith('/services/')) {
        const serviceName = normalizedPath.split('/services/')[1];
        return serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      }
      if (normalizedPath === '/privacypolicy') return 'Privacy Policy';
      if (normalizedPath === '/questionnaire') return 'Questionnaire';
      const lastSegment = normalizedPath.split('/').pop();
      return lastSegment ? lastSegment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Home';
    };

    const pageTitle = getPageTitle(pathname || '/');
    document.title = `Kindle Publishing Hub | ${pageTitle}`;
  }, [pathname]);

  return null;
}
