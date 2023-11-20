// App.js
import React, { useState, useEffect } from 'react';
import { getAlbums, addAlbum, updateAlbum, deleteAlbum } from '../hooks/handleAlbem'; // Import functions
import { AddAlbum, AlbumList, NavBar } from '.'; // Assuming these components are exported from the same directory
import "../styles/App.css"

const App = () => {
  // State hooks for managing albums, newAlbum, and selectedAlbum
  const [albums, setAlbums] = useState([]);
  const [newAlbum, setNewAlbum] = useState({ title: '' });
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    // Fetch albums using the getAlbums function on component mount
    getAlbums()
      .then(data => setAlbums(data))
      .catch(error => console.error('Error fetching albums:', error));
  }, []);

  // Function to handle adding a new album
  const handleAddAlbum = () => {
    // Add a new album using the addAlbum function
    addAlbum(newAlbum)
      .then(response => setAlbums([...albums, response]))
      .catch(error => console.error('Error adding album:', error));

    // Clear the input field after adding an album
    setNewAlbum({ title: '' });
  };

  // Function to handle updating an album
  const handleUpdateAlbum = () => {
    if (!selectedAlbum) {
      console.error('No album selected for update');
      return;
    }

    // Update the selected album using the updateAlbum function
    updateAlbum(selectedAlbum.id, newAlbum.title)
      .then(response => {
        const updatedAlbums = albums.map(album =>
          album.id === selectedAlbum.id ? { ...album, title: response.title } : album
        );
        setAlbums(updatedAlbums);
        setSelectedAlbum(null); // Clear the selected album after update
        setNewAlbum({ title: '' }); // Clear the input field
      })
      .catch(error => console.error('Error updating album:', error));
  };

  // Function to handle deleting an album
  const handleDeleteAlbum = (id) => {
    // Delete an album using the deleteAlbum function
    deleteAlbum(id)
      .then(() => {
        const updatedAlbums = albums.filter(album => album.id !== id);
        setAlbums(updatedAlbums);
        setSelectedAlbum(null); // Clear the selected album after delete
        setNewAlbum({ title: '' }); // Clear the input field
      })
      .catch(error => console.error('Error deleting album:', error));
  };

  // Function to handle clicking the Edit button
  const handleEditClick = (album) => {
    // Set the selected album for editing
    setSelectedAlbum(album);
    setNewAlbum({ title: album.title });
  };

  // Function to handle clicking the Add button in the NavBar
  const handleAddClick = () => {
    setSelectedAlbum(""); // Clear the selected album
    setNewAlbum({ title: "Add" }); // Set a default title for the new album
  };

  return (
    <div>
      {/* NavBar component */}
      <NavBar
        selectedAlbum={selectedAlbum}
        handleAddClick={handleAddClick}
      />

      {/* AddAlbum component */}
      <div className='add-album'>
        <AddAlbum
          selectedAlbum={selectedAlbum}
          newAlbum={newAlbum}
          setNewAlbum={setNewAlbum}
          handleUpdateAlbum={handleUpdateAlbum}
          handleAddAlbum={handleAddAlbum}
        />
      </div>

      {/* AlbumList component */}
      <div className='album-list'>
        <AlbumList
          albums={albums}
          handleEditClick={handleEditClick}
          handleDeleteAlbum={handleDeleteAlbum}
        />
      </div>
    </div>
  );
};

export default App;
