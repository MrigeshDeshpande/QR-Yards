import { ChevronDown, ChevronUp } from "lucide-react";

export default function Accordion({
  title,
  icon: Icon,
  isOpen,
  onToggle,
  children,
  subtitle,
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="text-gray-400" />
        ) : (
          <ChevronDown className="text-gray-400" />
        )}
      </button>

      {isOpen && (
        <div className="p-6 pt-0 border-t border-gray-100 mt-2">{children}</div>
      )}
    </div>
  );
}
