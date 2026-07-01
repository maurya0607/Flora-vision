import React from 'react';

export const Avatar = ({ name, className = "w-10 h-10" }) => {
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'U';

  const renderSVGAvatar = () => {
    switch (name) {
      case 'Ronnie Hamill':
        return (
          <div className="w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/Roslin.png" className="w-full h-full object-cover"/>
           </div>
        );

      case 'Shelly Russel':
        return (
          <div className="w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/Shelly.png" className="w-full h-full object-cover"/>
           </div>
        );

      case 'Lula Rolfson':
        return (
          <div className="w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/Lula.jpg" className="w-full h-full object-cover"/>
           </div>
        );

      case 'Carol Huals':
        return (
          <div className="w-full h-full rounded-full overflow-hidden">
            <img 
              src="/images/carol.png" className="w-full h-full object-cover"/>
           </div>
        );

      default:
        return (
          <div className="w-full h-full bg-linear-to-tr from-flora-accent to-emerald-800 flex items-center justify-center text-white font-semibold text-sm">
            {initials}
          </div>
        );
    }
  };

  return (
    <div className={`relative rounded-full overflow-hidden border border-flora-accent/30 bg-flora-bg shrink-0 select-none ${className}`}>
      {renderSVGAvatar()}
    </div>
  );
};
