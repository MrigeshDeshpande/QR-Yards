import { ArrowRight, ChevronLeft } from "lucide-react";

export default function TopNav() {
    const steps = [
        { number: 1, label: "Type of QR code", active: true },
        { number: 2, label: "Content", active: false },
        { number: 3, label: "QR design", active: false },
    ];

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex-1"></div> { /* Spacer to center the stepper approx */}

            <div className="flex items-center gap-8">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className={`w-6 h-6 flex items-center justify-center rounded text-xs font-bold ${step.active
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-500"
                                }`}
                        >
                            {step.number}
                        </div>
                        <span
                            className={`text-sm font-medium ${step.active ? "text-blue-600" : "text-gray-500"
                                }`}
                        >
                            {step.label}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex-1 flex justify-end gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    <ChevronLeft size={16} />
                    Back
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-200 rounded-full cursor-not-allowed">
                    Next
                    <ArrowRight size={16} />
                </button>
            </div>
        </header>
    );
}
