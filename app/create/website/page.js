"use client";

import Sidebar from "../../components/Sidebar";
import TopNav from "../../components/TopNav";
import WebsiteBuilder from "../../components/WebsiteBuilder";
import WebsitePhonePreview from "../../components/WebsitePhonePreview";

export default function WebsiteCreatePage() {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
            <Sidebar />

            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <TopNav />

                <main className="flex-1 flex overflow-hidden">
                    <div className="flex-1 overflow-y-auto pr-[400px]">
                        <WebsiteBuilder />
                    </div>

                    <WebsitePhonePreview />
                </main>
            </div>
        </div>
    );
}
