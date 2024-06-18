import React, { useState } from 'react';

const Men = () => {
  const [isTypeExpanded, setIsTypeExpanded] = useState(false);
  const [isFabricExpanded, setIsFabricExpanded] = useState(false);
  const [isGenderExpanded, setIsGenderExpanded] = useState(false);
  const [isFitExpanded, setIsFitExpanded] = useState(false);
  const [isBrandExpanded, setIsBrandExpanded] = useState(false);
  const [isSizeExpanded, setIsSizeExpanded] = useState(false);

  const toggleTypeSection = () => setIsTypeExpanded(!isTypeExpanded);
  const toggleFabricSection = () => setIsFabricExpanded(!isFabricExpanded);
  const toggleGenderSection = () => setIsGenderExpanded(!isGenderExpanded);
  const toggleFitSection = () => setIsFitExpanded(!isFitExpanded);
  const toggleBrandSection = () => setIsBrandExpanded(!isBrandExpanded);
  const toggleSizeSection = () => setIsSizeExpanded(!isSizeExpanded);

  return (
    <div className="flex">
      <div className="flex flex-col p-4 w-64 border-r">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">FILTERS</h3>
          <button className="text-orange-500">Clear all</button>
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
                Male (699)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Female (420)
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
                Regular (12380)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Slim (5969)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Slim Tapered (1383)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Skinny (947)
              </label>
              <button className="text-blue-500 text-sm">+ 17 More</button>
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
                Adidas (148)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Allen Solly (461)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                American Eagle (416)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                Antonio Banderas (13)
              </label>
              <button className="text-blue-500 text-sm">+ 124 More</button>
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
                <input type="checkbox" className="mr-2" />
                M (10623)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                S (10476)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                L (9917)
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                XL (9427)
              </label>
              <button className="text-blue-500 text-sm">+ 39 More</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-4">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011196949-Blue-Navy-1000011196949_01-2100.jpg"/>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">MEN</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Men;
