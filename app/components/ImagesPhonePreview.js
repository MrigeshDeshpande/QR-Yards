"use client";

import { ImageIcon } from "lucide-react";

export default function ImagesPhonePreview() {
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
            <div className="p-4 h-[calc(100%-24px)] overflow-y-auto">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Image Gallery
              </h2>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center"
                  >
                    <ImageIcon className="text-blue-400" size={32} />
                  </div>
                ))}
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-3 gap-2">
                {[5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center"
                  >
                    <ImageIcon className="text-green-400" size={24} />
                  </div>
                ))}
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
