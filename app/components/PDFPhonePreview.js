import { FileText, Pencil, Info, Download, Eye } from "lucide-react";

export default function PDFPhonePreview() {
    return (
        <div className="hidden xl:flex flex-col items-center justify-center bg-gray-50 p-8 min-h-[calc(100vh-64px)] fixed right-0 w-[400px] border-l border-gray-200">
            <div className="flex items-center justify-between w-[300px] mb-8 text-blue-600">
                <div className="flex items-center gap-2">
                    <FileText size={20} />
                    <span className="font-semibold">PDF</span>
                </div>
                <button className="text-gray-400 hover:text-blue-600">
                    <Pencil size={16} />
                </button>
            </div>

            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-xl border-4 border-gray-800">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>

                {/* Screen Content */}
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="pt-8 px-4 pb-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <FileText size={20} />
                                <span className="text-sm font-semibold">Product Catalog</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-1.5 bg-white/20 rounded-full hover:bg-white/30">
                                    <Download size={14} />
                                </button>
                            </div>
                        </div>
                        <p className="text-xs opacity-90">12 pages · 2.4 MB</p>
                    </div>

                    {/* PDF Viewer */}
                    <div className="p-4 flex-1 flex flex-col gap-3 overflow-y-auto bg-gray-50">
                        {/* PDF Page Preview 1 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                            <div className="aspect-[8.5/11] bg-gray-100 rounded flex flex-col items-center justify-center gap-3 relative">
                                <FileText size={32} className="text-gray-400" />
                                <div className="space-y-1.5 w-3/4">
                                    <div className="h-3 bg-gray-300 rounded w-full"></div>
                                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                                    <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                                </div>
                                <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 bg-white px-1.5 py-0.5 rounded">
                                    Page 1
                                </div>
                            </div>
                        </div>

                        {/* PDF Page Preview 2 */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
                            <div className="aspect-[8.5/11] bg-gray-100 rounded flex flex-col items-center justify-center gap-2 relative">
                                <div className="grid grid-cols-2 gap-2 w-3/4">
                                    <div className="aspect-square bg-gray-300 rounded"></div>
                                    <div className="aspect-square bg-gray-300 rounded"></div>
                                </div>
                                <div className="space-y-1 w-3/4">
                                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                                    <div className="h-2 bg-gray-300 rounded w-4/6"></div>
                                </div>
                                <div className="absolute bottom-2 right-2 text-[10px] text-gray-400 bg-white px-1.5 py-0.5 rounded">
                                    Page 2
                                </div>
                            </div>
                        </div>

                        {/* View More Indicator */}
                        <div className="text-center py-2">
                            <span className="text-xs text-gray-400">+ 10 more pages</span>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="border-t border-gray-200 p-3 bg-white">
                        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                            <Eye size={16} />
                            View Full PDF
                        </button>
                    </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-800 rounded-l"></div>
                <div className="absolute top-36 -left-1 w-1 h-12 bg-gray-800 rounded-l"></div>
                <div className="absolute top-28 -right-1 w-1 h-12 bg-gray-800 rounded-r"></div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl flex items-center gap-3 shadow-sm border border-gray-100 max-w-[300px]">
                <Info size={16} className="text-gray-400 shrink-0" />
                <p className="text-xs text-gray-500">IMPORTANT: Don not forget to test your QR code</p>
            </div>
        </div>
    );
}

