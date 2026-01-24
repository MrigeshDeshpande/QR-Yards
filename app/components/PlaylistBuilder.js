"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { useQR } from "../context/QRContext";
import Accordion from "./ui/Accordion";
import Input from "./ui/Input";

// Import reusable section components
import TimeSchedulingSection from "./sections/TimeSchedulingSection";
import StatsSection from "./sections/StatsSection";
import UrlConfigurationSection from "./sections/UrlConfigurationSection";
import ScanLimitSection from "./sections/ScanLimitSection";
import ConfigurationSection from "./sections/ConfigurationSection";

export default function PlaylistBuilder() {
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
          onToggle={() => toggleSection("timeScheduling")}
        />

        <Accordion
          title="Basic Information"
          icon={Info}
          subtitle="Playlist configuration details."
          isOpen={openSections.basicInfo}
          onToggle={() => toggleSection("basicInfo")}
        >
          <div className="space-y-4 mt-4">
            <Input
              label="Playlist Name"
              placeholder="My Playlist"
              value={qrState.content.playlistName || ""}
              onChange={(e) =>
                updateQrData(null, "playlistName", e.target.value)
              }
            />
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Playlist description"
                rows="3"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                value={qrState.content.playlistDescription || ""}
                onChange={(e) =>
                  updateQrData(null, "playlistDescription", e.target.value)
                }
              ></textarea>
            </div>
          </div>
        </Accordion>

        <StatsSection
          isOpen={openSections.stats}
          onToggle={() => toggleSection("stats")}
        />

        <UrlConfigurationSection
          isOpen={openSections.urlConfig}
          onToggle={() => toggleSection("urlConfig")}
        />

        <ScanLimitSection
          isOpen={openSections.scanLimit}
          onToggle={() => toggleSection("scanLimit")}
        />

        <ConfigurationSection
          isOpen={openSections.configuration}
          onToggle={() => toggleSection("configuration")}
        />
      </div>
    </div>
  );
}
