"use client";

import { Clock } from "lucide-react";
import { useQR } from "../../context/QRContext";
import Accordion from "../ui/Accordion";
import Switch from "../ui/Switch";

export default function TimeSchedulingSection({ isOpen, onToggle }) {
  const { qrState, updateQrData } = useQR();

  return (
    <Accordion
      title="Time Scheduling"
      icon={Clock}
      subtitle="Create the time ranges for your business and then apply them to your products."
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <Switch
        label="Enable time ranges"
        checked={qrState.content.enableTimeSchedule}
        onChange={(val) => updateQrData(null, "enableTimeSchedule", val)}
        className="mt-4"
      />
    </Accordion>
  );
}
