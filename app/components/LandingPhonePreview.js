"use client";

import { Layout, ArrowRight } from "lucide-react";

export default function LandingPhonePreview() {
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
              {/* Hero Section */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-6 text-white min-h-[200px] flex flex-col justify-center">
                <h1 className="text-2xl font-bold mb-3">
                  Welcome to Our Landing Page
                </h1>
                <p className="text-white/90 mb-4 text-sm">
                  Discover amazing features and transform your experience
                </p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold text-sm w-fit flex items-center gap-2">
                  Get Started
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Features */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-4">Features</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Easy to Use",
                      desc: "Simple and intuitive interface",
                    },
                    {
                      title: "Fast Performance",
                      desc: "Lightning-fast loading times",
                    },
                    { title: "Secure", desc: "Your data is safe with us" },
                  ].map((feature, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-500">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold">
                  Learn More
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
