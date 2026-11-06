import React, { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  ...props
}) => {
  // Candidate list to try in order
  const candidates: string[] = [];
  if (src) candidates.push(src);
  if (fallbackSrc && fallbackSrc !== src) candidates.push(fallbackSrc);
  // Universal SVG brand fallback
  candidates.push('/images/fallback_food.svg');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAllFailed, setHasAllFailed] = useState(false);

  const handleError = () => {
    if (currentIndex + 1 < candidates.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setHasAllFailed(true);
    }
  };

  if (hasAllFailed) {
    return (
      <div
        className={`w-full h-full min-h-[160px] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-zinc-900 to-[#14151e] border border-zinc-800 text-center ${containerClassName}`}
      >
        <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-500 flex items-center justify-center mb-2">
          <UtensilsCrossed className="w-5 h-5" />
        </div>
        <p className="text-xs font-bold text-white uppercase tracking-wider">{alt}</p>
        <p className="text-[10px] text-amber-400 mt-0.5">Chinese Hut Specialty</p>
      </div>
    );
  }

  return (
    <img
      src={candidates[currentIndex]}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
