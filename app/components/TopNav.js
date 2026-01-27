"use client";

import { ArrowRight, ChevronLeft } from "lucide-react";

export default function TopNav({
  currentStep = 2,
  onBack,
  onNext,
  canProceed = false,
}) {
  const steps = [
    { number: 1, label: "Type of QR code" },
    { number: 2, label: "Content" },
    { number: 3, label: "QR design" },
  ];

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex-1"></div> {/* Spacer to center the stepper approx */}
      <div className="flex items-center gap-8">
        {steps.map((step, index) => {
          const isCompleted = step.number < currentStep;
          const isActive = step.number === currentStep;

          return (
            <div key={index} className="flex items-center gap-2">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                {isCompleted ? "✓" : step.number}
              </div>
              <span
                className={`text-sm font-medium ${isCompleted
                    ? "text-green-600"
                    : isActive
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex-1 flex justify-end gap-3">
        <button
          onClick={onBack}
          disabled={currentStep === 1}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${currentStep === 1
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-600 bg-white border border-gray-300 hover:bg-gray-50"
            }`}
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${canProceed
              ? "text-white bg-blue-600 hover:bg-blue-700"
              : "text-white bg-gray-200 cursor-not-allowed"
            }`}
        >
          Next
          <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}
