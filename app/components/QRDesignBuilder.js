"use client";

import { Palette, Sparkles } from "lucide-react";

export default function QRDesignBuilder() {
    return (
        <div className="p-8 max-w-4xl mx-auto pb-32">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Customize your QR design
                </h1>
                <p className="text-gray-600 mb-6">
                    Personalize the appearance of your QR code to match your brand.
                </p>
            </div>

            <div className="space-y-6">
                {/* QR Code Style */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Palette className="text-blue-600" size={24} />
                        <h3 className="font-semibold text-gray-900">QR Code Style</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="border-2 border-blue-500 rounded-lg p-4 cursor-pointer bg-blue-50">
                            <div className="aspect-square bg-white rounded flex items-center justify-center mb-2">
                                <div className="w-16 h-16 grid grid-cols-3 gap-0.5">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="bg-black rounded-sm"></div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-center">Square</p>
                        </div>

                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                            <div className="aspect-square bg-white rounded flex items-center justify-center mb-2">
                                <div className="w-16 h-16 grid grid-cols-3 gap-0.5">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="bg-black rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-center">Dots</p>
                        </div>

                        <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50">
                            <div className="aspect-square bg-white rounded flex items-center justify-center mb-2">
                                <div className="w-16 h-16 grid grid-cols-3 gap-0.5">
                                    {[...Array(9)].map((_, i) => (
                                        <div key={i} className="bg-black rounded"></div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-center">Rounded</p>
                        </div>
                    </div>
                </div>

                {/* Colors */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="text-blue-600" size={24} />
                        <h3 className="font-semibold text-gray-900">Colors</h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Foreground Color</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    defaultValue="#000000"
                                    className="w-12 h-12 rounded border border-gray-200 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    defaultValue="#000000"
                                    className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Background Color</label>
                            <div className="flex gap-2">
                                <input
                                    type="color"
                                    defaultValue="#FFFFFF"
                                    className="w-12 h-12 rounded border border-gray-200 cursor-pointer"
                                />
                                <input
                                    type="text"
                                    defaultValue="#FFFFFF"
                                    className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Upload */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Add Logo (Optional)</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Sparkles className="text-gray-400" size={24} />
                        </div>
                        <p className="text-sm text-gray-600">Click to upload logo</p>
                        <p className="text-xs text-gray-400 mt-1">PNG, JPG (MAX. 2MB)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
