import React from 'react';

const GRADIENT_CLASS = 'bg-gradient-to-r from-orange-400 to-orange-600';
const ANIMATE_CLASS = 'animate-stripes';

const SaleBanner = () => {
  return (
    <div className="relative overflow-hidden bg-orange-500 text-white text-center py-2">
      <div className={`absolute inset-0 ${GRADIENT_CLASS} opacity-50 ${ANIMATE_CLASS}`}></div>
      <div className="relative z-10">
        Our Biggest Sale - Up to 70% + Extra 8% Off
      </div>
    </div>
  );
};

export default SaleBanner;
