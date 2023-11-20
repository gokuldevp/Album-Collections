// albumService.js
import axios from 'axios';

// Fetch albums from the API
export const getAlbums = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
  }
};

// Add a new album
export const addAlbum = async (newAlbum) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/albums', newAlbum);
    console.log('Album added successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding album:', error);
  }
};

// Update an existing album
export const updateAlbum = async (id, newTitle) => {
  try {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${id}`, { title: newTitle });
    console.log('Album updated successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating album:', error);
  }
};

// Delete an album
export const deleteAlbum = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
    console.log('Album deleted successfully:', id);
  } catch (error) {
    console.error('Error deleting album:', error);
  }
};
