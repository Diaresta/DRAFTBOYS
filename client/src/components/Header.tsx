import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const activeStyle: object = { color: '#65b3ba', borderBottom: '2px solid' };
  const defaultStyle: object = { color: '#ccc' };
  const [showMobile, setShowMobile] = useState(true);
  const [mobileStyle, setMobileStyle] = useState({
    width: '',
  });
  const [ulDisplay, setUlDisplay] = useState({
    display: '',
  });
  const [ulOpacity, setUlOpacity] = useState({
    opacity: '',
  });

  const mobileNav = (
    boolean: boolean,
    space: string,
    visible: string,
    transition: string
  ) => {
    setShowMobile(boolean);
    setMobileStyle({
      width: space,
    });
    setUlDisplay({
      display: visible,
    });

    setTimeout(() => {
      setUlOpacity({
        opacity: transition,
      });
    }, 400);
  };

  return (
    <div id='header-container'>
      <nav id='navbar-container'>
        <div id='logo-div'>
          <img
            id='site-logo'
            src='/images/logoGrad.png'
            alt='website logo'
            onClick={() => {
              window.location.href = '/';
            }}
          />
        </div>
        <div id='navbar-list'>
          <ul>
            <li className='nav-li'>
              <NavLink
                to=''
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink
                to='all_sets'
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                All Sets
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink
                to='contact'
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <i
          className={showMobile ? 'fa-solid fa-bars' : 'fa-solid fa-xmark'}
          onClick={() =>
            showMobile
              ? mobileNav(false, '100%', 'flex', '1')
              : mobileNav(true, '0%', 'none', '0')
          }
        />

        {/* ------ Mobile Navbar ------ */}
        <div id='mobile-navbar-list' style={{ ...mobileStyle }}>
          <ul style={{ ...ulDisplay, ...ulOpacity }}>
            <li className='nav-li'>
              <NavLink
                to=''
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink
                to='all_sets'
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                All Sets
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink
                to='contact'
                style={({ isActive }) =>
                  isActive ? activeStyle : defaultStyle
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
