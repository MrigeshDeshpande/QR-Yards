"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react";

export default function SocialPhonePreview() {
    const socials = [
        { icon: Facebook, name: "Facebook", handle: "@username", color: "bg-blue-600" },
        { icon: Twitter, name: "Twitter", handle: "@username", color: "bg-sky-500" },
        { icon: Instagram, name: "Instagram", handle: "@username", color: "bg-gradient-to-tr from-purple-600 to-pink-500" },
        { icon: Linkedin, name: "LinkedIn", handle: "@username", color: "bg-blue-700" },
        { icon: Youtube, name: "YouTube", handle: "@username", color: "bg-red-600" },
        { icon: Github, name: "GitHub", handle: "@username", color: "bg-gray-800" },
    ];

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
                        <div className="p-4 h-[calc(100%-24px)] overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                            {/* Header */}
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                                    JD
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                                <p className="text-sm text-gray-500">Connect with me</p>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-3">
                                {socials.map((social, index) => (
                                    <button
                                        key={index}
                                        className={`w-full flex items-center gap-4 p-4 ${social.color} text-white rounded-xl shadow-md hover:shadow-lg transition-all`}
                                    >
                                        <social.icon size={24} />
                                        <div className="flex-1 text-left">
                                            <h3 className="font-semibold text-sm">{social.name}</h3>
                                            <p className="text-xs opacity-90">{social.handle}</p>
                                        </div>
                                    </button>
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
