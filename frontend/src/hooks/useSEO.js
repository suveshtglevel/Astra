import { useEffect } from 'react';

export default function useSEO(title, description = 'Decoding the cosmic currents to help you navigate your earthly experience with absolute clarity.') {
  useEffect(() => {
    document.title = title ? `${title} | Klue` : 'Klue | Cosmic Astrology';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;
  }, [title, description]);
}
