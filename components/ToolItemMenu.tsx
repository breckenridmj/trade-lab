import React from 'react';

interface ToolMenuProps {
  visible?: boolean;
}

const ToolItemMenu: React.FC<ToolMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-[#292f42] w-56 absolute top-8 left-0 py-5 flex-col border-2 border-white-800 flex">
      <div className="flex flex-col gap-4">
      <div className="px-3 text-center text-white hover:underline">
          Link
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Date
        </div>
      </div>
    </div>
  )
}

export default ToolItemMenu;