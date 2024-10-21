import { useState } from "react";
import { cn } from "./lib/cn";

const App: React.FC = () => {
  const [isPrimary, setIsPrimary] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Dynamic Button Styling with Tailwind and clsx
        </h1>

        <button
          className={cn(
            "px-4 py-2 rounded-md text-white",
            isPrimary ? "bg-blue-500" : "bg-gray-500",
            isDisabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {isPrimary ? "Primary Button" : "Default Button"}
        </button>

        <div className="mt-4 flex space-x-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={() => setIsPrimary(!isPrimary)}
          >
            Toggle Primary
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={() => setIsDisabled(!isDisabled)}
          >
            Toggle Disabled
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
