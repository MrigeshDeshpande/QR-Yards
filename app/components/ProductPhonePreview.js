"use client";

import { Package, Star, ShoppingCart } from "lucide-react";

export default function ProductPhonePreview() {
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
                            {/* Product Image */}
                            <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-square flex items-center justify-center">
                                <Package className="text-gray-400" size={80} />
                            </div>

                            {/* Product Details */}
                            <div className="p-4">
                                {/* Title and Rating */}
                                <div className="mb-3">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2">Product Name</h2>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">(128 reviews)</span>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-bold text-gray-900">$99</span>
                                        <span className="text-lg text-gray-400 line-through">$149</span>
                                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
                                            33% OFF
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                                    <p className="text-sm text-gray-600">
                                        High-quality product with amazing features. Perfect for everyday use and built to last.
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="mb-6">
                                    <h3 className="font-semibold text-gray-900 mb-2">Features</h3>
                                    <ul className="space-y-1">
                                        {["Premium quality", "1 year warranty", "Free shipping"].map((feature, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                                    <ShoppingCart size={20} />
                                    Add to Cart
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
