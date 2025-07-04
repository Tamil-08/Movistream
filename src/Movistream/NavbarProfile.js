import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import defaultProfile from './images/profile_img.png' // Replace with real path or use a placeholder
import  './nav.css';
const NavbarProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    const fakeUser = {
      name: 'Tamil Kumaran',
      role: 'admin',
      profileImg: 'https://i.pravatar.cc/150?img=3',
    };
    setUser(fakeUser);
  };

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <>
      {!user ? (
        <Button className='btn' variant="outline-light" onClick={handleLogin}>
          Login
        </Button>
      ) : (
        <Dropdown align="end">
          <Dropdown.Toggle
            variant="transparent"
            className="p-0 border-0 profile-button"
            id="dropdown-profile"
          >
            <img
              src={user.profileImg || defaultProfile}
              alt="Profile"
              width={30}
              className="profile-img rounded-circle"
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Header>{user.name}</Dropdown.Header>

            {user.role === 'admin' && (
              <Dropdown.Item onClick={() => navigate('/admin')}>
                Admin 
              </Dropdown.Item>
            )}

            {user.role === 'user' && (
              <Dropdown.Item onClick={() => navigate('/profile')}>
                Profile
              </Dropdown.Item>
            )}

            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  );
};

export default NavbarProfile;