import React from 'react';
import '../styles/NavBar.css';

// Functional component for the navigation bar
const NavBar = (props) => {
  // Destructure props for better readability
  const { selectedAlbum, handleAddClick } = props;

  return (
    <div className="navbar-container">
      {/* Title of the application */}
      <h1 className="navbar-title">Album Management App</h1>

      {/* Conditional rendering of the "Add Album" button based on whether an album is selected */}
      {selectedAlbum ? (
        <button className="add-album-button" onClick={() => handleAddClick()}>
          Add Album
        </button>
      ) : (
        <p></p>
      )}
    </div>
  );
};

// Export the component for use in other parts of the application
export default NavBar;
