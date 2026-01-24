"use client";

import { Play, Volume2, Maximize } from "lucide-react";

export default function VideoPhonePreview() {
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
                            <h2 className="text-lg font-bold text-gray-900 mb-4">Video Player</h2>

                            {/* Video Player */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg aspect-video mb-4 flex items-center justify-center">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                                <button className="relative z-10 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                    <Play className="text-gray-900 ml-1" size={28} fill="currentColor" />
                                </button>

                                {/* Video Controls */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                    <div className="w-full h-1 bg-white/30 rounded-full mb-2">
                                        <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center justify-between text-white text-xs">
                                        <span>1:23</span>
                                        <div className="flex gap-3">
                                            <Volume2 size={16} />
                                            <Maximize size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="space-y-2">
                                <h3 className="font-semibold text-gray-900">Video Title</h3>
                                <p className="text-sm text-gray-500">
                                    Watch this amazing video content about our product and services.
                                </p>
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
