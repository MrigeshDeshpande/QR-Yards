import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import QRTypeGrid from "./components/QRTypeGrid";
import PhonePreview from "./components/PhonePreview";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <TopNav currentStep={1} canProceed={false} />

        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-[400px]"> {/* pr-[400px] adds space for the fixed PhonePreview */}
            <QRTypeGrid />
          </div>

          <PhonePreview />
        </main>
      </div>
    </div>
  );
}
