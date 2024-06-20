import React, { useState } from 'react';
import productsData from './products.json'; // assuming your JSON file is in the same directory

const Men = () => {
  const [isTypeExpanded, setIsTypeExpanded] = useState(false);
  const [isFabricExpanded, setIsFabricExpanded] = useState(false);
  const [isGenderExpanded, setIsGenderExpanded] = useState(false);
  const [isFitExpanded, setIsFitExpanded] = useState(false);
  const [isBrandExpanded, setIsBrandExpanded] = useState(false);
  const [isSizeExpanded, setIsSizeExpanded] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleTypeSection = () => setIsTypeExpanded(!isTypeExpanded);
  const toggleFabricSection = () => setIsFabricExpanded(!isFabricExpanded);
  const toggleGenderSection = () => setIsGenderExpanded(!isGenderExpanded);
  const toggleFitSection = () => setIsFitExpanded(!isFitExpanded);
  const toggleBrandSection = () => setIsBrandExpanded(!isBrandExpanded);
  const toggleSizeSection = () => setIsSizeExpanded(!isSizeExpanded);

  const handleSizeChange = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size)
        ? prevSizes.filter((s) => s !== size)
        : [...prevSizes, size]
    );
  };

  const filteredProducts = productsData.filter((product) =>
    selectedSizes.length === 0 ? true : selectedSizes.some((size) => product.size.includes(size))
  );

  return (
    <div className="flex">
      <div className="flex flex-col p-4 w-64 border-r">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">FILTERS</h3>
          <button className="text-orange-500" onClick={() => setSelectedSizes([])}>Clear all</button>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-2">Price</h4>
          <input type="range" min="119" max="64995" className="w-full" />
          <div className="flex justify-between mt-2 text-sm">
            <span>₹ 119</span>
            <span>₹ 64995</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={toggleTypeSection}>
            <h4 className="text-lg font-semibold">Type</h4>
            <svg
              className={`w-4 h-4 transform transition-transform ${isTypeExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isTypeExpanded && (
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Crew Neck (3795)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Jeans (3387)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Polo Neck (2934)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Flat Front (2109)
              </label>
              <button className="text-blue-500 text-sm">+ 71 More</button>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={toggleFabricSection}>
            <h4 className="text-lg font-semibold">Fabric</h4>
            <svg
              className={`w-4 h-4 transform transition-transform ${isFabricExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isFabricExpanded && (
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Cotton (14348)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Cotton Blend (3898)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Cotton Lycra (2864)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Polyester (1449)
              </label>
              <button className="text-blue-500 text-sm">+ 32 More</button>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={toggleGenderSection}>
            <h4 className="text-lg font-semibold">Gender</h4>
            <svg
              className={`w-4 h-4 transform transition-transform ${isGenderExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isGenderExpanded && (
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Boys (14348)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Girls (3898)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Men (2864)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Women (1449)
              </label>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={toggleFitSection}>
            <h4 className="text-lg font-semibold">Fit</h4>
            <svg
              className={`w-4 h-4 transform transition-transform ${isFitExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isFitExpanded && (
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Regular Fit (9308)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Slim Fit (6950)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Skinny Fit (2072)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Loose Fit (1087)
              </label>
              <button className="text-blue-500 text-sm">+ 4 More</button>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={toggleBrandSection}>
            <h4 className="text-lg font-semibold">Brand</h4>
            <svg
              className={`w-4 h-4 transform transition-transform ${isBrandExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isBrandExpanded && (
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Fame Forever (2377)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Bossini (1734)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Melange (1664)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Kappa (1410)
              </label>
              <button className="text-blue-500 text-sm">+ 62 More</button>
            </div>
          )}
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={toggleSizeSection}>
            <h4 className="text-lg font-semibold">Size</h4>
            <svg
              className={`w-4 h-4 transform transition-transform ${isSizeExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          {isSizeExpanded && (
            <div className="flex flex-col">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" onChange={() => handleSizeChange('S')} checked={selectedSizes.includes('S')} />
                S
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" onChange={() => handleSizeChange('M')} checked={selectedSizes.includes('M')} />
                M
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" onChange={() => handleSizeChange('L')} checked={selectedSizes.includes('L')} />
                L
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" onChange={() => handleSizeChange('XL')} checked={selectedSizes.includes('XL')} />
                XL
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">₹{product.price}</p>
                <p className="text-gray-600">Size: {product.size.join(', ')}</p>
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
