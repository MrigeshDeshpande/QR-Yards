"use client";

import { useState } from "react";
import {
  Clock,
  Info,
  PieChart,
  Settings,
  ChevronDown,
  ChevronUp,
  FileText,
  Lock,
  Folder,
  Link as LinkIcon,
  Upload,
  Layout,
} from "lucide-react";

export default function PDFBuilder() {
  const [qrName, setQrName] = useState("");
  const [openSections, setOpenSections] = useState({
    timeScheduling: false,
    customTemplate: true,
    basicInfo: true,
    stats: false,
    urlConfig: false,
    scanLimit: false,
    configuration: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="p-8 max-w-4xl mx-auto pb-32">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Complete the content of the QR
        </h1>

        <input
          type="text"
          placeholder="Name of your QR code..."
          value={qrName}
          onChange={(e) => setQrName(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      <div className="space-y-4">
        {/* Time Scheduling */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("timeScheduling")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Time Scheduling</h3>
                <p className="text-sm text-gray-500">
                  Create the time ranges for your business and then apply them
                  to your products.
                </p>
              </div>
            </div>
            {openSections.timeScheduling ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>

          {openSections.timeScheduling && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              <div className="flex items-center gap-3 mt-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Enable time ranges
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Custom Template Section */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("customTemplate")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Layout size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Custom Template</h3>
                <p className="text-sm text-gray-500">
                  Choose a pre-designed template for your PDF viewer.
                </p>
              </div>
            </div>
            {openSections.customTemplate ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>

          {openSections.customTemplate && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              <div className="space-y-4 mt-4">
                <p className="text-sm text-gray-600 mb-4">
                  Select a template style for your PDF display page
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="border-2 border-blue-500 bg-blue-50 rounded-lg p-4 cursor-pointer hover:bg-blue-100 transition-colors">
                    <div className="aspect-video bg-white rounded mb-2 flex items-center justify-center">
                      <FileText size={32} className="text-blue-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 text-center">
                      Classic
                    </p>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded mb-2 flex items-center justify-center">
                      <FileText size={32} className="text-purple-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 text-center">
                      Modern
                    </p>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded mb-2 flex items-center justify-center">
                      <FileText size={32} className="text-white" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 text-center">
                      Dark
                    </p>
                  </div>

                  <div className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded mb-2 flex items-center justify-center">
                      <FileText size={32} className="text-green-600" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900 text-center">
                      Minimal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("basicInfo")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Info size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Basic Information
                </h3>
                <p className="text-sm text-gray-500">
                  Upload your PDF and add essential information.
                </p>
              </div>
            </div>
            {openSections.basicInfo ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>

          {openSections.basicInfo && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    PDF Title
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Product Catalog 2024"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Brief description of your PDF"
                    rows={3}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Upload PDF
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      PDF (MAX. 10MB)
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Required field</p>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Allow download
                    </span>
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      Show page counter
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("stats")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <PieChart size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Stats</h3>
                <p className="text-sm text-gray-500">
                  Key tools and data to evaluate performance.
                </p>
              </div>
            </div>
            {openSections.stats ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>

          {openSections.stats && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-4">
                  <ChevronDown size={16} /> Schedule a date
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                  Set the dates on which your content will be shown through the
                  QR. At the end of that period, it will be disabled.
                </p>
                <label className="relative inline-flex items-center cursor-pointer mb-6">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Activate the schedule to work during certain dates
                  </span>
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Since
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-200 rounded-lg text-sm text-gray-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Until
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-200 rounded-lg text-sm text-gray-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* URL Configuration */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("urlConfig")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <LinkIcon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  URL configuration
                </h3>
                <p className="text-sm text-gray-500">
                  Customize your qrty.com address identifier.
                </p>
              </div>
            </div>
            {openSections.urlConfig ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>
          {openSections.urlConfig && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              <div className="mt-4">
                <label className="relative inline-flex items-center cursor-pointer mb-4">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Auto Generate
                  </span>
                </label>

                <div className="bg-gray-50 p-3 rounded-lg text-gray-400 text-sm">
                  https://qrty.com/p/(Auto generated)
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Scan Limit */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("scanLimit")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Settings size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Scan limit</h3>
                <p className="text-sm text-gray-500">
                  Limit the number of times your QR can be scanned in total.
                </p>
              </div>
            </div>
            {openSections.scanLimit ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>
          {openSections.scanLimit && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              <div className="mt-4">
                <label className="relative inline-flex items-center cursor-pointer mb-4">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Enable scan limit
                  </span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Configuration */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection("configuration")}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Settings size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Configuration</h3>
                <p className="text-sm text-gray-500">
                  Customized settings to optimize your experience.
                </p>
              </div>
            </div>
            {openSections.configuration ? (
              <ChevronUp className="text-gray-400" />
            ) : (
              <ChevronDown className="text-gray-400" />
            )}
          </button>

          {openSections.configuration && (
            <div className="p-6 pt-0 border-t border-gray-100 mt-2">
              {/* Folder */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
                  <ChevronDown size={16} /> Folder
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Organize your QR codes in different folders.
                </p>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-700">
                    <option>No folder</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              {/* Domain */}
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
                  <ChevronDown size={16} /> Domain
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                  Now you can use your own domain in your QR codes. Add and
                  configure a custom domain...
                </p>
                <div className="relative mb-3">
                  <select
                    className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-700"
                    disabled
                  >
                    <option>qrty.com</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-3 text-gray-400 pointer-events-none"
                    size={20}
                  />
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Refresh
                  </button>
                  <button className="px-4 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-full flex items-center gap-1">
                    + Add domain
                  </button>
                </div>
              </div>

              {/* Password */}
              <div className="mt-6 mb-4">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
                  <ChevronDown size={16} /> Password
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                  Add an access control to display the content and a password
                  will be requested...
                </p>
                <label className="relative inline-flex items-center cursor-pointer mb-4">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900">
                    Activate password to access the QR code
                  </span>
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-400 cursor-not-allowed"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
