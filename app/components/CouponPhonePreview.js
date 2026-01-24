"use client";

import { Ticket, Tag, Clock } from "lucide-react";

export default function CouponPhonePreview() {
    return (
        <div className="fixed right-0 top-0 h-screen w-[400px] bg-white border-l border-gray-200 flex items-center justify-center p-8">
            <div className="relative">
                {/* Phone mockup */}
                <div className="w-[280px] h-[570px] bg-gray-900 rounded-[40px] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-gray-50 rounded-[32px] overflow-hidden relative">
                        {/* Status bar */}
                        <div className="h-6 bg-white flex items-center justify-between px-6 text-xs">
                            <span>9:41</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
                                <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 h-[calc(100%-24px)] overflow-y-auto flex items-center">
                            {/* Coupon Card */}
                            <div className="w-full">
                                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-t-2xl p-6 text-white relative overflow-hidden">
                                    {/* Decorative circles */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Ticket size={24} />
                                            <span className="text-sm font-medium">Special Offer</span>
                                        </div>
                                        <h2 className="text-4xl font-bold mb-2">50% OFF</h2>
                                        <p className="text-white/90">On your next purchase</p>
                                    </div>
                                </div>

                                {/* Dotted separator */}
                                <div className="relative h-0 border-t-2 border-dashed border-gray-300">
                                    <div className="absolute -left-6 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
                                    <div className="absolute -right-6 -top-3 w-6 h-6 bg-gray-50 rounded-full"></div>
                                </div>

                                {/* Coupon Details */}
                                <div className="bg-white rounded-b-2xl p-6 shadow-lg">
                                    <div className="mb-4">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                                            <Tag size={16} className="text-orange-600" />
                                            <span className="font-mono font-bold text-gray-900">SAVE50</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <Clock size={16} />
                                            <span>Valid until: Dec 31, 2024</span>
                                        </div>
                                    </div>

                                    <div className="border-t pt-4">
                                        <p className="text-xs text-gray-500 mb-2">Terms & Conditions:</p>
                                        <p className="text-xs text-gray-400">
                                            Valid for purchases over $50. Cannot be combined with other offers. One use per customer.
                                        </p>
                                    </div>

                                    <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold shadow-md">
                                        Redeem Now
                                    </button>
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
