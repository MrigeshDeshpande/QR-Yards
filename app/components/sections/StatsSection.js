"use client";

import { PieChart } from "lucide-react";
import { useQR } from "../../context/QRContext";
import Accordion from "../ui/Accordion";
import Switch from "../ui/Switch";

export default function StatsSection({ isOpen, onToggle }) {
    const { qrState, updateQrData } = useQR();

    return (
        <Accordion
            title="Stats"
            icon={PieChart}
            subtitle="Key tools and data to evaluate performance."
            isOpen={isOpen}
            onToggle={onToggle}
        >
            <div className="mt-4">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-4">
                    Schedule a date
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                    Set the dates on which your content will be shown through the QR. At the end of that period, it will be disabled.
                </p>
                <Switch
                    label="Activate the schedule to work during certain dates"
                    checked={qrState.content.stats?.enable}
                    onChange={(val) => updateQrData('stats', 'enable', val)}
                    className="mb-6"
                />

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Since</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm text-gray-600"
                            value={qrState.content.schedule?.startDate}
                            onChange={(e) => updateQrData('schedule', 'startDate', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Until</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm text-gray-600"
                            value={qrState.content.schedule?.endDate}
                            onChange={(e) => updateQrData('schedule', 'endDate', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </Accordion>
    );
}
