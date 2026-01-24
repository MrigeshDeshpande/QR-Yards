"use client";

import {
  ExternalLink,
  Globe,
  FileText,
  ShoppingBag,
  Calendar,
} from "lucide-react";

export default function LinksPhonePreview() {
  const links = [
    {
      icon: Globe,
      title: "Website",
      url: "example.com",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: FileText,
      title: "Documentation",
      url: "docs.example.com",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: ShoppingBag,
      title: "Store",
      url: "store.example.com",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      url: "book.example.com",
      color: "bg-orange-100 text-orange-600",
    },
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
            <div className="p-4 h-[calc(100%-24px)] overflow-y-auto">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  My Links
                </h2>
                <p className="text-sm text-gray-500">
                  All your important links in one place
                </p>
              </div>

              {/* Links List */}
              <div className="space-y-3">
                {links.map((link, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 transition-all"
                  >
                    <div className={`p-3 rounded-lg ${link.color}`}>
                      <link.icon size={20} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {link.title}
                      </h3>
                      <p className="text-xs text-gray-500">{link.url}</p>
                    </div>
                    <ExternalLink className="text-gray-400" size={16} />
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
