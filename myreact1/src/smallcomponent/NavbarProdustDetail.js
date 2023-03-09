import React from 'react'
import {  FaTimes } from "react-icons/fa";
function NavbarProdustDetail() {
  return (
    <>
      <div className="c-NavbarDetailContent">
        <div className="c-NavbarDetailDard">
          <img
            src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png"
            alt=""
          />
          <div className="c-NavbarDetail">
            <h5>傑尼龜</h5>
            <h5>1 X NT$10</h5>
          </div>
        </div>
        <a href="#/">
          <FaTimes size={20} />
        </a>
      </div>
    </>
  );
}

export default NavbarProdustDetail