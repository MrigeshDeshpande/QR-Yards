"use client";

import { Smartphone, Apple } from "lucide-react";

export default function AppsPhonePreview() {
  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] bg-white border-l border-gray-200 flex items-center justify-center p-8">
      <div className="relative">
        {/* Phone mockup */}
        <div className="w-[280px] h-[570px] bg-gray-900 rounded-[40px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
            {/* Status bar */}
            <div className="h-6 bg-gray-50 flex items-center justify-between px-6 text-xs">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
                <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 h-[calc(100%-24px)] overflow-y-auto flex flex-col items-center justify-center">
              {/* App Icon */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 flex items-center justify-center shadow-xl">
                <Smartphone className="text-white" size={64} />
              </div>

              {/* App Info */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">My App</h2>
              <p className="text-sm text-gray-500 text-center mb-2">
                App Developer
              </p>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.8</span>
              </div>

              <p className="text-sm text-gray-600 text-center mb-8 px-4">
                Download our app to get access to exclusive features and stay
                connected with us.
              </p>

              {/* Download Buttons */}
              <div className="w-full space-y-3">
                <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 px-4 rounded-xl font-medium">
                  <Apple size={24} />
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold -mt-1">App Store</div>
                  </div>
                </button>

                <button className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-3 px-4 rounded-xl font-medium">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold -mt-1">
                      Google Play
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Phone button */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}
