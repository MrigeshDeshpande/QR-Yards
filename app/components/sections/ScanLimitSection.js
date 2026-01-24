"use client";

import { Settings } from "lucide-react";
import { useQR } from "../../context/QRContext";
import Accordion from "../ui/Accordion";
import Switch from "../ui/Switch";

export default function ScanLimitSection({ isOpen, onToggle }) {
  const { qrState, updateQrData } = useQR();

  return (
    <Accordion
      title="Scan limit"
      icon={Settings}
      subtitle="Limit the number of times your QR can be scanned in total."
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="mt-4">
        <Switch
          label="Enable scan limit"
          checked={qrState.content.scanLimit?.enable}
          onChange={(val) => updateQrData("scanLimit", "enable", val)}
          className="mb-4"
        />
      </div>
    </Accordion>
  );
}
