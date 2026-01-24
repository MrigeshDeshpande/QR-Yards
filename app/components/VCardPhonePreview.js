"use client";

import { User, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function VCardPhonePreview() {
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
                            {/* Profile Header */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-3">
                                    <User className="text-white" size={40} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                                <p className="text-sm text-gray-500">Product Manager</p>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Phone className="text-blue-600" size={20} />
                                    <div>
                                        <p className="text-xs text-gray-500">Phone</p>
                                        <p className="text-sm font-medium">+1 234 567 8900</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Mail className="text-blue-600" size={20} />
                                    <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <p className="text-sm font-medium">john@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <MapPin className="text-blue-600" size={20} />
                                    <div>
                                        <p className="text-xs text-gray-500">Address</p>
                                        <p className="text-sm font-medium">123 Main St, City</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Globe className="text-blue-600" size={20} />
                                    <div>
                                        <p className="text-xs text-gray-500">Website</p>
                                        <p className="text-sm font-medium">www.example.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Save Contact Button */}
                            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium">
                                Save Contact
                            </button>
                        </div>
                    </div>
                </div>

                {/* Phone button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-700 rounded-full"></div>
            </div>
        </div>
    );
}
