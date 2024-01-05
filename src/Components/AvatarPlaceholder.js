// AvatarPlaceholder.js
import React from 'react';
import { useAuth } from '../AuthContext';

const AvatarPlaceholder = () => {
	const { user, logoutUser } = useAuth();
  return (
    /* <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
      <img
        src="../home/Projet/SIAD-master/src/Components/avatar.png" // Placeholder URL, replace it with the actual avatar URL
        alt="Avatar"
        className="w-full h-full object-cover"
      />
      
    </div>*/
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default AvatarPlaceholder;
