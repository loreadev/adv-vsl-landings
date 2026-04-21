'use client';

import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useMetaPixel } from "@/hooks/useMetaPixel";
import { useUTMPayload } from "@/hooks/useUTMPayload";
import { useGoogleAdsConversion } from "@/hooks/useGoogleAdsConversion";
import MetaPixel from "@/components/MetaPixel";
import UTMDebug from "@/components/UTMDebug";
import { META_PIXEL_ID, GOOGLE_ADS_CONVERSION_ID, GOOGLE_ADS_CONVERSION_LABEL } from "@/config/meta";

const inter = Inter({ subsets: ["latin"] });

type VslVariant = "bh" | "wh";

interface VslPageProps {
  variant: VslVariant;
}

interface VariantConfig {
  analyticsPageName: string;
  videoTitle: string;
  videoUrl: string;
  videoDuration: string;
  headline: (showStrikethrough: boolean) => ReactNode;
  subheadline?: ReactNode;
  ctaLabel: string;
  ctaHref: string;
}

const bhHeadline = (showStrikethrough: boolean) => (
  <>
    <span className="sm:hidden">
      What&apos;s the secret service that companies like{" "}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-orange-400 to-red-500 text-black font-black px-3 py-0.5 rounded-lg shadow-xl text-2xl whitespace-nowrap">
          AliExpress, Temu, Amazon
        </span>
      </span>{" "}
      use every day to run ads that{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-bold">
        CLEARLY VIOLATE
      </span>{" "}
      policies and never get{" "}
      <span className="relative inline-block">
        <span className="text-white font-bold">banned</span>
        <span
          className={`absolute top-1/2 left-0 h-1 bg-red-500 transition-all duration-1000 ease-out ${
            showStrikethrough ? "w-full" : "w-0"
          }`}
          style={{ transform: "translateY(-50%)" }}
        />
      </span>
      ?
    </span>
    <span className="hidden sm:block sm:w-fit sm:mx-auto sm:whitespace-nowrap">
      What&apos;s the secret service that companies
    </span>
    <span className="hidden sm:block sm:w-fit sm:mx-auto sm:whitespace-nowrap">
      like{" "}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-orange-400 to-red-500 text-black font-black px-3 py-0.5 sm:px-3 sm:py-0.5 lg:px-4 lg:py-0.5 rounded-lg lg:rounded-xl shadow-xl text-2xl sm:text-[1.84rem] md:text-[2.08rem] lg:text-[2.3rem] xl:text-[2.56rem] whitespace-nowrap">
          AliExpress, Temu, Amazon
        </span>
      </span>{" "}
      use
    </span>
    <span className="hidden sm:block sm:w-fit sm:mx-auto sm:whitespace-nowrap">every day to run ads that</span>
    <span className="hidden sm:block sm:w-fit sm:mx-auto sm:whitespace-nowrap">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-bold">
        CLEARLY VIOLATE
      </span>{" "}
      policies
    </span>
    <span className="hidden sm:block sm:w-fit sm:mx-auto sm:whitespace-nowrap">
      and never get{" "}
      <span className="relative inline-block">
        <span className="text-white font-bold">banned</span>
        <span
          className={`absolute top-1/2 left-0 h-1 lg:h-1.5 bg-red-500 transition-all duration-1000 ease-out ${
            showStrikethrough ? "w-full" : "w-0"
          }`}
          style={{ transform: "translateY(-50%)" }}
        />
      </span>
      ?
    </span>
  </>
);

const variantConfig: Record<VslVariant, VariantConfig> = {
  bh: {
    analyticsPageName: "vsl",
    videoTitle: "Aliexpress, Temu e Amazon VSL",
    videoUrl: "https://player.vimeo.com/video/1093797611?h=5bfabfa6f6&badge=0&autopause=0&player_id=0&app_id=58479",
    videoDuration: "5:30",
    headline: bhHeadline,
    ctaLabel: "Get Access NOW",
    ctaHref: "https://t.me/LOREANEW_BOT",
  },
  wh: {
    analyticsPageName: "vsl-wh",
    videoTitle: "What If The Problem Isn't Your Ads",
    videoUrl: "https://player.vimeo.com/video/1184860847?h=9d3869975f&badge=0&autopause=0&player_id=0&app_id=58479",
    videoDuration: "unknown",
    headline: () => (
      <>
        <span className="block sm:whitespace-nowrap">
          The problem isn&apos;t{" "}
          <span className="relative inline-block align-middle">
            <span className="inline-block whitespace-nowrap rounded-lg bg-gradient-to-r from-[#8CF57D] to-[#00A747] px-2.5 py-0.5 text-black shadow-xl sm:px-3">
              <span className="font-black">your Ads</span>
            </span>
          </span>{" "}
          but
        </span>
        <span className="block">
          the{" "}
          <span className="relative inline-block align-middle">
            <span className="inline-block whitespace-nowrap rounded-lg bg-gradient-to-r from-[#FF8A64] to-[#FF0000] px-2.5 py-0.5 text-black shadow-xl sm:px-3">
              <span className="font-black">ADaccount</span>
            </span>
          </span>
          {" "}you&apos;re running on
        </span>
      </>
    ),
    subheadline: (
      <>
        <span className="block">
          Meta assigns a{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00A747] to-[#00712E]">
            hidden performance tier
          </span>{" "}
          to every Business Manager.
        </span>
        <span className="block mt-3">
          If yours is low: no creative, no hook, no audience will save you.
        </span>
        <span className="block mt-3">
          Here&apos;s how e-commerce brands are{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#990000]">
            bypassing the system
          </span>
        </span>
        <span className="block mt-3">
          and scaling with{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00A747] to-[#00712E]">
            unfair CPMs
          </span>{" "}
          from day one.
        </span>
      </>
    ),
    ctaLabel: "Get Access NOW",
    ctaHref: "https://t.me/LOREANEW_BOT",
  },
};

export default function VslPage({ variant }: VslPageProps) {
  const [showStrikethrough, setShowStrikethrough] = useState(false);
  const { trackCustomEvent } = useMetaPixel();
  const { trackConversion } = useGoogleAdsConversion();
  const { hasUTM } = useUTMPayload();
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);
  const isWh = variant === "wh";
  const isBh = variant === "bh";
  const config = variantConfig[variant];
  const videoSrc = videoStarted ? `${config.videoUrl}&autoplay=1` : config.videoUrl;
  const heroStackClassName = isWh ? "space-y-6 sm:space-y-10 lg:space-y-14" : "space-y-8 sm:space-y-10 lg:space-y-14";
  const headlineClassName = isWh
    ? "text-[1.72rem] sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[0.98] tracking-[-0.05em] max-w-[21rem] mx-auto sm:max-w-none sm:leading-tight sm:tracking-tight"
    : isBh
      ? "text-2xl sm:text-[1.84rem] md:text-[2.08rem] lg:text-[2.3rem] xl:text-[2.56rem] font-bold leading-tight tracking-tight"
      : "text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight";
  const subheadlineClassName = isWh
    ? "text-[0.98rem] sm:text-lg lg:text-xl text-gray-200 max-w-[20.75rem] sm:max-w-3xl mx-auto leading-[1.42] sm:leading-relaxed"
    : "text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed";
  const subheadlineWrapperClassName = isWh ? "text-center px-1 -mt-2 sm:-mt-3" : "text-center";
  const ctaClassName = isWh
    ? "relative group inline-flex w-full max-w-[20.75rem] sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white font-bold py-3.5 px-5 lg:py-4 lg:px-8 rounded-xl text-[0.95rem] sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] items-center justify-center gap-2 sm:gap-3 border border-white/10 hover:border-white/20 no-underline"
    : "relative group inline-flex w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-xl text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:shadow-purple-500/30 hover:scale-[1.02] items-center justify-center gap-2 sm:gap-3 border border-white/10 hover:border-white/20 no-underline";

  useEffect(() => {
    if (variant !== "bh") {
      return;
    }

    const timer = setTimeout(() => {
      setShowStrikethrough(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [variant]);

  const handleVideoClick = () => {
    if (!videoStarted) {
      setVideoStarted(true);
      trackCustomEvent("VideoPlay", {
        video_title: config.videoTitle,
        video_duration: config.videoDuration,
        page: config.analyticsPageName,
        page_name: config.analyticsPageName,
      });
    }
  };

  const handleCTAClick = () => {
    trackCustomEvent("CTA_Click", {
      button_text: config.ctaLabel,
      page: config.analyticsPageName,
      page_name: config.analyticsPageName,
      has_utm: hasUTM,
      utm_payload: hasUTM ? "present" : "none",
    });

    trackConversion({
      conversionId: GOOGLE_ADS_CONVERSION_ID,
      conversionLabel: GOOGLE_ADS_CONVERSION_LABEL,
      value: 1.0,
      currency: "EUR",
    });
  };

  return (
    <>
      <MetaPixel pixelId={META_PIXEL_ID} />
      <UTMDebug show={process.env.NODE_ENV === "development"} />

      <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-black text-white ${inter.className}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 flex flex-col min-h-screen">
          <div className="text-center mb-4 sm:mb-8 lg:mb-4">
            <a
              href="https://lorea.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-2 sm:p-3 lg:px-4 rounded-xl bg-white border border-white/20 shadow-lg no-underline"
            >
              <Image
                src="/logo.svg"
                alt="Lorea"
                width={419}
                height={97}
                className="w-14 sm:w-20 lg:w-28 filter brightness-0"
              />
            </a>
          </div>

          <div className={`flex-1 flex flex-col justify-center ${heroStackClassName}`}>
            <div className={`text-center ${isWh ? "space-y-3 sm:space-y-6 lg:space-y-8" : "space-y-4 sm:space-y-6 lg:space-y-8"}`}>
              <h1 className={headlineClassName}>
                {config.headline(showStrikethrough)}
              </h1>
            </div>

            {config.subheadline && (
              <div className={subheadlineWrapperClassName}>
                <p className={subheadlineClassName}>
                  {config.subheadline}
                </p>
              </div>
            )}

            <div className="w-full">
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[1.35rem] sm:rounded-2xl lg:rounded-3xl blur-lg sm:blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[1.35rem] sm:rounded-2xl lg:rounded-3xl opacity-75 animate-pulse" />
                <div className="absolute -inset-px sm:-inset-0.5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-[1.35rem] sm:rounded-2xl lg:rounded-3xl" />

                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-[1.35rem] sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-white/10 sm:border-2 group-hover:border-white/20 transition-all duration-300">
                  {!videoStarted && (
                    <button
                      aria-label="Avvia video"
                      onClick={handleVideoClick}
                      className="absolute inset-0 z-20 w-full h-full cursor-pointer bg-transparent"
                      style={{ border: "none", padding: 0, margin: 0 }}
                    />
                  )}
                  <iframe
                    ref={videoRef}
                    src={videoSrc}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    className="w-full h-full"
                    title={`VSL - ${config.videoTitle}`}
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href={config.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCTAClick}
                className={`${ctaClassName} ${inter.className}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                {config.ctaLabel}
              </a>
            </div>
          </div>

          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent w-full max-w-md" />
            </div>
          </div>

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
