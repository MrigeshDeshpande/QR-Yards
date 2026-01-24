"use client";

import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function EventPhonePreview() {
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
              {/* Event Header */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 text-white">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3">
                  UPCOMING EVENT
                </div>
                <h2 className="text-2xl font-bold mb-2">
                  Annual Tech Conference 2024
                </h2>
                <p className="text-white/90 text-sm">
                  Join us for an amazing experience
                </p>
              </div>

              {/* Event Details */}
              <div className="p-4">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Date</p>
                      <p className="text-sm font-semibold text-gray-900">
                        January 15, 2024
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Time</p>
                      <p className="text-sm font-semibold text-gray-900">
                        6:00 PM - 10:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Location</p>
                      <p className="text-sm font-semibold text-gray-900">
                        Convention Center, Main Hall
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Attendees</p>
                      <p className="text-sm font-semibold text-gray-900">
                        500+ registered
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    About Event
                  </h3>
                  <p className="text-sm text-gray-600">
                    Join industry leaders and innovators for a day of inspiring
                    talks, networking, and hands-on workshops.
                  </p>
                </div>

                {/* Register Button */}
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md">
                  Register Now
                </button>

                {/* Add to Calendar */}
                <button className="w-full mt-3 border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                  <Calendar size={18} />
                  Add to Calendar
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
