"use client";

import { Globe, Pencil, Info } from "lucide-react";
import { useQR } from "../context/QRContext";

export default function WebsitePhonePreview() {
  const { qrState } = useQR();
  const { url } = qrState.content;

  // Helper to format URL for display
  const displayUrl = url ? url : "https://www.web.com";
  const iframeUrl =
    url && (url.startsWith("http://") || url.startsWith("https://"))
      ? url
      : null;

  return (
    <div className="hidden xl:flex flex-col items-center justify-center bg-gray-50 p-8 min-h-[calc(100vh-64px)] fixed right-0 w-[400px] border-l border-gray-200">
      <div className="flex items-center justify-between w-[300px] mb-8 text-blue-600">
        <div className="flex items-center gap-2">
          <Globe size={20} />
          <span className="font-semibold capitalize">
            {qrState.type || "Website"}
          </span>
        </div>
        <button className="text-gray-400 hover:text-blue-600">
          <Pencil size={16} />
        </button>
      </div>

      <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-xl border-4 border-gray-800">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>

        {/* Screen Content */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
          {/* Fake Browser Bar */}
          <div className="pt-8 px-4 pb-2 bg-gray-50 border-b border-gray-100">
            <div className="flex gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
            </div>
            <div className="bg-white border border-gray-200 rounded px-2 py-1 flex items-center justify-between whitespace-nowrap overflow-hidden">
              <span className="text-[10px] text-gray-400 truncate">
                {displayUrl}
              </span>
            </div>
          </div>

          <div className="flex-1 flex flex-col bg-white relative">
            {iframeUrl ? (
              <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                {/* Since we can't easily iframe all sites due to X-Frame-Options, we show a preview placeholder if url is set */}
                <div className="p-4 bg-blue-50 rounded-xl mb-4 text-blue-600 w-full aspect-video flex items-center justify-center">
                  <Globe size={40} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Website Preview
                </h3>
                <p className="text-sm text-gray-500 break-all">{url}</p>
                <p className="text-xs text-gray-400 mt-4">
                  Actual site will be loaded in the final QR code.
                </p>
              </div>
            ) : (
              // Skeleton Loader state
              <div className="p-4 flex-1 flex flex-col gap-4 overflow-y-auto">
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gray-400 rounded"></div>
                  <div className="ml-auto w-4 h-4 bg-gray-300 rounded-sm self-center"></div>
                </div>
                <div className="w-full aspect-video bg-gray-400 rounded-lg flex items-center justify-center text-white">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <div className="space-y-2 mt-2">
                  <div className="w-full h-2 bg-gray-400 rounded"></div>
                  <div className="w-2/3 h-2 bg-gray-400 rounded mx-auto"></div>
                </div>
                <div className="w-full h-12 bg-gray-400 rounded mt-2"></div>
                <div className="mt-auto flex justify-between px-4 pb-4">
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-800 rounded-l"></div>
        <div className="absolute top-36 -left-1 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute top-28 -right-1 w-1 h-12 bg-gray-800 rounded-r"></div>
      </div>

      <div className="mt-8 p-4 bg-white rounded-xl flex items-center gap-3 shadow-sm border border-gray-100 max-w-[300px]">
        <Info size={16} className="text-gray-400 shrink-0" />
        <p className="text-xs text-gray-500">
          IMPORTANT: Do not forget to test your QR code
        </p>
      </div>
    </div>
  );
}
