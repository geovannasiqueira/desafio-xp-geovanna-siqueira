import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank, faHouse } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="btm-nav btm-nav-sm">
        <Link to="/stocks">
          <button>
          <FontAwesomeIcon icon={ faHouse } />  
          </button>
        </Link>
        <Link to="/account">
          <button>
          <FontAwesomeIcon icon={faPiggyBank} />          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
