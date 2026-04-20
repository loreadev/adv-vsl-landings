'use client';

import Image from "next/image";
import { Inter } from 'next/font/google';
import { useState, useEffect, useRef } from 'react';
import { useMetaPixel } from '@/hooks/useMetaPixel';
import { useUTMPayload } from '@/hooks/useUTMPayload';
import { useGoogleAdsConversion } from '@/hooks/useGoogleAdsConversion';
import MetaPixel from '@/components/MetaPixel';
import UTMDebug from '@/components/UTMDebug';
import { META_PIXEL_ID, GOOGLE_ADS_CONVERSION_ID, GOOGLE_ADS_CONVERSION_LABEL } from '@/config/meta';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showStrikethrough, setShowStrikethrough] = useState(false);
  const { trackCustomEvent } = useMetaPixel();
  const { trackConversion } = useGoogleAdsConversion();
  const { hasUTM } = useUTMPayload();
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    // Attiva il strikethrough dopo 2.5 secondi
    const timer = setTimeout(() => {
      setShowStrikethrough(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Funzione per tracciare il click sul video
  const handleVideoClick = () => {
    if (!videoStarted) {
      setVideoStarted(true);
      trackCustomEvent('VideoPlay', {
        video_title: 'Aliexpress, Temu e Amazon VSL',
        video_duration: '5:30'
      });
    }
  };

  // Funzione per tracciare il click sul CTA
  const handleCTAClick = () => {
    // Traccia evento Meta Pixel
    trackCustomEvent('CTA_Click', {
      button_text: 'Get Access NOW',
      page: 'VSL',
      has_utm: hasUTM,
      utm_payload: hasUTM ? 'present' : 'none'
    });
    
    // Traccia conversione Google Ads (click su pulsante Telegram)
    trackConversion({
      conversionId: GOOGLE_ADS_CONVERSION_ID,
      conversionLabel: GOOGLE_ADS_CONVERSION_LABEL,
      value: 1.0,
      currency: 'EUR'
    });
  };

  return (
    <>
      {/* Pixel Meta - ATTIVO SOLO SU QUESTA PAGINA */}
      <MetaPixel pixelId={META_PIXEL_ID} />
      
      {/* Debug UTM - SOLO PER TESTING */}
      <UTMDebug show={process.env.NODE_ENV === 'development'} />
      
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-black text-white ${inter.className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex flex-col min-h-screen">
        
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-4">
          <div className="inline-block p-3 lg:px-4 rounded-xl bg-white/5 border border-white/10 shadow-lg">
            <Image
              src="/logo.svg" 
              alt="Logo" 
              width={419} 
              height={97}
              className="w-16 sm:w-20 lg:w-28 filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-14">
          
          {/* Headline */}
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              What&apos;s the secret service companies like{" "}
              <span className="relative block sm:inline-block">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-black font-black px-3 py-0.5 sm:px-3 sm:py-0.5 lg:px-4 lg:py-0.5 rounded-lg lg:rounded-xl shadow-xl text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl whitespace-nowrap">
                  Aliexpress, Temu, Amazon
                </span>
              </span>{" "}
              use every single day to run{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-bold">
                outrageous ads
              </span>{" "}
              without ever getting{" "}
              <span className="relative inline-block">
                <span className="text-white font-bold">banned</span>
                <span 
                  className={`absolute top-1/2 left-0 h-1 lg:h-1.5 bg-red-500 transition-all duration-1000 ease-out ${
                    showStrikethrough ? 'w-full' : 'w-0'
                  }`}
                  style={{ transform: 'translateY(-50%)' }}
                ></span>
              </span>
              ?
            </h1>
          </div>

          {/* Video */}
          <div className="w-full">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl lg:rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl lg:rounded-3xl opacity-75 animate-pulse"></div>
              
              {/* Inner border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl lg:rounded-3xl"></div>
              
              {/* Video container */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition-all duration-300">
                  {/* Overlay per intercettare il click e tracciare l'evento */}
                  {!videoStarted && (
                    <button
                      aria-label="Avvia video"
                      onClick={handleVideoClick}
                      className="absolute inset-0 z-20 w-full h-full cursor-pointer bg-transparent"
                      style={{ border: 'none', padding: 0, margin: 0 }}
                    />
                  )}
                <iframe 
                    ref={videoRef}
                  src="https://player.vimeo.com/video/1093797611?h=5bfabfa6f6&badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  className="w-full h-full"
                  title="VSL - Aliexpress, Temu e Amazon"
                ></iframe>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://telegram.me/lorea_metaplug"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCTAClick}
              className={`relative group inline-flex w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-xl text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] items-center justify-center gap-2 sm:gap-3 border border-white/10 hover:border-white/20 no-underline ${inter.className}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Get Access NOW
            </a>
          </div>
        </div>

        {/* Footer Separator */}
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-full max-w-md"></div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs sm:text-sm text-gray-400 space-y-2 sm:space-y-3">
          <p className="text-sm sm:text-base font-bold text-white mb-2">WE HANDLE THE SH*T YOU HATE</p>
          <p className="font-medium">© 2025 Lorea. All Rights Reserved.</p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm sm:max-w-md mx-auto px-2">
            Protected by all the possible laws. If you tryna copy we gonna come after your family. Liam Neeson style.
          </p>
      </footer>
      </div>
    </div>
    </>
  );
}
