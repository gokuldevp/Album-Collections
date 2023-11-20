import React from 'react';
import '../styles/AddAlbum.css';

// Functional component for adding or updating an album
const AddAlbum = (props) => {
  // Destructure props for better readability
  const { selectedAlbum, newAlbum, setNewAlbum, handleUpdateAlbum, handleAddAlbum } = props;

  return (
    <div className="container">
      {/* Container for the form */}
      <div className="form-container">
        {/* Title of the form, dynamically displaying "Add" or "Update" based on selectedAlbum */}
        <h2>{selectedAlbum ? 'Update' : 'Add'} Album</h2>

        {/* Input group for album title */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Album Title"
            value={newAlbum.title}
            onChange={(e) => setNewAlbum({ title: e.target.value })}
          />

          {/* Button, dynamically displaying "Update Album" or "Add Album" based on selectedAlbum */}
          {selectedAlbum ? (
            <button onClick={handleUpdateAlbum} className="button">
              Update Album
            </button>
          ) : (
            <button onClick={handleAddAlbum} className="button">
              Add Album
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Export the component for use in other parts of the application
export default AddAlbum;
