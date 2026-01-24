"use client";

import {
  Music,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

export default function MP3PhonePreview() {
  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] bg-white border-l border-gray-200 flex items-center justify-center p-8">
      <div className="relative">
        {/* Phone mockup */}
        <div className="w-[280px] h-[570px] bg-gray-900 rounded-[40px] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-[32px] overflow-hidden relative">
            {/* Status bar */}
            <div className="h-6 flex items-center justify-between px-6 text-xs text-white">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-3 border border-white rounded-sm"></div>
                <div className="w-3 h-3 border border-white rounded-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 h-[calc(100%-24px)] flex flex-col items-center justify-center text-white">
              {/* Album Art */}
              <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-2xl mb-8 flex items-center justify-center shadow-2xl">
                <Music size={64} className="text-white/80" />
              </div>

              {/* Track Info */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Track Title</h2>
                <p className="text-white/80">Artist Name</p>
              </div>

              {/* Progress Bar */}
              <div className="w-full mb-4">
                <div className="w-full h-1 bg-white/30 rounded-full mb-2">
                  <div className="w-1/3 h-full bg-white rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6 mb-6">
                <button className="text-white/80 hover:text-white">
                  <SkipBack size={28} />
                </button>
                <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-lg">
                  <Play size={28} fill="currentColor" className="ml-1" />
                </button>
                <button className="text-white/80 hover:text-white">
                  <SkipForward size={28} />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3 w-full">
                <Volume2 size={20} className="text-white/70" />
                <div className="flex-1 h-1 bg-white/30 rounded-full">
                  <div className="w-2/3 h-full bg-white rounded-full"></div>
                </div>
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
