"use client";

import { Music2, Play, Pause } from "lucide-react";

export default function PlaylistPhonePreview() {
    const songs = [
        { title: "Summer Vibes", artist: "Artist Name", duration: "3:45" },
        { title: "Midnight Dreams", artist: "Another Artist", duration: "4:12" },
        { title: "Ocean Waves", artist: "The Band", duration: "3:58" },
        { title: "City Lights", artist: "DJ Mix", duration: "5:23" },
    ];

    return (
        <div className="fixed right-0 top-0 h-screen w-[400px] bg-white border-l border-gray-200 flex items-center justify-center p-8">
            <div className="relative">
                {/* Phone mockup */}
                <div className="w-[280px] h-[570px] bg-gray-900 rounded-[40px] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-[32px] overflow-hidden relative">
                        {/* Status bar */}
                        <div className="h-6 flex items-center justify-between px-6 text-xs text-white">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-3 border border-white rounded-sm"></div>
                                <div className="w-3 h-3 border border-white rounded-full"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 h-[calc(100%-24px)] overflow-y-auto">
                            {/* Playlist Header */}
                            <div className="mb-6">
                                <div className="w-full aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center shadow-xl">
                                    <Music2 size={80} className="text-white/90" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-1">My Playlist</h2>
                                <p className="text-gray-400 text-sm">{songs.length} songs • 17 min</p>
                            </div>

                            {/* Play All Button */}
                            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold mb-6 flex items-center justify-center gap-2 shadow-lg">
                                <Play size={20} fill="currentColor" />
                                Play All
                            </button>

                            {/* Song List */}
                            <div className="space-y-2">
                                {songs.map((song, i) => (
                                    <div
                                        key={i}
                                        className={`flex items-center gap-3 p-3 rounded-lg ${i === 0
                                                ? "bg-white/10"
                                                : "hover:bg-white/5"
                                            } transition-colors`}
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                            {i === 0 ? (
                                                <Pause size={20} className="text-white" />
                                            ) : (
                                                <Play size={20} className="text-white ml-0.5" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-white text-sm truncate">
                                                {song.title}
                                            </h4>
                                            <p className="text-xs text-gray-400 truncate">{song.artist}</p>
                                        </div>
                                        <span className="text-xs text-gray-400">{song.duration}</span>
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
