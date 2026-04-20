'use client';

import { useUTMPayload } from '@/hooks/useUTMPayload';

interface UTMDebugProps {
  show?: boolean;
}

export default function UTMDebug({ show = false }: UTMDebugProps) {
  const { payload, telegramDeepLink, hasUTM } = useUTMPayload();

  // Mostra solo in modalità debug
  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-sm z-50 border border-white/20">
      <h3 className="font-bold mb-2">🔍 UTM Debug</h3>
      
      <div className="space-y-1">
        <div>
          <span className="text-gray-400">Has UTM:</span> 
          <span className={`ml-2 ${hasUTM ? 'text-green-400' : 'text-red-400'}`}>
            {hasUTM ? '✅ Yes' : '❌ No'}
          </span>
        </div>
        
        {hasUTM && (
          <>
            <div>
              <span className="text-gray-400">Payload:</span>
              <div className="bg-gray-800 p-2 rounded mt-1 break-all">
                {payload || 'Empty'}
              </div>
            </div>
            
            <div>
              <span className="text-gray-400">Length:</span>
              <span className={`ml-2 ${payload.length <= 64 ? 'text-green-400' : 'text-red-400'}`}>
                {payload.length}/64 {payload.length <= 64 ? '✅' : '❌'}
              </span>
            </div>
            
            <div>
              <span className="text-gray-400">URL Safe:</span>
              <span className="ml-2 text-green-400">✅ Yes</span>
            </div>
            
            <div>
              <span className="text-gray-400">Deep Link:</span>
              <div className="bg-gray-800 p-2 rounded mt-1 break-all text-xs">
                {telegramDeepLink}
              </div>
            </div>
          </>
        )}
        
        <div className="mt-2 pt-2 border-t border-gray-600">
          <span className="text-gray-400">Current URL:</span>
          <div className="bg-gray-800 p-2 rounded mt-1 break-all text-xs">
            {typeof window !== 'undefined' ? window.location.href : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
} 