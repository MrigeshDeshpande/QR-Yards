import { 
  PlusCircle, 
  LayoutGrid, 
  QrCode, 
  BarChart2, 
  Layout, 
  Globe, 
  CreditCard,
  Settings,
  Users,
  Shield,
  MessageSquare,
  HelpCircle,
  Code
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { icon: PlusCircle, label: "New QR", active: true },
    { icon: LayoutGrid, label: "Bulk QR generation" },
    { icon: QrCode, label: "My QR codes" },
    { icon: BarChart2, label: "Stats" },
    { icon: Layout, label: "Templates" },
    { icon: Globe, label: "My domains" },
    { icon: CreditCard, label: "Plans and payments" },
  ];

  const bottomItems = [
    { icon: Settings, label: "Settings" },
    { icon: Users, label: "Users" },
  ];
  
  const bottomItems2 = [
    { icon: Shield, label: "Security history" },
    { icon: MessageSquare, label: "Contact" },
    { icon: HelpCircle, label: "Help center" },
    { icon: Code, label: "Developers" },
  ];

  return (
    <aside className="w-64 bg-white min-h-screen flex flex-col border-r border-gray-200">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
           QRYards <span className="text-gray-400 text-xs border border-gray-300 rounded px-1 ml-auto">⌘</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              item.active
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <item.icon size={20} />
            {item.label}
          </a>
        ))}

        <div className="mt-8 space-y-1">
            {bottomItems.map((item, index) => (
            <a
                key={index}
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
                <item.icon size={20} />
                {item.label}
            </a>
            ))}
        </div>
        
         <div className="mt-8 space-y-1">
            {bottomItems2.map((item, index) => (
            <a
                key={index}
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
                {/* Visual grouping spacing */}
                <div className="w-5" /> 
                {item.label}
            </a>
            ))}
        </div>
      </nav>

    </aside>
  );
}
