"use client";

import { useState } from "react";
import { Info, ChevronUp, ChevronDown } from "lucide-react";
import { useQR } from "../context/QRContext";
import Accordion from "./ui/Accordion";
import Input from "./ui/Input";
import StatsSection from "./sections/StatsSection";
import UrlConfigurationSection from "./sections/UrlConfigurationSection";
import ScanLimitSection from "./sections/ScanLimitSection";
import ConfigurationSection from "./sections/ConfigurationSection";

export default function VCardBuilder() {
    const { qrState, setQrName, updateQrData } = useQR();
    const [openSections, setOpenSections] = useState({
        basicInfo: true,
        stats: false,
        urlConfig: false,
        scanLimit: false,
        configuration: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const updateVCard = (field, value) => {
        updateQrData("basicInfo", field, value);
    };

    const { basicInfo = {} } = qrState.content;

    return (
        <div className="p-8 max-w-4xl mx-auto pb-32">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Complete the content of the QR
                </h1>
                <input
                    type="text"
                    placeholder="Name of your QR code..."
                    value={qrState.name}
                    onChange={(e) => setQrName(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
            </div>

            <div className="space-y-4">
                {/* Basic Information Section */}
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
                                <p className="text-sm text-gray-500">Contact card details.</p>
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
                                <div className="grid grid-cols-2 gap-4">
                                    <Input
                                        label="First Name"
                                        placeholder="John"
                                        value={basicInfo.firstName || ""}
                                        onChange={(e) => updateVCard("firstName", e.target.value)}
                                    />
                                    <Input
                                        label="Last Name"
                                        placeholder="Doe"
                                        value={basicInfo.lastName || ""}
                                        onChange={(e) => updateVCard("lastName", e.target.value)}
                                    />
                                </div>
                                <Input
                                    label="Job Title"
                                    placeholder="Product Manager"
                                    value={basicInfo.jobTitle || ""}
                                    onChange={(e) => updateVCard("jobTitle", e.target.value)}
                                />
                                <Input
                                    label="Company"
                                    placeholder="Company Name"
                                    value={basicInfo.company || ""}
                                    onChange={(e) => updateVCard("company", e.target.value)}
                                />
                                <Input
                                    label="Phone"
                                    type="tel"
                                    placeholder="+1 234 567 8900"
                                    value={basicInfo.phone || ""}
                                    onChange={(e) => updateVCard("phone", e.target.value)}
                                />
                                <Input
                                    label="Email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={basicInfo.email || ""}
                                    onChange={(e) => updateVCard("email", e.target.value)}
                                />
                                <Input
                                    label="Website"
                                    type="url"
                                    placeholder="https://example.com"
                                    value={basicInfo.website || ""}
                                    onChange={(e) => updateVCard("website", e.target.value)}
                                />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Address
                                    </label>
                                    <textarea
                                        placeholder="123 Main St, City, State, ZIP"
                                        rows="2"
                                        value={basicInfo.address || ""}
                                        onChange={(e) => updateVCard("address", e.target.value)}
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <StatsSection
                    isOpen={openSections.stats}
                    onToggle={() => toggleSection('stats')}
                />

                <UrlConfigurationSection
                    isOpen={openSections.urlConfig}
                    onToggle={() => toggleSection('urlConfig')}
                />

                <ScanLimitSection
                    isOpen={openSections.scanLimit}
                    onToggle={() => toggleSection('scanLimit')}
                />

                <ConfigurationSection
                    isOpen={openSections.configuration}
                    onToggle={() => toggleSection('configuration')}
                />
            </div>
        </div>
    );
}
