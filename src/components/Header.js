import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const profileEmail = JSON.parse(localStorage.getItem('user'));
    setEmail(profileEmail);
  }, []);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className="mb-4">
      <div className="navbar bg-base-100 ">
        <div className="flex-1 px-2">
          <h3>Olá, </h3>
          <h4 className="btn btn-ghost normal-case text-lg">{email.email}</h4>
        </div>
        <div className="flex-none">
          <Link to="/">
            <button className="btn btn-square btn-ghost" onClick={logout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </Link>
        </div>
      </div>
      <div className="divider my-0"></div>
    </div>
  );
}

export default Header;
