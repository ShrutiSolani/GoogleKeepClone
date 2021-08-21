import {BiBulb} from "react-icons/bi";
import {BsBell} from "react-icons/bs";
import {FiEdit2} from "react-icons/fi";
//
// function Sidebar() {
//   return <div>
//     <div className="sidebar"><BiBulb className="icons"/></div>
//     <div className="sidebar"><BsBell className="icons"/></div>
//     <div className="sidebar"><FiEdit2 className="icons"/></div>
//   </div>;
//
// }
//
// export default Sidebar;

import React from 'react';
import { AiOutlineMenu as Menu} from "react-icons/ai";

export default props => {
  return (
    <div>
      <a className="menu-item" href="/">
        <BiBulb className="icons"/>
      </a>
      <a className="menu-item" href="/">
        <BsBell className="icons"/>
      </a>
      <a className="menu-item" href="/">
        <FiEdit2 className="icons"/>
      </a>
    </div>
  );
};
