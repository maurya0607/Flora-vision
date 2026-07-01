import React from 'react';

export const SectionTitle = ({ children, className = '' }) => {
  return (
    <div className={`text-center mb-12 sm:mb-16 select-none ${className}`}>
      <h2 className="heading-bracket">
        {children}
      </h2>
    </div>
  );
};
