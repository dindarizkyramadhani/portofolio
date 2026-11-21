import { useState } from 'react';
import { Palette } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle = 'D.KYRAA Artwork',
  fallbackSubtitle = 'Studio Archive',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-surface-container via-surface-container-high to-primary-fixed/40 text-on-surface">
        <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center mb-2 border border-primary/25">
          <Palette className="w-6 h-6" />
        </div>
        <p className="font-archivo text-xs uppercase font-bold tracking-wider">{fallbackTitle}</p>
        <p className="font-handwriting text-sm text-on-surface-variant mt-0.5">{fallbackSubtitle}</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-container-high animate-pulse" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
