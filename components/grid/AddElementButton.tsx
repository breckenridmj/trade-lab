// components/AddElementButton.tsx
import React from 'react';

const AddElementButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2">
      Add Element
    </button>
  );
};

export default AddElementButton;
