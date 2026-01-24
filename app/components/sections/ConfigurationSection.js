"use client";

import { Settings, ChevronDown } from "lucide-react";
import { useQR } from "../../context/QRContext";
import Accordion from "../ui/Accordion";
import Switch from "../ui/Switch";
import Input from "../ui/Input";

export default function ConfigurationSection({ isOpen, onToggle }) {
    const { qrState, updateQrData } = useQR();

    return (
        <Accordion
            title="Configuration"
            icon={Settings}
            subtitle="Customized settings to optimize your experience."
            isOpen={isOpen}
            onToggle={onToggle}
        >
            {/* Folder */}
            <div className="mt-6">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
                    Folder
                </h4>
                <p className="text-xs text-gray-500 mb-3">Organize your QR codes in different folders.</p>
                <div className="relative">
                    <select
                        className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-700"
                        value={qrState.content.configuration?.folder}
                        onChange={(e) => updateQrData('configuration', 'folder', e.target.value)}
                    >
                        <option>No folder</option>
                    </select>
                </div>
            </div>

            {/* Domain */}
            <div className="mt-6">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
                    Domain
                </h4>
                <p className="text-xs text-gray-500 mb-3">
                    Now you can use your own domain in your QR codes. Add and configure a custom domain...
                </p>
                <div className="relative mb-3">
                    <select className="w-full p-3 border border-gray-200 rounded-lg appearance-none bg-white text-gray-700" disabled>
                        <option>qrty.com</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">Refresh</button>
                    <button className="px-4 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-full flex items-center gap-1">
                        + Add domain
                    </button>
                </div>
            </div>

            {/* Password */}
            <div className="mt-6 mb-4">
                <h4 className="font-medium text-gray-900 flex items-center gap-2 mb-2">
                    Password
                </h4>
                <p className="text-xs text-gray-500 mb-4">
                    Add an access control to display the content and a password will be requested...
                </p>
                <Switch
                    label="Activate password to access the QR code"
                    checked={qrState.content.configuration?.password?.enable}
                    onChange={(val) => {
                        const newPasswordState = { ...qrState.content.configuration.password, enable: val };
                        updateQrData('configuration', 'password', newPasswordState);
                    }}
                    className="mb-4"
                />
                <Input
                    disabled={!qrState.content.configuration?.password?.enable}
                    value={qrState.content.configuration?.password?.value}
                    onChange={(e) => {
                        const newPasswordState = { ...qrState.content.configuration.password, value: e.target.value };
                        updateQrData('configuration', 'password', newPasswordState);
                    }}
                    className="bg-gray-50"
                />
            </div>
        </Accordion>
    );
}
