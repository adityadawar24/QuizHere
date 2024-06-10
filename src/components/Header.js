import React from "react";

export default function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "45px",
          display: "flex",
          justifyContent: "space-around",
          color: "white",
          fontSize: "12px",
        }}
      >
        <div style={{ display: "flex", gap: "14px", width: "50%" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              style={{ width: "25px" }}
              src="https://i1.lmsin.net/website_images/static-pages/brand_exp/images/shipping-icon.svg"
              alt="webIcon"
            />
            <p
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: 'ProximaNova-Semibold, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
            >
              Free shipping
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              style={{ width: "25px" }}
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-CNC-icon-D-26JUNE23.png"
              alt="webIcon"
            />
            <p
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: 'ProximaNova-Semibold, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
            >
              Click & Collect
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img
              style={{ width: "25px" }}
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-RTS-icon-D-26JUNE23.png"
              alt="webIcon"
            />
            <p
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: 'ProximaNova-Semibold, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
              }}
            >
              Return To Store
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <p style={{ color: "white", textDecoration: "none" }}>Download Our Apps</p>
          <div
            style={{
              backgroundColor: "grey",
              height: "15px",
              width: "1.5px",
              marginLeft: "-18px",
              marginTop: "3px",
            }}
          ></div>
          <p  style={{ color: "white", textDecoration: "none" }}>Store Locator</p>
          <div
            style={{
              backgroundColor: "grey",
              height: "15px",
              width: "1.5px",
              marginLeft: "-18px",
              marginTop: "3px",
            }}
          ></div>
          <p  style={{ color: "white", textDecoration: "none" }}>Help</p>
        </div>
      </div>
    </>
  );
}
