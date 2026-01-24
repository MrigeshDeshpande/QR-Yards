export default function Input({
  label,
  subLabel,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-bold text-gray-700 mb-2">
          {label}
        </label>
      )}
      {subLabel && <p className="text-xs text-gray-500 mb-3">{subLabel}</p>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 ${disabled ? "bg-gray-50 text-gray-400 cursor-not-allowed" : ""}`}
      />
      {required && <p className="text-xs text-gray-400 mt-1">Required field</p>}
    </div>
  );
}
