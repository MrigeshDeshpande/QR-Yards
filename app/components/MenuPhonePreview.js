"use client";

import { Utensils, DollarSign } from "lucide-react";

export default function MenuPhonePreview() {
  const menuItems = [
    {
      name: "Classic Burger",
      desc: "Beef patty, lettuce, tomato",
      price: "$12",
    },
    { name: "Caesar Salad", desc: "Romaine, parmesan, croutons", price: "$10" },
    {
      name: "Margherita Pizza",
      desc: "Tomato, mozzarella, basil",
      price: "$15",
    },
    { name: "Grilled Salmon", desc: "Fresh salmon, vegetables", price: "$22" },
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
            <div className="h-[calc(100%-24px)] overflow-y-auto">
              {/* Header */}
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Utensils size={28} />
                  <div>
                    <h2 className="text-xl font-bold">Restaurant Name</h2>
                    <p className="text-sm text-white/90">
                      Fine Dining Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-amber-500 rounded"></span>
                  Today&apos;s Menu
                </h3>

                <div className="space-y-3">
                  {menuItems.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:border-amber-500 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">
                          {item.name}
                        </h4>
                        <span className="font-bold text-amber-600 flex items-center gap-0.5">
                          <DollarSign size={14} />
                          {item.price.slice(1)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Categories */}
                <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                  {["All", "Starters", "Mains", "Desserts", "Drinks"].map(
                    (cat, i) => (
                      <button
                        key={i}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                          i === 0
                            ? "bg-amber-500 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {cat}
                      </button>
                    ),
                  )}
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
