"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { useQR } from "../context/QRContext";
import Accordion from "./ui/Accordion";
import Switch from "./ui/Switch";
import Input from "./ui/Input";

// Import reusable section components
import TimeSchedulingSection from "./sections/TimeSchedulingSection";
import StatsSection from "./sections/StatsSection";
import UrlConfigurationSection from "./sections/UrlConfigurationSection";
import ScanLimitSection from "./sections/ScanLimitSection";
import ConfigurationSection from "./sections/ConfigurationSection";

export default function WebsiteBuilder() {
    const { qrState, setQrName, updateQrData } = useQR();
    const [openSections, setOpenSections] = useState({
        timeScheduling: false,
        basicInfo: true,
        stats: false,
        urlConfig: false,
        scanLimit: false,
        configuration: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="p-8 max-w-4xl mx-auto pb-32">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                    Complete the content of the QR
                </h1>

                <Input
                    placeholder="Name of your QR code..."
                    value={qrState.name}
                    onChange={(e) => setQrName(e.target.value)}
                    className="w-full text-lg"
                />
            </div>

            <div className="space-y-4">
                <TimeSchedulingSection
                    isOpen={openSections.timeScheduling}
                    onToggle={() => toggleSection('timeScheduling')}
                />

                <Accordion
                    title="Basic Information"
                    icon={Info}
                    subtitle="Add essential information."
                    isOpen={openSections.basicInfo}
                    onToggle={() => toggleSection('basicInfo')}
                >
                    <div className="space-y-4 mt-4">
                        <div className="flex flex-col gap-3">
                            <Switch
                                label="Multi-Language Support"
                                checked={qrState.content.basicInfo?.multiLanguage}
                                onChange={(val) => updateQrData('basicInfo', 'multiLanguage', val)}
                            />
                            <Switch
                                label="Multi-country support"
                                checked={qrState.content.basicInfo?.multiCountry}
                                onChange={(val) => updateQrData('basicInfo', 'multiCountry', val)}
                            />
                        </div>

                        <Input
                            label="Website URL"
                            value={qrState.content.url}
                            onChange={(e) => updateQrData(null, 'url', e.target.value)}
                            placeholder="E.g. https://www.myweb.com/"
                            required
                        />

                        <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-50">
                            Edit parameters
                        </button>
                    </div>
                </Accordion>

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
