import React, { useState } from 'react';
import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  return(
    <div style={{ borderBottom: "1px solid #eaeaea" }}>
      <div style={{ display: "flex", height: "70px", alignItems: "center", padding: "0 116px", position: "relative" }}>
        <Link to="/" style={{ marginRight: "20px" }}>
          <img src='https://www.thereportingtoday.com/wp-content/uploads/2022/07/Lifestyle-Logo.jpg?w=640' alt="Lifestyle"
            style={{ width: "100px" }} />
        </Link>
        <div style={{ display: "flex", gap: "40px", flexGrow: 1, height: "22px" }}>
        <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/women"
              className="text-black hover:text-orange-500"
              style={{ fontSize: "86%" }}
            >
              Women
            </Link>
            {showDropdown && (
              <div
                className="absolute top-[2.45rem] left-[-120px] bg-white shadow-lg p-4 z-50 w-[83vw]"
                style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "-8px", marginTop: "8px", fontSize: "80%" }}
              >
                <div>
                  <h4 className="font-bold">Ethnic & Fusion Wear</h4>
                  <ul>
                    <li>Kurtas & Kurtis</li>
                    <li>Kurta Sets</li>
                    <li>Ethnic Dresses</li>
                    <li>Tops & Tunics</li>
                    <li>Leggings & Churidars</li>
                    <li>Pants & Palazzos</li>
                    <li>Skirts</li>
                    <li>Dupattas & Stoles</li>
                    <li>Saree</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Western Wear</h4>
                  <ul>
                    <li>Tops & Tees</li>
                    <li>Dresses & Jumpsuits</li>
                    <li>Jeans & Jeggings</li>
                    <li>Shorts & Skirts</li>
                    <li>Trousers</li>
                    <li>Jackets & Shrugs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Lingerie/Sleepwear</h4>
                  <ul>
                    <li>Bras</li>
                    <li>Briefs/Panties</li>
                    <li>Cami & Slips</li>
                    <li>Shapewear</li>
                    <li>Nightwear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">SportsWear</h4>
                  <ul>
                    <li>Tops & Tees</li>
                    <li>Sports Bra</li>
                    <li>Leggings</li>
                    <li>Joggers & Tracks</li>
                    <li>Sweatshirts & Jackets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Top Brands</h4>
                  <ul>
                    <li>Melange</li>
                    <li>Ginger</li>
                    <li>Code</li>
                    <li>Fame Forever</li>
                    <li>Kappa</li>
                    <li>Biba</li>
                    <li>Aurelia</li>
                    <li>AND</li>
                    <li>Allen Solly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Plus size</h4>
                  <ul>
                    <li>Beauty</li>
                    <li>Footwear/Bags</li>
                    <li>Watches</li>
                    <li>Jewellery</li>
                    <li>Fragrances</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown1(true)}
            onMouseLeave={() => setShowDropdown1(false)}
          >
            <Link
              to="/men"
              className="text-black hover:text-orange-500"
              style={{ fontSize: "86%" }}
            >
              Men
            </Link>
            {showDropdown1 && (
              <div
                className="absolute top-[2.45rem] left-[-207px] bg-white shadow-lg p-4 z-50 w-[83vw]"
                style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "-8px", marginTop: "8px", fontSize: "80%" }}
              >
                <div>
                  <h4 className="font-bold">Topwear</h4>
                  <ul>
                    <li>Kurtas & Kurtis</li>
                    <li>Kurta Sets</li>
                    <li>Ethnic Dresses</li>
                    <li>Tops & Tunics</li>
                    <li>Leggings & Churidars</li>
                    <li>Pants & Palazzos</li>
                    <li>Skirts</li>
                    <li>Dupattas & Stoles</li>
                    <li>Saree</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Western Wear</h4>
                  <ul>
                    <li>Tops & Tees</li>
                    <li>Dresses & Jumpsuits</li>
                    <li>Jeans & Jeggings</li>
                    <li>Shorts & Skirts</li>
                    <li>Trousers</li>
                    <li>Jackets & Shrugs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Lingerie/Sleepwear</h4>
                  <ul>
                    <li>Bras</li>
                    <li>Briefs/Panties</li>
                    <li>Cami & Slips</li>
                    <li>Shapewear</li>
                    <li>Nightwear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">SportsWear</h4>
                  <ul>
                    <li>Tops & Tees</li>
                    <li>Sports Bra</li>
                    <li>Leggings</li>
                    <li>Joggers & Tracks</li>
                    <li>Sweatshirts & Jackets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Top Brands</h4>
                  <ul>
                    <li>Melange</li>
                    <li>Ginger</li>
                    <li>Code</li>
                    <li>Fame Forever</li>
                    <li>Kappa</li>
                    <li>Biba</li>
                    <li>Aurelia</li>
                    <li>AND</li>
                    <li>Allen Solly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Plus size</h4>
                  <ul>
                    <li>Beauty</li>
                    <li>Footwear/Bags</li>
                    <li>Watches</li>
                    <li>Jewellery</li>
                    <li>Fragrances</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
          >
            <Link
              to="/kids"
              className="text-black hover:text-orange-500"
              style={{ fontSize: "86%" }}
            >
              Kids
            </Link>
            {showDropdown2 && (
              <div
                className="absolute top-[2.45rem] left-[-274px] bg-white shadow-lg p-4 z-50 w-[83vw]"
                style={{ display: "grid", gridTemplateColumns: "repeat(6, minmax(0, 1fr))", gap: "-8px", marginTop: "8px", fontSize: "80%" }}
              >
                <div>
                  <h4 className="font-bold">Ethnic & Fusion Wear</h4>
                  <ul>
                    <li>Kurtas & Kurtis</li>
                    <li>Kurta Sets</li>
                    <li>Ethnic Dresses</li>
                    <li>Tops & Tunics</li>
                    <li>Leggings & Churidars</li>
                    <li>Pants & Palazzos</li>
                    <li>Skirts</li>
                    <li>Dupattas & Stoles</li>
                    <li>Saree</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Western Wear</h4>
                  <ul>
                    <li>Tops & Tees</li>
                    <li>Dresses & Jumpsuits</li>
                    <li>Jeans & Jeggings</li>
                    <li>Shorts & Skirts</li>
                    <li>Trousers</li>
                    <li>Jackets & Shrugs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Lingerie/Sleepwear</h4>
                  <ul>
                    <li>Bras</li>
                    <li>Briefs/Panties</li>
                    <li>Cami & Slips</li>
                    <li>Shapewear</li>
                    <li>Nightwear</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">SportsWear</h4>
                  <ul>
                    <li>Tops & Tees</li>
                    <li>Sports Bra</li>
                    <li>Leggings</li>
                    <li>Joggers & Tracks</li>
                    <li>Sweatshirts & Jackets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Top Brands</h4>
                  <ul>
                    <li>Melange</li>
                    <li>Ginger</li>
                    <li>Code</li>
                    <li>Fame Forever</li>
                    <li>Kappa</li>
                    <li>Biba</li>
                    <li>Aurelia</li>
                    <li>AND</li>
                    <li>Allen Solly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Plus size</h4>
                  <ul>
                    <li>Beauty</li>
                    <li>Footwear/Bags</li>
                    <li>Watches</li>
                    <li>Jewellery</li>
                    <li>Fragrances</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div style={{ position: "absolute", left: "31%", top: "39%", color: "#aaa" }}>
            <FiSearch />
          </div>
          <input
            type='text'
            placeholder='What are you looking for?'
            style={{
              width: "20%",
              height: "35px",
              padding: "0 0 0 42px",
              border: "0px solid #ccc",
              outline: "none",
              backgroundColor: "#f7f7f7",
              color: "#aaa",
              marginTop:"-7px",
            }}
          />
         
          <Link to="/signup" className="text-black hover:text-orange-500 " style={{ cursor: "pointer", fontSize:"86%" }}>Sign Up / Sign In</Link>
          <FiHeart style={{ cursor: "pointer" }} />
          <FiShoppingBag style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
