// AvatarPlaceholder.js
import React from 'react';

const AvatarPlaceholder = () => {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300">
      <img
        src="../home/Projet/SIAD-master/src/Components/avatar.png" // Placeholder URL, replace it with the actual avatar URL
        alt="Avatar"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default AvatarPlaceholder;
