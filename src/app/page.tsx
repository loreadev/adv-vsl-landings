'use client';

import { useEffect } from 'react';

export default function EpicRedirectPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://lorea.agency';
    }, 3500); // Aumentato a 3.5s per dare tempo all'animazione

    return () => clearTimeout(timer);
  }, []);

  const svgContent = (
    <svg id="Livello_2" data-name="Livello 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 419.49 97.34" className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto transition-all duration-300">
      <defs>
        <style>
          {`
            .logo-path {
              fill: #fff;
              fill-opacity: 0;
              stroke: #fff;
              stroke-width: 2px;
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 2s ease-in-out forwards;
            }
            #path-0 { animation-delay: 0s; }
            #path-1 { animation-delay: 0.2s; }
            #path-2 { animation-delay: 0.4s; }
            #path-3 { animation-delay: 0.6s; }
            #path-4 { animation-delay: 0.8s; }
          `}
        </style>
      </defs>
      <g>
        <polygon id="path-0" className="logo-path" points="284.05 58.27 320.1 58.27 323.78 37.23 287.74 37.23 290.1 23.28 337.33 23.28 341.14 1.71 269.45 1.71 253.01 95.63 325.89 95.63 329.98 71.67 281.6 71.69 284.05 58.27"/>
        <path id="path-1" className="logo-path" d="M124.72,0c-32.23,0-51.83,23.81-51.83,55.78,0,26.7,18.29,41.57,42.49,41.57,32.23,0,51.83-23.81,51.83-55.91C167.21,14.6,148.92,0,124.72,0ZM116.96,75.77c-11.97,0-19.07-7.37-19.07-21.05,0-17.5,9.21-33.15,25.26-33.15,11.97,0,19.07,7.24,19.07,20.92,0,17.36-9.21,33.28-25.26,33.28Z"/>
        <path id="path-2" className="logo-path" d="M256.51,28.81c0-17.5-13.16-27.1-29.86-27.1h-44.33l-16.44,93.92h24.47l5.79-33.02h20.13l5.92,33.02h23.94l-6.84-37.62c11.58-5.79,17.23-16.18,17.23-29.2ZM219.54,41.7h-19.86l3.42-18.81h19.21c5.13,0,9.34,2.5,9.34,7.89,0,7.76-5.13,10.92-12.1,10.92Z"/>
        <polygon id="path-3" className="logo-path" points="28.58 71.62 40.84 1.72 16.47 1.72 0 95.64 72.09 95.64 67.87 71.62 28.58 71.62"/>
        <polygon id="path-4" className="logo-path" points="401.88 1.72 347.97 1.72 331.64 95.64 355.94 95.64 368.14 25.73 381.82 25.73 395 95.64 419.49 95.64 401.88 1.72"/>
      </g>
    </svg>
  );

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden pb-24 sm:pb-0">
      {svgContent}
    </div>
  );
}
