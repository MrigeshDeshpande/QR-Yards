export default function PhonePreview() {
  return (
    <div className="hidden xl:flex flex-col items-center justify-center bg-gray-50 p-8 min-h-[calc(100vh-64px)] fixed right-0 w-[400px] border-l border-gray-200">
      <h3 className="text-gray-500 font-medium mb-8">Example</h3>

      <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-xl border-4 border-gray-800">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-10"></div>

        {/* Screen Content */}
        <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 opacity-20">
              <div className="w-6 h-6 bg-black rounded-sm"></div>
              <div className="w-6 h-6 bg-black rounded-sm"></div>
              <div className="w-6 h-6 bg-black rounded-sm"></div>
              <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute top-24 -left-1 w-1 h-8 bg-gray-800 rounded-l"></div>
        <div className="absolute top-36 -left-1 w-1 h-12 bg-gray-800 rounded-l"></div>
        <div className="absolute top-28 -right-1 w-1 h-12 bg-gray-800 rounded-r"></div>
      </div>
    </div>
  );
}
