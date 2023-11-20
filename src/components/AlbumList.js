import React from 'react';
import { Album } from "."; // Assuming Album component is exported from the same directory
import "../styles/AlbumList.css";

// Functional component for rendering a list of albums using the Album component
const AlbumList = (props) => {
  // Destructure props for better readability
  const { albums, handleEditClick, handleDeleteAlbum } = props;

  return (
    <ul className="list-group">
      {/* Render the Album component to display the list of albums */}
      <Album
        albums={albums}
        handleEditClick={handleEditClick}
        handleDeleteAlbum={handleDeleteAlbum}
      />
    </ul>
  );
};

// Export the component for use in other parts of the application
export default AlbumList;
