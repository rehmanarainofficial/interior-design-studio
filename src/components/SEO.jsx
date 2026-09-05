import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  breadcrumbs, 
  faqs, 
  schemaType = 'LocalBusiness',
  productData 
}) {
  const location = useLocation();
  const currentUrl = `https://interiordesignstudiopk.com${location.pathname}`;
  const defaultTitle = 'Interior Design Studio | Luxury Flooring & Turnkey Fitting Contractor Karachi';
  const defaultDesc = 'Interior Design Studio is Pakistan\'s premier turnkey flooring & interior fitting contractor in Karachi. Specializing in SPC wood flooring, vinyl sheets, fluted wall panels, motorized roller blinds & gypsum false ceilings across Karachi.';
  const defaultKeywords = 'interior design studio karachi, flooring contractor near me, spc flooring fitting karachi, vinyl flooring karachi, fluted wall panel contractor, roller blinds supplier karachi, interior designer near me, acoustic carpet tiles karachi, gym rubber flooring, false ceiling contractor karachi, wooden flooring karachi, wallpaper installation karachi';
  const defaultImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200';

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title ? `${title} | Interior Design Studio` : defaultTitle;
    document.title = formattedTitle;

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

    // 2. Meta Description & Keywords & Robots
    updateMeta('name', 'description', description || defaultDesc);
    updateMeta('name', 'keywords', keywords || defaultKeywords);
    updateMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 3. OpenGraph Tags
    updateMeta('property', 'og:title', formattedTitle);
    updateMeta('property', 'og:description', description || defaultDesc);
    updateMeta('property', 'og:url', currentUrl);
    updateMeta('property', 'og:image', ogImage || defaultImage);
    updateMeta('property', 'og:type', productData ? 'product' : 'website');
    updateMeta('property', 'og:site_name', 'Interior Design Studio Pakistan');

    // 4. Twitter Card Tags
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', formattedTitle);
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

    // 6. Dynamic JSON-LD Structured Data Injection
    const scriptId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [];

    // Base Organization / Local Business Schema with AggregateRating
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "InteriorDesigner", "FlooringContractor"],
      "@id": "https://interiordesignstudiopk.com/#organization",
      "name": "Interior Design Studio",
      "image": "https://interiordesignstudiopk.com/full%20logo.png",
      "url": "https://interiordesignstudiopk.com",
      "telephone": "+923102321899",
      "email": "interiordesignstudiopk@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No 132, Shamim Sky Tower, Federal B Area Block 9 Yaseenabad",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "postalCode": "75950",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.918,
        "longitude": 67.0971
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "25"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "21:00"
      },
      "areaServed": [{ "@type": "City", "name": "Karachi" }],
      "sameAs": [
        "https://facebook.com/interiordesignstudiopk",
        "https://instagram.com/interiordesignstudiopk"
      ]
    };
    schemas.push(localBusinessSchema);

    // Dynamic Breadcrumb Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url ? `https://interiordesignstudiopk.com${item.url}` : currentUrl
        }))
      };
      schemas.push(breadcrumbList);
    }

    // Dynamic Product / Service Schema
    if (productData) {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": productData.name || title,
        "description": productData.description || description,
        "provider": {
          "@id": "https://interiordesignstudiopk.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Karachi"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "PKR",
          "price": "100"
        }
      };
      schemas.push(productSchema);
    }

    // Dynamic FAQ Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
      schemas.push(faqSchema);
    }

    scriptTag.textContent = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);

  }, [title, description, keywords, ogImage, currentUrl, breadcrumbs, faqs, schemaType, productData]);

  return null;
}
