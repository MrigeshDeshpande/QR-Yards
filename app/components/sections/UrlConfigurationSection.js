"use client";

import { Link as LinkIcon } from "lucide-react";
import { useQR } from "../../context/QRContext";
import Accordion from "../ui/Accordion";
import Switch from "../ui/Switch";

export default function UrlConfigurationSection({ isOpen, onToggle }) {
  const { qrState, updateQrData } = useQR();

  return (
    <Accordion
      title="URL configuration"
      icon={LinkIcon}
      subtitle="Customize your qrty.com address identifier."
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="mt-4">
        <Switch
          label="Auto Generate"
          checked={qrState.content.urlConfig?.autoGenerate}
          onChange={(val) => updateQrData("urlConfig", "autoGenerate", val)}
          className="mb-4"
        />

        <div className="bg-gray-50 p-3 rounded-lg text-gray-400 text-sm">
          https://qrty.com/p/
          {qrState.content.urlConfig?.autoGenerate
            ? "(Auto generated)"
            : qrState.content.urlConfig?.customUrl || "..."}
        </div>
      </div>
    </Accordion>
  );
}
