import React from 'react';

const SaleBanner = () => {
  return (
    <div className="relative overflow-hidden bg-orange-500 text-white text-center py-2">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-50 animate-stripes"></div>
      <div className="relative z-10">
        Our Biggest Sale - Up to 70% + Extra 8% Off
      </div>
    </div>
  );
};

const SaleComponent = () => {
  return <SaleBanner />;
};

export default SaleComponent;
