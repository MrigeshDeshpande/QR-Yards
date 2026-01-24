"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import TopNav from "../../components/TopNav";
import WebsiteBuilder from "../../components/WebsiteBuilder";
import WebsitePhonePreview from "../../components/WebsitePhonePreview";
import QRDesignBuilder from "../../components/QRDesignBuilder";

export default function WebsiteCreatePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(2);
  const [canProceed, setCanProceed] = useState(true); // Enable Next button by default

  const handleBack = () => {
    if (currentStep === 2) {
      // Go back to QR type selection
      router.push("/");
    } else if (currentStep === 3) {
      setCurrentStep(2);
    }
  };

  const handleNext = () => {
    if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // TODO: Save and generate QR code
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
            {currentStep === 2 && <WebsiteBuilder />}
            {currentStep === 3 && <QRDesignBuilder />}
          </div>

          <WebsitePhonePreview />
        </main>
      </div>
    </div>
  );
}
