import {
    Globe,
    FileText,
    Image as ImageIcon,
    UserSquare2,
    Video,
    List,
    ThumbsUp,
    Music,
    Store,
    Ticket,
    Smartphone,
    LayoutTemplate,
    Package,
    Calendar,
    Utensils,
    MessageSquare,
    Music2,
    ScanLine
} from "lucide-react";
import Link from "next/link";

export default function QRTypeGrid() {
    const qrTypes = [
        { icon: Globe, label: "Website", desc: "Open a URL", href: "/create/website" },
        { icon: FileText, label: "PDF", desc: "Show a PDF", href: "/create/pdf" },
        { icon: ImageIcon, label: "Images", desc: "Show an image gallery", href: "/create/images" },
        { icon: UserSquare2, label: "vCard Plus", desc: "Share contact details", badge: "PLUS", href: "/create/vcard" },
        { icon: Video, label: "Video", desc: "Show a video", href: "/create/video" },
        { icon: List, label: "List of links", desc: "Group links", href: "/create/links" },
        { icon: ThumbsUp, label: "Social Media", desc: "Share your social profiles", href: "/create/social" },
        { icon: Music, label: "MP3", desc: "Play an audio file", href: "/create/mp3" },
        { icon: Store, label: "Business", desc: "Share information about your business", href: "/create/business" },
        { icon: Ticket, label: "Coupon", desc: "Share a coupon", href: "/create/coupon" },
        { icon: Smartphone, label: "Apps", desc: "Redirect to an app store", href: "/create/apps" },
        { icon: LayoutTemplate, label: "Landing page", desc: "Create your own page", href: "/create/landing" },
        { icon: Package, label: "Product", desc: "Group information about your product", href: "/create/product" },
        { icon: Calendar, label: "Event", desc: "Promote and share an event", href: "/create/event" },
        { icon: Utensils, label: "Menu", desc: "Display the menu of a restaurant or bar", href: "/create/menu" },
        { icon: MessageSquare, label: "Feedback", desc: "Collect feedback and get rated", href: "/create/feedback" },
        { icon: Music2, label: "Playlist", desc: "Share your own music", href: "/create/playlist" },
        { icon: ScanLine, label: "2D Barcode", desc: "Supports GS1 standards", isBarcode: true, href: "/create/barcode" },
    ];

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Select a QR type
            </h2>

            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                    <div className="w-2 h-2 bg-black rounded-full mb-0.5 mx-auto"></div>
                    <div className="w-4 h-2 border-b-2 border-black rounded-full"></div>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">Dynamic QR</h3>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded">
                            with tracking
                        </span>
                    </div>
                    <p className="text-sm text-gray-500">
                        Update content in real time, without changing your code
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qrTypes.map((type, index) => {
                    const Content = (
                        <>
                            <div
                                className={`w-12 h-12 rounded-lg flex items-center justify-center ${type.isBarcode ? "text-blue-600" : "text-blue-500"
                                    } bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors`}
                            >
                                <type.icon size={24} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold text-gray-900">
                                        {type.label}
                                    </span>
                                    {type.badge && (
                                        <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                                            {type.badge}
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    {type.desc}
                                </p>
                            </div>
                        </>
                    );

                    const className = "flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-md transition-all text-left group w-full";

                    if (type.href) {
                        return (
                            <Link key={index} href={type.href} className={className}>
                                {Content}
                            </Link>
                        );
                    }

                    return (
                        <button key={index} className={className}>
                            {Content}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
