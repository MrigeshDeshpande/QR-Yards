"use client";

import { Building2, Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

export default function BusinessPhonePreview() {
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
                        <div className="h-[calc(100%-24px)] overflow-y-auto">
                            {/* Header/Cover */}
                            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-3">
                                    <Building2 className="text-blue-600" size={32} />
                                </div>
                                <h2 className="text-xl font-bold mb-1">My Business</h2>
                                <p className="text-sm text-white/90">Professional Services</p>
                            </div>

                            {/* About */}
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">About Us</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    We provide exceptional services to help your business grow and succeed in the modern marketplace.
                                </p>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <Phone className="text-blue-600 mt-0.5" size={18} />
                                        <div>
                                            <p className="text-xs text-gray-500">Phone</p>
                                            <p className="text-sm font-medium">+1 234 567 8900</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Mail className="text-blue-600 mt-0.5" size={18} />
                                        <div>
                                            <p className="text-xs text-gray-500">Email</p>
                                            <p className="text-sm font-medium">info@business.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-blue-600 mt-0.5" size={18} />
                                        <div>
                                            <p className="text-xs text-gray-500">Address</p>
                                            <p className="text-sm font-medium">123 Business St, City, State</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Clock className="text-blue-600 mt-0.5" size={18} />
                                        <div>
                                            <p className="text-xs text-gray-500">Hours</p>
                                            <p className="text-sm font-medium">Mon-Fri: 9AM - 6PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Globe className="text-blue-600 mt-0.5" size={18} />
                                        <div>
                                            <p className="text-xs text-gray-500">Website</p>
                                            <p className="text-sm font-medium">www.business.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium">
                                    Contact Us
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
