import React from 'react';
import { twMerge } from 'tailwind-merge';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage: { url: string };
  buttonText: string;
  buttonUrl: string;
}

export const HeroBanner = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonUrl,
}: HeroBannerProps) => {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.url})` }}>
      <div className="p-10 text-center">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        <p className="text-white text-xl">{subtitle}</p>
        {buttonText && (
          <a
            href={buttonUrl}
            className="bg-blue-500 text-white hover:bg-blue-700 mt-4 inline-block rounded py-2 px-4"
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};
