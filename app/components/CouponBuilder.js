"use client";

import { useState } from "react";
import { Info, Clock, ChevronUp, ChevronDown } from "lucide-react";
import { useQR } from "../context/QRContext";
import Accordion from "./ui/Accordion";
import Input from "./ui/Input";
import TimeSchedulingSection from "./sections/TimeSchedulingSection";
import StatsSection from "./sections/StatsSection";
import UrlConfigurationSection from "./sections/UrlConfigurationSection";
import ScanLimitSection from "./sections/ScanLimitSection";
import ConfigurationSection from "./sections/ConfigurationSection";

export default function CouponBuilder() {
    const { qrState, setQrName, updateQrData } = useQR();
    const [openSections, setOpenSections] = useState({
        timeScheduling: false,
        basicInfo: true,
        stats: false,
        urlConfig: false,
        scanLimit: false,
        configuration: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const updateCoupon = (field, value) => {
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
                <TimeSchedulingSection
                    isOpen={openSections.timeScheduling}
                    onToggle={() => toggleSection('timeScheduling')}
                />

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
                                <p className="text-sm text-gray-500">
                                    Coupon configuration details.
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
                                <Input
                                    label="Coupon Title"
                                    placeholder="E.g. 20% Off"
                                    value={basicInfo.couponTitle || ""}
                                    onChange={(e) => updateCoupon("couponTitle", e.target.value)}
                                />
                                <Input
                                    label="Coupon Code"
                                    placeholder="SAVE20"
                                    value={basicInfo.couponCode || ""}
                                    onChange={(e) => updateCoupon("couponCode", e.target.value)}
                                />
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        placeholder="Terms and conditions"
                                        rows="3"
                                        value={basicInfo.description || ""}
                                        onChange={(e) => updateCoupon("description", e.target.value)}
                                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                                    ></textarea>
                                </div>
                                <Input
                                    label="Valid Until"
                                    type="text"
                                    placeholder="Expiry date"
                                    value={basicInfo.validUntil || ""}
                                    onChange={(e) => updateCoupon("validUntil", e.target.value)}
                                />
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
