import React from 'react';
import '../styles/Album.css';

// Functional component for rendering a list of albums
const Album = (props) => {
  // Destructure props for better readability
  const { albums, handleEditClick, handleDeleteAlbum } = props;

  return (
    <div className='album-items'>
      {/* Map through the albums array to render each album item */}
      {albums.map(album => (
        <div key={album.id} className="album-item">
          {/* Display the album title */}
          <span className="album-title">{album.title}</span>

          {/* Buttons for editing and deleting the album */}
          <div className="album-buttons">
            <button onClick={() => handleEditClick(album)}>
              Edit
            </button>
            <button onClick={() => handleDeleteAlbum(album.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component for use in other parts of the application
export default Album;
