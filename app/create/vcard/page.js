"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import TopNav from "../../components/TopNav";
import VCardBuilder from "../../components/VCardBuilder";
import QRDesignBuilder from "../../components/QRDesignBuilder";
import VCardPhonePreview from "../../components/VCardPhonePreview";

export default function VCardCreatePage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(2);
    const [canProceed, setCanProceed] = useState(true);

    const handleBack = () => {
        if (currentStep === 2) {
            router.push("/");
        } else if (currentStep === 3) {
            setCurrentStep(2);
        }
    };

    const handleNext = () => {
        if (currentStep === 2) {
            setCurrentStep(3);
        } else if (currentStep === 3) {
            console.log("Generate QR Code");
        }
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
            <Sidebar />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <TopNav
                    currentStep={currentStep}
                    onBack={handleBack}
                    onNext={handleNext}
                    canProceed={canProceed}
                />

                <main className="flex-1 flex overflow-hidden">
                    <div className="flex-1 overflow-y-auto pr-[400px]">
                        {currentStep === 2 && <VCardBuilder />}
                        {currentStep === 3 && <QRDesignBuilder />}
                    </div>

                    <VCardPhonePreview />
                </main>
            </div>
        </div>
    );
}
