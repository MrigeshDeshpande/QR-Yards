"use client";

import { ScanLine } from "lucide-react";

export default function BarcodePhonePreview() {
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
                            {/* Header */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <ScanLine className="text-blue-600" size={32} />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-1">2D Barcode</h2>
                                <p className="text-sm text-gray-500">GS1 Standard Compliant</p>
                            </div>

                            {/* Barcode Display */}
                            <div className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
                                {/* Simulated Data Matrix Barcode */}
                                <div className="grid grid-cols-12 gap-0.5">
                                    {Array.from({ length: 144 }, (_, i) => (
                                        <div
                                            key={i}
                                            className={`aspect-square ${Math.random() > 0.5
                                                    ? "bg-gray-900"
                                                    : "bg-white"
                                                }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            {/* Barcode Info */}
                            <div className="w-full space-y-3 mb-6">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-xs text-gray-500 mb-1">Barcode Type</p>
                                    <p className="text-sm font-semibold text-gray-900">Data Matrix</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-xs text-gray-500 mb-1">Encoded Data</p>
                                    <p className="text-sm font-mono text-gray-900">01234567890123</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-xs text-gray-500 mb-1">Standard</p>
                                    <p className="text-sm font-semibold text-gray-900">GS1 DataMatrix</p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="text-center">
                                <p className="text-xs text-gray-500">
                                    Scan with a compatible barcode reader
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
