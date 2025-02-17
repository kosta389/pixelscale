import React from 'react';

interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon: React.FC<CloseIconProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-10 h-10 bg-transparent focus:outline-none"
      aria-label="Close menu"
    >
      <div className="relative w-8 h-8">
        <span className="absolute top-1/2 left-0 block w-8 h-1 bg-white -translate-y-1/2 rotate-45"></span>
        <span className="absolute top-1/2 left-0 block w-8 h-1 bg-white -translate-y-1/2 -rotate-45"></span>
      </div>
    </button>
  );
};

export default CloseIcon;
