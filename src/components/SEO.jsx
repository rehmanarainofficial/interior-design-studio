import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, keywords, ogImage }) {
  const location = useLocation();
  const currentUrl = `https://interiordesignstudiopk.com${location.pathname}`;
  const defaultTitle = 'Interior Design Studio | Luxury Flooring & Turnkey Fitting Contractor Karachi';
  const defaultDesc = 'Interior Design Studio is Pakistan premier turnkey flooring & interior fitting contractor in Karachi. Specializing in SPC wood flooring, vinyl sheets, fluted wall panels, motorized roller blinds & gypsum false ceilings across Karachi.';
  const defaultKeywords = 'interior design studio karachi, flooring contractor near me, spc flooring fitting karachi, vinyl flooring karachi, fluted wall panel contractor, roller blinds supplier karachi, interior designer near me, acoustic carpet tiles karachi, gym rubber flooring, false ceiling contractor karachi';
  const defaultImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200';

  useEffect(() => {
    // 1. Update Title
    document.title = title ? `${title} | Interior Design Studio` : defaultTitle;

    // Helper function to update or create meta tags
    const updateMeta = (nameAttr, nameVal, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta Description & Keywords
    updateMeta('name', 'description', description || defaultDesc);
    updateMeta('name', 'keywords', keywords || defaultKeywords);

    // 3. OpenGraph Tags
    updateMeta('property', 'og:title', title || defaultTitle);
    updateMeta('property', 'og:description', description || defaultDesc);
    updateMeta('property', 'og:url', currentUrl);
    updateMeta('property', 'og:image', ogImage || defaultImage);

    // 4. Twitter Card Tags
    updateMeta('name', 'twitter:title', title || defaultTitle);
    updateMeta('name', 'twitter:description', description || defaultDesc);
    updateMeta('name', 'twitter:image', ogImage || defaultImage);

    // 5. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, ogImage, currentUrl]);

  return null;
}
