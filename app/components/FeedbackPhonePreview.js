"use client";

import { MessageSquare, Star, Send } from "lucide-react";

export default function FeedbackPhonePreview() {
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
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <MessageSquare className="text-white" size={28} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  We Value Your Feedback
                </h2>
                <p className="text-sm text-gray-500">
                  Help us improve our service
                </p>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  How would you rate your experience?
                </label>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <button
                      key={i}
                      className={`p-2 rounded-lg transition-all ${
                        i < 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                    >
                      <Star
                        size={32}
                        className={i < 4 ? "fill-yellow-400" : ""}
                      />
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Excellent
                </p>
              </div>

              {/* Feedback Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Your Feedback
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your experience..."
                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md">
                  <Send size={18} />
                  Submit Feedback
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
