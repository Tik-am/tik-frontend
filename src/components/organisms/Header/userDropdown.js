import React, { useState, useEffect, useRef } from 'react';
import {
  NavLink,
  withRouter,
} from 'react-router-dom';

import './style.scss'

import {
    Paper,
    Icon
} from '../../'

const UserDropdown = ({
    data
}) => {
    const wrapperRef = useRef(null);
    const [active, setActive] = useState(false);


    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if(!(window.innerWidth < 900)) {
          setActive(false);
        }
      }
    }
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });

    return (
        <Paper 
            className='flexible vertical ' 
            ref={wrapperRef} 
            onClick={() => setActive(!active)}
        >
            <Paper className='flexible jCenter aCenter userLogoIcon'>
                <Icon name='user' width={40} height={40}/>
            </Paper>
            {
                active &&
                 <Paper flexName="flexible vertical aCenter jCenter" className='userList'>
                    <ul className="nav-list flexible vertical aCenter jCenter">
                        <li>
                        <NavLink
                            to="/"
                            onClick={() => setActive(!active)}
                        >
                            Profile Details
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/"
                            onClick={() => setActive(!active)}
                        >
                            Profile History
                        </NavLink>
                        </li>
                        <li>
                        <NavLink
                            to="/"
                            onClick={() => setActive(!active)}
                        >
                            Sign out
                        </NavLink>
                        </li>
                    </ul>
                </Paper>
            }
        </Paper>
    )

}


  export default withRouter(UserDropdown);
